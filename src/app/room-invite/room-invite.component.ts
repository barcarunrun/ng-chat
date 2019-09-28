import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import Amplify, {Auth, Hub} from "aws-amplify";
import {MyAPIService} from "../API.my";
import {CreateInvitedRoomInput, invitedStatus} from "../API.service";

@Component({
  selector: "app-room-invite",
  templateUrl: "./room-invite.component.html",
  styleUrls: ["./room-invite.component.sass"]
})
export class RoomInviteComponent implements OnInit {
  fromUser: any;
  roomID: string;
  toUser: string;
  isOpen: boolean;

  constructor(private route: ActivatedRoute, private api: MyAPIService) {
    this.isOpen = false;
    this.toUser = "";
  }

  ngOnInit() {
    Auth.currentAuthenticatedUser().then(user => {
      this.fromUser = user;
    });
    this.route.paramMap.subscribe(async paramMap => {
      this.roomID = paramMap.get("id");
    });
  }

  toggleModal(): void {
    this.isOpen = !this.isOpen;
  }

  inviteUser() {
    const now = new Date();
    const input: CreateInvitedRoomInput = {
      invitedRoomRoomId: this.roomID,
      invitedRoomToUserId: this.toUser,
      toUsername: this.toUser,
      invitedRoomFromUserId: this.fromUser.username,
      status: invitedStatus.hold,
      createdAt: Math.floor(now.getTime() / 1000),
      updatedAt: Math.floor(now.getTime() / 1000)
    };
    this.api.CreateInvitedRoom(input);
  }
}
