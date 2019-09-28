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
  name: string;
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
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
    owner: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      display_name: string;
      logo: string;
    };
    inviting: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
  } | null;
  toUser: {
    __typename: "User";
    id: string;
    username: string;
    display_name: string;
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
  } | null;
  toUsername: string;
  fromUser: {
    __typename: "User";
    id: string;
    username: string;
    display_name: string;
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
  } | null;
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
          name
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
  async GetInvitedRoom(toUsername: string): Promise<GetInvitedRoomQuery> {
    const statement = `query GetInvitedRoom($toUsername: String) {
         getInvitedRoom(toUsername: $toUsername) {
          __typename
          id
          room {
            __typename
            id
            name
            image
            owner
            user {
              __typename
              id
              username
              display_name
              logo
            }
            inviting {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            messages {
              __typename
              nextToken
            }
          }
          toUser {
            __typename
            id
            username
            display_name
            logo
            invitedRooms {
              __typename
              nextToken
            }
            joinedRooms {
              __typename
              nextToken
            }
            ownedRooms {
              __typename
              nextToken
            }
          }
          toUsername
          fromUser {
            __typename
            id
            username
            display_name
            logo
            invitedRooms {
              __typename
              nextToken
            }
            joinedRooms {
              __typename
              nextToken
            }
            ownedRooms {
              __typename
              nextToken
            }
          }
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      toUsername
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetInvitedRoomQuery>response.data.getInvitedRoom;
  }
  MyOnCreateInviteListener(
    toUsername: string
  ): Observable<OnCreateInvitedRoomSubscription> {
    const statement = `subscription OnCreateInvitedRoom($toUsername: String) {
        onCreateInvitedRoom(toUsername: $toUsername) {
          __typename
         id
          room {
            __typename
            id
            name
            image
          }
          toUser {
            __typename
            id
            username
            display_name
            logo
          }
          toUsername
          fromUser {
            __typename
            id
            username
            display_name
            logo
          }
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      toUsername
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<OnCreateInvitedRoomSubscription>;
  }
}
