import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import Amplify, {Auth, Hub} from "aws-amplify";
import {MyAPIService} from "../API.my";
import {CreateInvitedRoomInput, invitedStatus} from "../API.service";
import {ulid} from "ulid";

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
  listUser: any[];

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
      this.api.ListUsers().then(data => {
        console.log("ListUsers:", data.items);
        this.listUser = data.items;
      });
    });
  }

  toggleModal(): void {
    this.isOpen = !this.isOpen;
  }

  inviteUser() {
    if (this.fromUser !== this.toUser) {
      const now = new Date();
      const input: CreateInvitedRoomInput = {
        id: ulid(),
        invitedRoomRoomId: this.roomID,
        invitedRoomToUserId: this.toUser,
        toUsername: this.toUser,
        invitedRoomFromUserId: this.fromUser.username,
        status: invitedStatus.hold,
        createdAt: Math.floor(now.getTime() / 1000),
        updatedAt: Math.floor(now.getTime() / 1000)
      };
      const result = this.api.CreateInvitedRoom(input);
      console.log("CreateInvitedRoom result:", result);
    }
  }
}
