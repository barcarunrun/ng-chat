import { Component, OnInit, QueryList } from "@angular/core";
import Amplify, { Auth, Hub, graphqlOperation, Storage } from "aws-amplify";
import { MyAPIService } from "../../API.my";

import {} from "../../API.service";

@Component({
  selector: "landingpage-cmp",
  moduleId: module.id,
  templateUrl: "landingpage.component.html"
})
export class LandingPageComponent implements OnInit {
  async ngOnInit() {}

  redirect(id) {
    location.href = "/detail?id=" + id;
  }
}
