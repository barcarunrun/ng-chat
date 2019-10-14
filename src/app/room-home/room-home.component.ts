import {Component, OnInit} from "@angular/core";
import {MyAPIService} from "../API.my";
import Amplify, {Auth, Hub} from "aws-amplify";

@Component({
  selector: "app-room-home",
  templateUrl: "./room-home.component.html",
  styleUrls: ["./room-home.component.sass"]
})
export class RoomHomeComponent implements OnInit {
  constructor(private api: MyAPIService) {}

  ngOnInit() {
    // Auth.currentAuthenticatedUser().then(user => {
    // });
  }
}
