import {Component, OnInit} from "@angular/core";
import {invitedStatus} from "../../../API.service";
import {MyAPIService} from "../../../API.my";
import Amplify, {Auth, Hub} from "aws-amplify";
import {ulid} from "ulid";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class RoomInviteListComponent implements OnInit {
  invitedRooms: Array<any>;
  invitedRoomSubscription: any;

  constructor(private api: MyAPIService) {}

  ngOnInit() {
    Auth.currentAuthenticatedUser().then(user => {
      // 招待一覧を取得
      this.api
        .ListInvitedRooms(null, {
          toUsername: {eq: user.username},
          status: {eq: invitedStatus.hold}
        })
        .then(listInvitedRooms => {
          console.log("招待一覧:", listInvitedRooms);
          this.invitedRooms = listInvitedRooms.items;
        });

      // 招待を待機する
      this.invitedRoomSubscription = this.api
        .MyOnCreateInvitedRoomListener(user.username)
        .subscribe({
          next: newInvited => {
            console.log("newInvited:", newInvited);
            this.invitedRooms.push(newInvited.value.data.onCreateInvitedRoom);
          }
        });
    });
  }

  ngOnDestroy() {
    this.invitedRoomSubscription.unsubscribe();
  }

  async acceptInvite(inviteID: string) {
    const now = Math.floor(new Date().getTime() / 1000);
    const cognitUser = await Auth.currentAuthenticatedUser();
    const loginedUser = await this.api.GetUser(cognitUser.username);

    const result = await this.api.UpdateInvitedRoom({
      id: inviteID,
      status: invitedStatus.accepted,
      updatedAt: now
    });

    if (result.status === "accepted") {
      this.api.CreateRoomUser({
        id: ulid(),
        username: loginedUser.username,
        roomUserRoomId: result.room.id,
        roomUserUserId: loginedUser.id,
        createdAt: now,
        updatedAt: now
      });
    }

    this.invitedRooms = this.invitedRooms.filter(data => data.id !== inviteID);
  }

  async cancelInvite(inviteID: string) {
    const now = Math.floor(new Date().getTime() / 1000);
    const result = await this.api.UpdateInvitedRoom({
      id: inviteID,
      status: invitedStatus.canceled,
      updatedAt: now
    });

    this.invitedRooms = this.invitedRooms.filter(data => data.id !== inviteID);
  }
}
