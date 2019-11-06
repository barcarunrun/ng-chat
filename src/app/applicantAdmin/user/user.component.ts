import { Component, OnInit } from "@angular/core";
import { AngularEditorConfig } from "@kolkov/angular-editor";

import {
  CreateArticleInput,
  ArticleStatus,
  DeleteApplicantCharacterInput
} from "../../API.service";
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
  userId: any;

  charactorList: Array<any>;
  charactorMasterList: Array<any>;
  charactorListForView: Array<any>;

  skillList: Array<any>;
  skillMasterList: Array<any>;
  skillListForView: Array<any>;

  filename: string;
  reader = new FileReader();
  fileNameBackground = "";
  fileNameProfile = "";
  fileUrlBackground: any;
  fileUrlProfile: any;
  fileUrlBackgroundTmp: string | ArrayBuffer;
  fileUrlProfileTmp: string | ArrayBuffer;
  selectedFileBackground: File;
  selectedFileProfile: File;
  applicantName: any;
  lastName: any;
  firstName: any;
  applicantId: any;
  applicantAbout = "";
  applicantEmail: any;

  constructor(private api: MyAPIService) {}

  async ngOnInit() {
    const cognitUser = await Auth.currentAuthenticatedUser();
    console.log(cognitUser);
    console.log(cognitUser.attributes.email);
    const loginedUser = await this.api.GetUser(cognitUser.username);
    console.log(loginedUser);
    console.log(loginedUser.id);
    this.user = loginedUser;
    this.userId = loginedUser.id;
    this.filename = this.user.id + ".png";
    this.fileNameBackground = "student/background/" + this.filename;
    this.fileNameProfile = "student/profile/" + this.filename;
    Storage.get(this.fileNameBackground)
      .then(result => {
        console.log(result);
        this.fileUrlBackground = result;
      })
      .catch(err => console.log("aaaaaaaaaaaaa" + err));
    Storage.get(this.fileNameProfile)
      .then(result => {
        console.log(result);
        this.fileUrlProfile = result;
      })
      .catch(err => console.log("bbbbbbbbbb" + err));

    let applicantData = await this.api.MyGetApplicant(loginedUser.id);
    console.log("applicantData:", applicantData);
    if (applicantData !== null) {
      this.applicantName =
        applicantData.lastName + " " + applicantData.firstName;
      this.applicantId = applicantData.id;
      this.applicantAbout = applicantData.about;
      this.applicantEmail = applicantData.email;
      this.lastName = applicantData.lastName;
      this.firstName = applicantData.firstName;
      this.charactorList = applicantData.characters.items;
      this.skillList = applicantData.skills.items;
      console.log(this.charactorList);
      console.log(this.skillList);
    } else {
      const now = Math.floor(new Date().getTime());
      console.log(cognitUser.attributes.email);
      applicantData = await this.api.CreateApplicant({
        id: loginedUser.id,
        applicantUserId: loginedUser.id,
        name: loginedUser.id,
        email: cognitUser.attributes.email,
        lastName: " ",
        firstName: " ",
        about: " ",
        createdAt: now,
        updatedAt: now
      });
      this.applicantName =
        applicantData.lastName + " " + applicantData.firstName;
      this.applicantId = applicantData.id;
      this.applicantAbout = applicantData.about;
      this.applicantEmail = applicantData.email;
      this.lastName = applicantData.lastName;
      this.firstName = applicantData.firstName;
      this.charactorList = applicantData.characters.items;
      this.skillList = applicantData.skills.items;
      console.log(this.charactorList);
      console.log(this.skillList);
    }

    //性格のロジック
    await this.api.ListCharacters().then(data => {
      var tmp = Array();
      var tmpOnlyId = Array();
      this.charactorMasterList = data.items;
      //idだけの配列を準備
      console.log(this.charactorList);
      for (let ii = 0; ii < this.charactorList.length; ii++) {
        tmpOnlyId.push(this.charactorList[ii].character.id);
      }
      //存在性のチェック
      for (let i = 0; i < data.items.length; i++) {
        if (tmpOnlyId.indexOf(data.items[i].id) == -1) {
          tmp.push({
            id: data.items[i].id,
            content: data.items[i].content,
            flag: false
          });
        } else {
          tmp.push({
            id: data.items[i].id,
            content: data.items[i].content,
            flag: true
          });
        }
      }
      this.charactorListForView = tmp;
    });

    //Skillのロジック
    await this.api.ListSkills().then(data => {
      var tmpSkill = Array();
      var tmpSkillOnlyId = Array();
      this.skillMasterList = data.items;
      if (this.skillList.length > 0) {
        //idだけの配列を準備
        for (let ii = 0; ii < this.skillList.length; ii++) {
          tmpSkillOnlyId.push(this.skillList[ii].skill.id);
        }
      }
      //そこで存在性のチェック
      for (let i = 0; i < data.items.length; i++) {
        if (tmpSkillOnlyId.indexOf(data.items[i].id) == -1) {
          tmpSkill.push({
            id: data.items[i].id,
            content: data.items[i].content,
            flag: false
          });
        } else {
          tmpSkill.push({
            id: data.items[i].id,
            content: data.items[i].content,
            flag: true
          });
        }
      }
      this.skillListForView = tmpSkill;
    });
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
    const now = Math.floor(new Date().getTime());
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
  async characterToggle(id) {
    console.log(id);

    //DBに存在するかの確認

    //あればDelete
    //const input: DeleteApplicantCharacterInput = { id: "test" };
    //await this.api.DeleteApplicantCharacter(input).then(data => {});

    //なければCreate
  }
  async skillToggle(id) {
    console.log(id);

    //DBに存在するかの確認

    //あればDelete
    //const input: DeleteApplicantCharacterInput = { id: "test" };
    //await this.api.DeleteApplicantCharacter(input).then(data => {});

    //なければCreate
  }
}
