import {OnCreateMessageSubscription, APIService} from "./API.service";
import API, {graphqlOperation} from "@aws-amplify/api";
import * as Observable from "zen-observable";
import {Injectable} from "@angular/core";

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
}
