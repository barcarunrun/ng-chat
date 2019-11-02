import {Injectable} from "@angular/core";
// 追加
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {fromPromise} from "rxjs/observable/fromPromise";
import {map, tap, catchError} from "rxjs/operators";
import {of} from "rxjs/observable/of";
import Amplify, {Auth, Hub} from "aws-amplify";
import awsconfig from "../../aws-exports";
import {MyAPIService} from "../API.my";
import {input} from "@aws-amplify/ui";

import {RoomService} from "../store/room/room.service";
import {ulid} from "ulid";

@Injectable()
export class AuthService {
  public loggedIn: BehaviorSubject<boolean>;

  constructor(
    private router: Router,
    private api: MyAPIService,
    private roomService: RoomService
  ) {
    Amplify.configure(awsconfig);
    this.loggedIn = new BehaviorSubject<boolean>(false);

    // in your redirected sign in page
    // when the page is loaded, run the following function
    console.log("Hub.listen");

    Hub.listen("auth", data => {
      console.log("data.payload.event: ", data.payload.event);
      switch (data.payload.event) {
        case "signIn":
          console.log("now the user is signed in");
          this.router.navigate(["/"]);

          // AppSync上のユーザーを作成
          this.api.GetUser(data.payload.data.username).then(loginedUser => {
            if (loginedUser === null) {
              this.api.CreateUser({
                id: data.payload.data.username,
                username: data.payload.data.username,
                displayName: data.payload.data.username,
                user_role: data.payload.data.attributes["custom:user_role"],
                logo: "logo_url",
                createdAt: 1,
                updatedAt: 2
              });
              console.log("add new user to table");
            } else {
              console.log("user table exist: ", loginedUser);
            }

            if (
              data.payload.data.attributes["custom:user_role"] === "applicant"
            ) {
              this.api
                .GetApplicant(data.payload.data.usernam)
                .then(applicant => {
                  if (applicant === null) {
                    this.api.CreateApplicant({
                      id: data.payload.data.username,
                      applicantUserId: data.payload.data.username,
                      name: data.payload.data.username,
                      email: data.payload.data.email,
                      lastName: "",
                      firstName: "",
                      about: "",
                      createdAt: 1,
                      updatedAt: 2
                    });
                    console.log("add new applicant to table");
                  } else {
                    console.log("user applicant exist: ", applicant);
                  }
                });
            }
          });
          break;
        case "signIn_failure":
          console.log("the user failed to sign in");
          console.log("the error is", data.payload.data);
          this.router.navigate(["/auth"]);
          break;
        default:
          console.log("default");
          this.router.navigate(["/auth"]);
          this.roomService.delRooms();
          break;
      }
    });
  }

  /** サインアップ */
  public signUp(email, password): Observable<any> {
    return fromPromise(Auth.signUp(email, password));
  }

  /** 検証 */
  public confirmSignUp(email, code): Observable<any> {
    return fromPromise(Auth.confirmSignUp(email, code));
  }

  /** ログイン */
  public signIn(email, password): Observable<any> {
    return fromPromise(Auth.signIn(email, password)).pipe(
      tap(() => this.loggedIn.next(true))
    );
  }

  /** ログイン状態の取得 */
  public isAuthenticated(): Observable<boolean> {
    return fromPromise(Auth.currentAuthenticatedUser()).pipe(
      map(result => {
        this.loggedIn.next(true);
        return true;
      }),
      catchError(error => {
        this.loggedIn.next(false);
        return of(false);
      })
    );
  }

  /** ログアウト */
  public signOut() {
    fromPromise(Auth.signOut()).subscribe(
      result => {
        this.loggedIn.next(false);
        this.router.navigate(["/login"]);
      },
      error => console.log(error)
    );
  }
}
