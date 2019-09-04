import {
  OnCreateMessageSubscription,
  OnCreateInvitedRoomSubscription,
  APIService
} from "./API.service";
import API, {graphqlOperation} from "@aws-amplify/api";
import * as Observable from "zen-observable";
import {Injectable} from "@angular/core";

export interface Room {
  __typename: "Room";
  id: string;
  createdAt: number;
  updatedAt: number;
}

export type GetRoomMessagesQuery = {
  __typename: "Room";
  id: string;
  createdAt: string | null;
  updatedAt: string | null;
  messages: {
    items: Array<{
      __typename: "Message";
      id: string | null;
      content: string | null;
      when: string | null;
      roomId: string | null;
      owner: string | null;
    }>;
    __typename: "ModelMessageConnection";
    nextToken: string | null;
  } | null;
};

export type GetInvitedRoomQuery = {
  __typename: "InvitedRoom";
  id: string;
  roomId: string;
  toUser: string;
  fromUser: string;
  status: invitedStatus;
  createdAt: number;
  updatedAt: number;
};
export enum invitedStatus {
  hold = "hold",
  accepted = "accepted",
  canceled = "canceled"
}

@Injectable({
  providedIn: "root"
})
export class MyAPIService extends APIService {
  constructor() {
    super();
  }
  async GetRoomMessages(id: string): Promise<GetRoomMessagesQuery> {
    const statement = `query GetRoom($id: ID!) {
        getRoom(id: $id) {
          __typename
          id
          createdAt
          updatedAt
          messages {
            items {
            __typename
              id
              content
              when
              roomId
              owner
            }
            __typename
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRoomMessagesQuery>response.data.getRoom;
  }

  MyOnCreateMessageListener(
    roomId: string
  ): Observable<OnCreateMessageSubscription> {
    const statement = `subscription OnCreateMessage($roomId: ID!) {
        onCreateMessage(roomId: $roomId) {
          __typename
          id
          content
          when
          roomId
          owner
          room {
            __typename
            id
            createdAt
            updatedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      roomId
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<OnCreateMessageSubscription>;
  }

  // 招待を受け取る
  async GetInvitedRoom(id: string): Promise<GetInvitedRoomQuery> {
    const statement = `query GetInvitedRoom($id: ID!) {
        getInvitedRoom(id: $id) {
          __typename
          id
          roomId
          toUser
          fromUser
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetInvitedRoomQuery>response.data.getInvitedRoom;
  }
  MyOnCreateInviteListener(
    toUser: string
  ): Observable<OnCreateInvitedRoomSubscription> {
    const statement = `subscription OnCreateInvitedRoom($toUser: String!) {
        onCreateInvitedRoom(toUser: $toUser) {
          __typename
          id
          roomId
          toUser
          fromUser
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      toUser
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<OnCreateInvitedRoomSubscription>;
  }
}
