import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../../auth/auth.service";
import {tap} from "rxjs/operators";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.sass"]
})
export class NavComponent implements OnInit {
  isActive: boolean;
  isLogin: boolean = false;

  constructor(private auth: AuthService) {
    this.isActive = false;
    this.auth.isAuthenticated().pipe(
      tap(loggedIn => {
        console.log("loggedIn:", loggedIn);
        if (!loggedIn) {
          this.isLogin = true;
        }
      })
    );
  }

  ngOnInit() {}

  disableMenu(): void {
    this.isActive = !this.isActive;
  }

  logout() {
    this.auth.signOut();
  }
}
