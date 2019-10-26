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
}
