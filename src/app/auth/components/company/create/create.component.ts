import {Component, OnInit} from "@angular/core";

import {Auth} from "aws-amplify";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateCompanyUserComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  phone_number: string;
  code: string;

  constructor() {}

  ngOnInit() {}

  create() {
    Auth.signUp({
      username: this.username,
      password: this.password,
      attributes: {
        email: this.email, // optional
        phone_number: this.phone_number, // optional - E.164 number convention
        // other custom attributes
        user_role: "company"
      },
      validationData: [] //optional
    })
      .then(data => console.log(data))
      .catch(err => console.log(err));

    // After retrieving the confirmation code from the user
    Auth.confirmSignUp(this.username, this.code, {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: true
    })
      .then(data => console.log(data))
      .catch(err => console.log(err));

    Auth.resendSignUp(this.username)
      .then(() => {
        console.log("code resent successfully");
      })
      .catch(e => {
        console.log(e);
      });
  }
}
