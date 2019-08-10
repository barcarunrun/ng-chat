import {Component, OnInit} from "@angular/core";
import {APIService} from "./API.service";
import {RoomService} from "./store/room/room.service";
import {AuthService} from "./auth/auth.service";
import {tap} from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent implements OnInit {
  title = "ng-chat";
  isLogin: boolean = false;
  roomSubscription: any;

  constructor(
    private api: APIService,
    private roomService: RoomService,
    private auth: AuthService
  ) {
    this.roomSubscription = this.api.OnCreateRoomListener.subscribe({
      next: newRoom => {
        this.roomService.addRoom(newRoom.value.data.onCreateRoom);
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
  }
  ngOnDestroy() {
    this.roomSubscription.unsubscribe();
  }
}
