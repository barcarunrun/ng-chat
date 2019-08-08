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
  roomSubscription: any;

  constructor(private api: APIService) {
    this.roomid = "";
  }

  async ngOnInit() {
    this.roomSubscription = this.api.OnCreateRoomListener.subscribe({
      next: newRoom => {
        this.rooms.push(newRoom.value.data.onCreateRoom);
      }
    });
    // Simple query
    const roomsGql = await this.api.ListRooms();
    this.rooms = roomsGql.items;
  }

  ngOnDestroy() {
    this.roomSubscription.describe();
  }

  createRoom() {
    this.newRoom = {id: this.roomid};
    this.api.CreateRoom(this.newRoom);
  }
}
