import { Component, OnInit } from "@angular/core";

import { Auth } from "aws-amplify";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginCompanyUserComponent implements OnInit {
  username: string;
  password: string;
  message: string;

  constructor() {}

  ngOnInit() {}

  async SignIn() {
    try {
      const user = await Auth.signIn(this.username, this.password);
      console.log(user);
    } catch (err) {
      if (err.code === "UserNotConfirmedException") {
        this.message = "IDもしくはパスワードが異なります";

        // The error happens if the user didn't finish the confirmation step when signing up
        // In this case you need to resend the code and confirm the user
        // About how to resend the code and confirm the user, please check the signUp part
      } else if (err.code === "PasswordResetRequiredException") {
        this.message = "IDもしくはパスワードが異なります";

        // The error happens when the password is reset in the Cognito console
        // In this case you need to call forgotPassword to reset the password
        // Please check the Forgot Password part.
      } else if (err.code === "NotAuthorizedException") {
        this.message = "IDもしくはパスワードが異なります";

        // The error happens when the incorrect password is provided
      } else if (err.code === "UserNotFoundException") {
        this.message = "IDもしくはパスワードが異なります";

        // The error happens when the supplied username/email does not exist in the Cognito user pool
      } else {
        this.message = "IDもしくはパスワードが異なります";

        console.log(err);
      }
    }
  }
}
