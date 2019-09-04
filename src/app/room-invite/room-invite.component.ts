import {Component, OnInit} from "@angular/core";
import Amplify, {Auth, Hub} from "aws-amplify";
import {MyAPIService} from "../API.my";
import {CreateInvitedRoomInput, invitedStatus} from "../API.service";

@Component({
  selector: "app-room-invite",
  templateUrl: "./room-invite.component.html",
  styleUrls: ["./room-invite.component.css"]
})
export class RoomInviteComponent implements OnInit {
  fromUser: any;
  roomID: string;
  invitingUser: string;
  toUser: string;

  constructor(private api: MyAPIService) {
    this.roomID = "";
    this.invitingUser = "";
  }

  ngOnInit() {
    Auth.currentAuthenticatedUser().then(user => {
      this.fromUser = user;
    });
  }

  inviteUser() {
    const now = new Date();
    const input: CreateInvitedRoomInput = {
      roomId: this.roomID,
      toUser: this.toUser,
      fromUser: this.fromUser.username,
      status: invitedStatus.hold,
      createdAt: Math.floor(now.getTime() / 1000),
      updatedAt: Math.floor(now.getTime() / 1000)
    };
    this.api.CreateInvitedRoom(input);
  }
}
