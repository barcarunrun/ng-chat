import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {Auth} from "aws-amplify";

@Component({
  selector: "app-confirm-email",
  templateUrl: "./confirm-email.component.html",
  styleUrls: ["./confirm-email.component.css"]
})
export class ConfirmEmailComponent implements OnInit {
  username: string;
  code: string;

  constructor(private router: Router) {}

  ngOnInit() {}
  confirm() {
    // After retrieving the confirmation code from the user
    Auth.confirmSignUp(this.username, this.code, {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: true
    })
      .then(data => this.router.navigate(["/auth"]))
      .catch(err => console.log(err));
  }

  resend() {
    Auth.resendSignUp(this.username)
      .then(() => {
        console.log("code resent successfully");
      })
      .catch(e => {
        console.log(e);
      });
  }
}
