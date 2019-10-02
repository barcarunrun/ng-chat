import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";

import {ListRoomsQuery, CreateRoomInput} from "../API.service";
import {MyAPIService} from "../API.my";

import Amplify, {Auth, Hub} from "aws-amplify";

import {RoomService} from "../store/room/room.service";

import {Store, select} from "@ngrx/store";
import {Observable} from "rxjs";
import {showRoomDetail} from "../store/session/session.action";

import {ulid} from "ulid";

@Component({
  selector: "app-room-list",
  templateUrl: "./room-list.component.html",
  styleUrls: ["./room-list.component.sass"]
})
export class RoomListComponent implements OnInit {
  roomid: string;
  newRoom: CreateRoomInput;
  invitedRooms: Array<object>;
  invitedRoomSubscription: any;
  addedRoomUserSubscription: any;
  showRoomDetail$: Observable<boolean>;

  constructor(
    private api: MyAPIService,
    private router: Router,
    private route: ActivatedRoute,
    public roomService: RoomService,
    private store: Store<{showRoomDetail: boolean}>
  ) {
    this.roomid = "";
    this.showRoomDetail$ = store.pipe(select("showRoomDetail"));
  }

  async ngOnInit() {
    console.log("list ngOnInit");

    Auth.currentAuthenticatedUser().then(user => {
      this.api
        .ListRoomUsers(null, {username: {eq: user.username}})
        .then(roomsGql =>
          roomsGql.items.forEach(item => this.roomService.addRoom(item.room))
        );

      // Subscribe to creation of Message
      this.invitedRoomSubscription = this.api
        .MyOnCreateInvitedRoomListener(user.username)
        .subscribe({
          next: newInvited => {
            console.log("newInvited:", newInvited);
            this.invitedRooms.push(newInvited.value.data.MyOnCreateInviteRoom);
          }
        });

      this.addedRoomUserSubscription = this.api
        .MyOnCreateRoomUserListener(user.username)
        .subscribe({
          next: newRoomUser => {
            console.log("newRoomUser:", newRoomUser);
            this.invitedRooms.push(
              newRoomUser.value.data.MyOnCreateRoomUser.room
            );
          }
        });
    });
  }

  ngOnDestroy() {
    this.invitedRoomSubscription.unsubscribe();
    this.addedRoomUserSubscription.unsubscribe();
  }

  async createRoom() {
    const now = new Date();
    const cognitUser = await Auth.currentAuthenticatedUser();
    const loginedUser = await this.api.GetUser(cognitUser.username);

    console.log("cognitUser:", cognitUser);
    console.log("loginedUser:", loginedUser);
    this.newRoom = {
      id: ulid(),
      name: this.roomid,
      owner: cognitUser.username,
      roomUserId: loginedUser.id,
      image: "https://picsum.photos/100",
      createdAt: Math.floor(now.getTime() / 1000),
      updatedAt: Math.floor(now.getTime() / 1000)
    };
    this.roomid = "";
    console.log("this.newRoom:", this.newRoom);
    this.api.CreateRoom(this.newRoom).then(resultRoom => {
      if (resultRoom.id !== null) {
        this.api.CreateRoomUser({
          id: ulid(),
          username: loginedUser.username,
          roomUserRoomId: resultRoom.id,
          roomUserUserId: loginedUser.id,
          createdAt: Math.floor(now.getTime() / 1000),
          updatedAt: Math.floor(now.getTime() / 1000)
        });
      }
    });
  }

  showRoomDetail(): void {
    this.store.dispatch(showRoomDetail());
  }
}
