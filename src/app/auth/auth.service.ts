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

@Injectable()
export class AuthService {
  public loggedIn: BehaviorSubject<boolean>;

  constructor(private router: Router) {
    Amplify.configure(awsconfig);
    this.loggedIn = new BehaviorSubject<boolean>(false);

    // in your redirected sign in page
    // when the page is loaded, run the following function
    Hub.listen("auth", data => {
      switch (data.payload.event) {
        case "signIn":
          console.log("now the user is signed in");
          this.router.navigate(["/home"]);
          break;
        case "signIn_failure":
          console.log("the user failed to sign in");
          console.log("the error is", data.payload.data);
          this.router.navigate(["/login"]);
          break;
        default:
          this.router.navigate(["/login"]);
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
