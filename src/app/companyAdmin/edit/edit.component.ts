import { Component, OnInit } from "@angular/core";
import { AngularEditorConfig } from "@kolkov/angular-editor";

import { CreateArticleInput, ArticleStatus } from "../../API.service";
import API, { graphqlOperation } from "@aws-amplify/api";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { Auth, Storage } from "aws-amplify";
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
import { MyAPIService } from "../../API.my";
import { ulid } from "ulid";

@Component({
  selector: "table-cmp",
  moduleId: module.id,
  templateUrl: "edit.component.html",
  styleUrls: ["edit.component.css"]
})
export class EditComponent implements OnInit {
  user: any;
  constructor(private api: MyAPIService, private route: ActivatedRoute) {}
  selectedFile: File;

  htmlContent = "";
  title = "";
  temId = "";
  articleStatus = open;
  reader = new FileReader();
  fileUrl: Object | String;

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
    let param1 = this.route.snapshot.queryParams["id"];

    //Getのパラメータをkeyにarticleを取得
    await this.api.GetArticle(param1).then(data => {
      this.title = data.title;
      this.htmlContent = data.content;
      Storage.get("article/" + data.id + ".png")
        .then(result => {
          console.log(result);
          this.fileUrl = result;
        })
        .catch(err => console.log("1234"));
    });
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.reader.onload = e => {
      this.fileUrl = e.target["result"];
    };
    this.reader.readAsDataURL(this.selectedFile);
  }
  async publish() {
    const now = Math.floor(new Date().getTime());
    var tempId = ulid();
    var filename = tempId + ".png";
    this.uploadImg(tempId);
    const article: CreateArticleInput = {
      id: tempId,
      title: this.title,
      thumbnail: filename,
      content: this.htmlContent,
      isOpen: ArticleStatus.open,
      articleCompanyId: "bbbb",
      articleAreaId: "aaaa",
      createdAt: now,
      updatedAt: now
    };
    const sent = await this.api.CreateArticle(article);
    setTimeout("location.reload()", 1000);
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
