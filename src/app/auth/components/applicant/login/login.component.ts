import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Auth } from "aws-amplify";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginApplicantUserComponent implements OnInit {
  username: string;
  password: string;
  message: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  async SignIn() {
    try {
      console.log("12345");
      const user = await Auth.signIn(this.username, this.password);
      this.router.navigate(["/"]);
      console.log(user);
    } catch (err) {
      if (err.code === "UserNotConfirmedException") {
        console.log(err);
        this.message = "IDもしくはパスワードが異なります";
        // The error happens if the user didn't finish the confirmation step when signing up
        // In this case you need to resend the code and confirm the user
        // About how to resend the code and confirm the user, please check the signUp part
      } else if (err.code === "PasswordResetRequiredException") {
        console.log(err);
        this.message = "IDもしくはパスワードが異なります";
        // The error happens when the password is reset in the Cognito console
        // In this case you need to call forgotPassword to reset the password
        // Please check the Forgot Password part.
      } else if (err.code === "NotAuthorizedException") {
        console.log(err);
        this.message = "IDもしくはパスワードが異なります";
        // The error happens when the incorrect password is provided
      } else if (err.code === "UserNotFoundException") {
        console.log(err);
        this.message = "IDもしくはパスワードが異なります";
        // The error happens when the supplied username/email does not exist in the Cognito user pool
      } else {
        console.log(err);
        this.message = "IDもしくはパスワードが異なります";
      }
    }
  }
}
