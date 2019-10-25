import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {Auth} from "aws-amplify";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateApplicantUserComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  code: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  create() {
    Auth.signUp({
      username: this.username,
      password: this.password,
      attributes: {
        email: this.email, // optional
        //phone_number: this.phone_number, // optional - E.164 number convention
        // other custom attributes
        "custom:user_role": "applicant"
      },
      validationData: [] //optional
    })
      .then(data => this.router.navigate(["/auth/confirm_email"]))
      .catch(err => console.log(err));
  }
}
