import { ArticleStatus, UpdateArticleInput } from "../../API.service";
import { Component, OnInit, QueryList } from "@angular/core";
import Amplify, { Auth, Hub, graphqlOperation, Storage } from "aws-amplify";
import { MyAPIService } from "../../API.my";

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: "table-cmp",
  moduleId: module.id,
  templateUrl: "table.component.html"
})
export class TableComponent implements OnInit {
  articleList: Array<any>;
  user: any;
  articleStatus = open;
  constructor(private api: MyAPIService) {}
  async ngOnInit() {
    const cognitUser = await Auth.currentAuthenticatedUser();
    const loginedUser = await this.api.GetUser(cognitUser.username);
    this.user = loginedUser;
    //articleListにデータを突っ込む
    this.api.ListArticles().then(data => {
      this.articleList = data.items;
    });
  }

  unixTime2ymd(intTime) {
    var d = new Date(intTime);
    var year = d.getFullYear();
    var d = new Date(intTime);
    var y = new Date(intTime * 1000);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();

    return year + "-" + month + "-" + day;
  }

  redirect(id) {
    location.href = "/companyAdmin/edit?id=" + id;
  }

  async change(id) {
    var tmp;
    const now = Math.floor(new Date().getTime());
    this.api.GetArticle(id).then(data => {
      tmp = data.isOpen;
      console.log("qqqqqq" + tmp);
      const article: UpdateArticleInput = {
        id: id,
        isOpen: ArticleStatus.close,
        updatedAt: now
      };
      console.log("qqqqqqaaaaa" + tmp);
      if (tmp == "open") {
        console.log("12345");
        const article: UpdateArticleInput = {
          id: id,
          isOpen: ArticleStatus.close,
          updatedAt: now
        };
        this.api.UpdateArticle(article).then(data => {
          this.api.ListArticles().then(data => {
            this.articleList = data.items;
          });
        });
      } else {
        console.log("123456789");
        const article: UpdateArticleInput = {
          id: id,
          isOpen: ArticleStatus.open,
          updatedAt: now
        };
        this.api.UpdateArticle(article).then(data => {
          this.api.ListArticles().then(data => {
            this.articleList = data.items;
          });
        });
      }

      setTimeout("location.reload()", 1000);
    });
  }
}
