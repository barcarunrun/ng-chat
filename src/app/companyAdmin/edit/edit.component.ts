import {Component, OnInit} from "@angular/core";
import {AngularEditorConfig} from "@kolkov/angular-editor";

import {CreateArticleInput, ArticleStatus} from "../../API.service";
import API, {graphqlOperation} from "@aws-amplify/api";

import {Auth, Storage} from "aws-amplify";
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
import {MyAPIService} from "../../API.my";
import {ulid} from "ulid";
import {unescapeIdentifier} from "@angular/compiler";
import {stringify} from "querystring";

@Component({
  selector: "table-cmp",
  moduleId: module.id,
  templateUrl: "edit.component.html",
  styleUrls: ["edit.component.css"]
})
export class EditComponent implements OnInit {
  user: any;
  constructor(private api: MyAPIService) {}
  public tableData1: TableData;
  public tableData2: TableData;

  selectedFile: File;

  name = "Angular 6";
  htmlContent = "";
  title = "";
  temId = "";
  articleStatus = open;

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "15rem",
    minHeight: "5rem",
    placeholder: "Enter text here...",
    translate: "no"
  };

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "15rem",
    showToolbar: true,
    minHeight: "5rem",
    placeholder: "Enter text here...",
    translate: "no",
    defaultFontName: "Arial",
    customClasses: [
      {
        name: "quote",
        class: "quote"
      },
      {
        name: "redText",
        class: "redText"
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1"
      }
    ]
  };

  async ngOnInit() {
    const cognitUser = await Auth.currentAuthenticatedUser();
    const loginedUser = await this.api.GetUser(cognitUser.username);
    this.user = loginedUser;
  }
  reader = new FileReader();
  fileUrl: string | ArrayBuffer;

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.reader.onload = e => {
      this.fileUrl = e.target["result"];
    };
    this.reader.readAsDataURL(this.selectedFile);
  }
  async publish() {
    const now = Math.floor(new Date().getTime() / 1000);
    var tempId = ulid();
    console.log(tempId);
    var filename = tempId + ".png";
    console.log(tempId + "test");
    console.log(tempId + "12345");
    this.uploadImg(tempId);
    const article: CreateArticleInput = {
      id: tempId,
      title: this.title,
      thumbnail: filename,
      content: this.htmlContent,
      isOpen: ArticleStatus.open,
      articleCompanyId: this.user.id,

      createdAt: now,
      updatedAt: now
    };
    const sent = await this.api.CreateArticle(article);
  }

  async uploadImg(id) {
    const file = this.selectedFile;
    console.log(id);
    var filename = id + ".png";
    console.log(filename);
    Storage.put("article/" + filename, file, {
      contentType: "image/png"
    })
      .then(result => console.log(result)) // {key: "test.txt"}
      .catch(err => console.log(err));
  }
}
