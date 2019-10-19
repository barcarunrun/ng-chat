import { Component, OnInit } from "@angular/core";
import { APIService } from "./API.service";
import { RoomService } from "./store/room/room.service";
import { AuthService } from "./auth/auth.service";
import { tap } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent implements OnInit {
  static readonly Image_URL: string =
    "https://ng-chatd6789a4c14844d64953bec60ce84fff6-master.s3-ap-northeast-1.amazonaws.com/public";
  title = "Lotre";
  isLogin: boolean = false;
  roomSubscription: any;

  constructor(
    private api: APIService,
    private router: Router,
    private route: ActivatedRoute,
    private roomService: RoomService,
    private auth: AuthService
  ) {
    this.roomSubscription = this.api.OnCreateRoomListener.subscribe({
      next: newRoom => {
        this.roomService.addRoom(newRoom.value.data.onCreateRoom);
        this.router.navigate([
          "/messanger/rooms/" + newRoom.value.data.onCreateRoom.id
        ]);
      }
    });
    this.auth.isAuthenticated().pipe(
      tap(loggedIn => {
        if (!loggedIn) {
          this.isLogin = true;
        }
      })
    );
  }

  async ngOnInit() {
    console.log("app component");
    // console.log(rooms);
    // console.log(this.router.url);
    // if (this.router.url === "/") {
    //   this.router.navigate(["/rooms/" + this.roomService.rooms$[0]]);
    // }
  }
  ngOnDestroy() {
    this.roomSubscription.unsubscribe();
  }
}
