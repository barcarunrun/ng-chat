import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";

import {ListRoomsQuery, APIService, CreateRoomInput} from "../API.service";

import {RoomService} from "../store/room/room.service";

@Component({
  selector: "app-room-list",
  templateUrl: "./room-list.component.html",
  styleUrls: ["./room-list.component.sass"]
})
export class RoomListComponent implements OnInit {
  roomid: string;
  newRoom: CreateRoomInput;

  constructor(
    private api: APIService,
    private router: Router,
    private route: ActivatedRoute,
    public roomService: RoomService
  ) {
    this.roomid = "";
  }

  async ngOnInit() {
    console.log("list ngOnInit");
  }

  ngOnDestroy() {}

  createRoom() {
    this.newRoom = {id: this.roomid};
    this.roomid = "";
    this.api.CreateRoom(this.newRoom);
  }
}
