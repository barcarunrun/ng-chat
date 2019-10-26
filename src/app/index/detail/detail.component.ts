import { Component, OnInit } from "@angular/core";
import { AngularEditorConfig } from "@kolkov/angular-editor";

import { CreateCommentInput, ArticleStatus } from "../../API.service";
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
  selector: "detail-cmp",
  moduleId: module.id,
  templateUrl: "detail.component.html"
})
export class DetailComponent implements OnInit {
  constructor(private api: MyAPIService, private route: ActivatedRoute) {}
  user: any;
  htmlContent = "";
  title = "";
  reader = new FileReader();
  fileUrl: Object | String;
  articleId = "";
  comment = "";
  comments: any;

  async ngOnInit() {
    const cognitUser = await Auth.currentAuthenticatedUser();
    const loginedUser = await this.api.GetUser(cognitUser.username);
    this.user = loginedUser;
    this.articleId = this.route.snapshot.queryParams["id"];

    //Getのパラメータをkeyにarticleを取得
    await this.api.GetArticle(this.articleId).then(data => {
      console.log(data);
      this.title = data.title;
      this.htmlContent = data.content;
      Storage.get("article/" + data.id + ".png")
        .then(result => {
          console.log(result);
          this.fileUrl = result;
        })
        .catch(err => console.log("1234"));
      this.api.ListComments().then(data => {
        this.comments = data.items;
        console.log(this.comments);
      });
    });
  }
  async post() {
    //コメントの生成
    const now = Math.floor(new Date().getTime());
    var tempId = ulid();
    console.log(this.comment);
    console.log(this.user.id);
    console.log(this.articleId);

    const commentInput: CreateCommentInput = {
      id: tempId,
      content: this.comment,
      createdAt: now,
      updatedAt: now,
      commentUserId: this.user.id,
      commentArticleId: this.articleId
    };
    console.log(commentInput);
    const sent = await this.api.CreateComment(commentInput).then();
  }
}
