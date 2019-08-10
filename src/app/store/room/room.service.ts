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
      console.log(roomsGql.items);
      this.model = this.modelFactory.create(roomsGql.items);
      this.rooms$ = this.model.data$;
    });
  }

  addRoom(room: Room) {
    const rooms = this.model.get();
    rooms.push(room);
    this.model.set(rooms);
  }
}
