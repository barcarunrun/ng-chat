import { Component, OnInit } from "@angular/core";
import { AngularEditorConfig } from "@kolkov/angular-editor";

import {
  UpdateCompanyInput,
  ArticleStatus,
  ModelCompanyFilterInput
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
export class CompanyComponent implements OnInit {
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
  companyName: any;
  companyId: any;
  companyAbout: any;
  companyEmail: any;

  constructor(private api: MyAPIService) {}

  async ngOnInit() {
    const cognitUser = await Auth.currentAuthenticatedUser();
    const loginedUser = await this.api.GetUser(cognitUser.username);
    this.user = loginedUser;
    this.filename = this.user.id + ".png";
    this.fileNameBackground = "company/background/" + this.filename;
    this.fileNameProfile = "company/profile/" + this.filename;
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
    //idをキーに企業情報を取得
    //const company: ModelCompanyFilterInput = {};
    await this.api.ListCompanys().then(data => {
      console.log(data);
    });
    await this.api.GetCompany("bbbb").then(data => {
      this.companyName = data.name;
      this.companyId = data.id;
      this.companyAbout = data.about;
      this.companyEmail = data.email;
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
    const company: UpdateCompanyInput = {
      id: "bbbb",
      name: this.companyName,
      email: this.companyEmail,
      about: this.companyAbout,
      updatedAt: now
    };

    this.api.UpdateCompany(company).then(data => {});
    setTimeout("location.reload()", 1000);
  }
  async uploadBackgroundImg(id) {
    const file = this.selectedFileBackground;
    Storage.put("company/background/" + id, file, {
      level: "public",
      contentType: "image/png"
    })
      .then(result => console.log(result)) // {key: "test.txt"}
      .catch(err => console.log(err));
  }
  async uploadProfileImg(id) {
    const file = this.selectedFileProfile;
    Storage.put("company/profile/" + id, file, {
      level: "public",
      contentType: "image/png"
    })
      .then(result => console.log(result)) // {key: "test.txt"}
      .catch(err => console.log(err));
  }
}
