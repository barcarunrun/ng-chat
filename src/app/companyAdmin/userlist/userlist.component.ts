import { Component, OnInit } from "@angular/core";
import { AngularEditorConfig } from "@kolkov/angular-editor";

import {
  CreateCommentInput,
  ArticleStatus,
  ModelCompanyFilterInput
} from "../../API.service";
import API, { graphqlOperation } from "@aws-amplify/api";
import { CreateInvitedRoomInput, invitedStatus } from "../../API.service";

import { Auth, Storage } from "aws-amplify";
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
import { MyAPIService } from "../../API.my";
import { ulid } from "ulid";
import { unescapeIdentifier } from "@angular/compiler";
import { stringify } from "querystring";

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: "table-cmp",
  moduleId: module.id,
  templateUrl: "userlist.component.html"
})
export class UserlistComponent implements OnInit {
  userList: Array<any>;
  user: any;

  constructor(private api: MyAPIService) {}

  ngOnInit() {}

  search() {
    this.api.ListApplicants().then(data => {
      this.userList = data.items;
    });
  }

  async newRoom(applicantID: string) {
    // 応募&問い合わせする
    const now = Math.floor(new Date().getTime() / 1000);
    const cognitUser = await Auth.currentAuthenticatedUser();
    const loginedUser = await this.api.GetUser(cognitUser.username);

    const newRoomInput = {
      id: ulid(),
      name: applicantID,
      owner: cognitUser.username,
      roomUserId: loginedUser.id,
      image: "https://loremflickr.com/320/240?random=" + now,
      createdAt: now,
      updatedAt: now
    };
    const newRoom = await this.api.CreateRoom(newRoomInput);

    const input: CreateInvitedRoomInput = {
      id: ulid(),
      invitedRoomRoomId: newRoom.id,
      invitedRoomToUserId: applicantID,
      toUsername: applicantID,
      invitedRoomFromUserId: cognitUser.username,
      status: invitedStatus.hold,
      createdAt: now,
      updatedAt: now
    };
    this.api.CreateInvitedRoom(input);

    this.api.CreateRoomUser({
      id: ulid(),
      username: loginedUser.username,
      roomUserRoomId: newRoom.id,
      roomUserUserId: loginedUser.id,
      createdAt: now,
      updatedAt: now
    });
  }
}
