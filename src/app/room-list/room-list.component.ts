import {Component, OnInit} from "@angular/core";

import {ListRoomsQuery, APIService, CreateRoomInput} from "../API.service";
import {input} from "@aws-amplify/ui";

@Component({
  selector: "app-room-list",
  templateUrl: "./room-list.component.html",
  styleUrls: ["./room-list.component.sass"]
})
export class RoomListComponent implements OnInit {
  roomsGql: ListRoomsQuery;
  rooms: Array<object>;
  roomid: string;
  newRoom: CreateRoomInput;

  constructor(private api: APIService) {
    this.roomid = "";
  }

  async ngOnInit() {
    // Simple query
    const roomsGql = await this.api.ListRooms();
    this.rooms = roomsGql.items;
  }

  createRoom() {
    this.newRoom = {id: this.roomid};
    this.api.CreateRoom(this.newRoom);
  }
}
