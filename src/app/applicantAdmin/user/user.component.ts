import { Component, OnInit } from "@angular/core";
import { AngularEditorConfig } from "@kolkov/angular-editor";

import { CreateArticleInput, ArticleStatus } from "../../API.service";
import API, { graphqlOperation } from "@aws-amplify/api";

import { Auth, Storage } from "aws-amplify";
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
import { MyAPIService } from "../../API.my";
import { ulid } from "ulid";
import { unescapeIdentifier } from "@angular/compiler";
import { stringify } from "querystring";

@Component({
  selector: "user-cmp",
  moduleId: module.id,
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  user: any;
  filename: string;
  reader = new FileReader();
  fileNameBackground = "";
  fileNameProfile = "";
  fileUrlBackground: any;
  fileUrlProfile: any;
  fileUrlBackgroundTmp = "";
  fileUrlProfileTmp = "";
  selectedFileBackground: File;
  selectedFileProfile: File;

  constructor(private api: MyAPIService) {}

  async ngOnInit() {
    const cognitUser = await Auth.currentAuthenticatedUser();
    const loginedUser = await this.api.GetUser(cognitUser.username);
    this.user = loginedUser;
    this.filename = this.user.id + ".png";
    this.fileNameBackground = "student/background/" + this.filename;
    this.fileNameProfile = "student/profile/" + this.filename;
    Storage.get(this.fileNameBackground)
      .then(result => {
        console.log(result);
        this.fileUrlBackground = result;
      })
      .catch(err => console.log(err));
    Storage.get(this.fileNameProfile)
      .then(result => {
        console.log(result);
        this.fileUrlProfile = result;
      })
      .catch(err => console.log(err));
  }

  onFileChangedBackground(event) {
    this.selectedFileBackground = event.target.files[0];
    this.reader.onload = e => {
      this.fileUrlBackgroundTmp = e.target["result"];
    };
    this.reader.readAsDataURL(this.selectedFileBackground);
  }
  onFileChangedProfile(event) {
    this.selectedFileProfile = event.target.files[0];
    this.reader.onload = e => {
      this.fileUrlProfileTmp = e.target["result"];
    };
    this.reader.readAsDataURL(this.selectedFileProfile);
  }

  async publish() {
    const now = Math.floor(new Date().getTime() / 1000);
    this.uploadBackgroundImg(this.filename);
    this.uploadProfileImg(this.filename);
    setTimeout("location.reload()", 1000);
  }
  async uploadBackgroundImg(id) {
    const file = this.selectedFileBackground;
    Storage.put("student/background/" + id, file, {
      level: "public",
      contentType: "image/png"
    })
      .then(result => console.log(result)) // {key: "test.txt"}
      .catch(err => console.log(err));
  }
  async uploadProfileImg(id) {
    const file = this.selectedFileProfile;
    Storage.put("student/profile/" + id, file, {
      level: "public",
      contentType: "image/png"
    })
      .then(result => console.log(result)) // {key: "test.txt"}
      .catch(err => console.log(err));
  }
}
