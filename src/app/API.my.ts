import {
  OnCreateMessageSubscription,
  OnCreateInvitedRoomSubscription,
  OnCreateRoomUserSubscription,
  GetRoomQuery,
  APIService
} from "./API.service";
import API, {graphqlOperation} from "@aws-amplify/api";
import * as Observable from "zen-observable";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MyAPIService extends APIService {
  constructor() {
    super();
  }

  async MyGetRoom(id: string): Promise<GetRoomQuery> {
    const statement = `query GetRoom($id: ID!) {
        getRoom(id: $id) {
          __typename
          id
          name
          image
          owner
          user {
            __typename
            id
            username
            displayName
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
          inviting {
            __typename
            items {
              __typename
              id
              toUsername
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              username
              user {
                __typename
                id
                username
                displayName
                logo
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          messages {
            __typename
            items {
              __typename
              id
              content
              when
              roomId
              owner
              user {
                __typename
                id
                username
                displayName
                logo
              }
              createdAt
              updatedAt
            }
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
    return <GetRoomQuery>response.data.getRoom;
  }

  MyOnCreateRoomUserListener(
    username: string
  ): Observable<OnCreateRoomUserSubscription> {
    const statement = `subscription OnCreateRoomUser($username: String!) {
        onCreateRoomUser(username: $username) {
          __typename
          id
          username
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
              displayName
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
          user {
            __typename
            id
            username
            displayName
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
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      username
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<OnCreateRoomUserSubscription>;
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
          user {
            __typename
            id
            username
            displayName
            logo
          }
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

  MyOnCreateInvitedRoomListener(
    toUsername: string
  ): Observable<OnCreateInvitedRoomSubscription> {
    const statement = `subscription OnCreateInvitedRoom($toUsername: String!) {
        onCreateInvitedRoom(toUsername: $toUsername) {
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
              displayName
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
            displayName
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
            displayName
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
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<OnCreateInvitedRoomSubscription>;
  }
}
