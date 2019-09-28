import {Component, OnInit} from "@angular/core";
import {MyAPIService} from "../../../API.my";
import Amplify, {Auth, Hub} from "aws-amplify";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class RoomInviteListComponent implements OnInit {
  constructor(private api: MyAPIService) {}

  ngOnInit() {
    Auth.currentAuthenticatedUser().then(user => {
      this.api.ListInvitedRooms(user.name).then(data => {
        console.log(data.items);
      });
    });
  }
}
