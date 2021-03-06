import {Injectable} from "@angular/core";
import {Model, ModelFactory} from "@angular-extensions/model";
import {Observable} from "rxjs";

import {MyAPIService} from "../../API.my";
import {GetRoomQuery} from "../../API.service";
import {filter} from "minimatch";

enum invitedStatus {
  hold = "hold",
  accepted = "accepted",
  canceled = "canceled"
}

type Room = {
  __typename: "Room";
  id: string;
  name: string;
  image: string;
  owner: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
  };
  inviting: {
    __typename: "ModelInvitedRoomConnection";
    items: Array<{
      __typename: "InvitedRoom";
      id: string;
      toUsername: string;
      status: invitedStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  users: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
      username: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
  messages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      content: string;
      when: string;
      roomId: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

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

    this.model = this.modelFactory.create([]);
    this.rooms$ = this.model.data$;
  }

  delRooms() {
    this.model = this.modelFactory.create([]);
    this.rooms$ = this.model.data$;
  }

  addRoom(room: any) {
    const rooms = this.model.get();
    rooms.unshift(room);
    this.model.set(rooms);
  }
}
