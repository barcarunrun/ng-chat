import {Injectable} from "@angular/core";
import {Model, ModelFactory} from "@angular-extensions/model";
import {Observable} from "rxjs";

import {MyAPIService, Room} from "../../API.my";

@Injectable({
  providedIn: "root"
})
export class RoomService {
  private model: Model<Room[]>;

  rooms$: Observable<Room[]>;

  constructor(
    private modelFactory: ModelFactory<Room[]>,
    private api: MyAPIService
  ) {
    console.log("store room constructor");
    this.api.ListRooms().then(roomsGql => {
      const sortedRooms = roomsGql.items.sort((a0, b0) => {
        const a = new Date(a0.updatedAt);
        const b = new Date(b0.updatedAt);
        return a > b ? -1 : a < b ? 1 : 0;
      });
      console.log(sortedRooms);
      this.model = this.modelFactory.create(sortedRooms);
      this.rooms$ = this.model.data$;
    });
  }

  addRoom(room: Room) {
    const rooms = this.model.get();
    rooms.unshift(room);
    this.model.set(rooms);
  }
}
