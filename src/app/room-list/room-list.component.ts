import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";

import {ListRoomsQuery, CreateRoomInput} from "../API.service";
import {MyAPIService} from "../API.my";

import Amplify, {Auth, Hub} from "aws-amplify";

import {RoomService} from "../store/room/room.service";

import {Store, select} from "@ngrx/store";
import {Observable} from "rxjs";
import {showRoomDetail} from "../store/session/session.action";

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
      console.log("user: ", user);
      // Subscribe to creation of Message
      this.invitedRoomSubscription = this.api
        .MyOnCreateInviteListener(user.name)
        .subscribe({
          next: newInvited => {
            console.log("newInvited:", newInvited);
            this.invitedRooms.push(newInvited.value.data.MyOnCreateInviteRoom);
          }
        });
    });
  }

  ngOnDestroy() {
    this.invitedRoomSubscription.unsubscribe();
  }

  createRoom() {
    const now = new Date();
    this.newRoom = {
      name: this.roomid,
      image: "https://picsum.photos/100",
      createdAt: Math.floor(now.getTime() / 1000),
      updatedAt: Math.floor(now.getTime() / 1000)
    };
    this.roomid = "";
    this.api.CreateRoom(this.newRoom);
  }

  showRoomDetail(): void {
    this.store.dispatch(showRoomDetail());
  }
}
