/* tslint:disable */
//  This file was automatically generated and should not be edited.
import {Injectable} from "@angular/core";
import API, {graphqlOperation} from "@aws-amplify/api";
import {GraphQLResult} from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateRoomInput = {
  id?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateRoomInput = {
  id: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteRoomInput = {
  id?: string | null;
};

export type CreateMessageInput = {
  id?: string | null;
  content: string;
  when: string;
  roomId?: string | null;
  owner?: string | null;
};

export type UpdateMessageInput = {
  id: string;
  content?: string | null;
  when?: string | null;
  roomId?: string | null;
  owner?: string | null;
};

export type DeleteMessageInput = {
  id?: string | null;
};

export type ModelRoomFilterInput = {
  id?: ModelIDFilterInput | null;
  createdAt?: ModelStringFilterInput | null;
  updatedAt?: ModelStringFilterInput | null;
  and?: Array<ModelRoomFilterInput | null> | null;
  or?: Array<ModelRoomFilterInput | null> | null;
  not?: ModelRoomFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelMessageFilterInput = {
  id?: ModelIDFilterInput | null;
  content?: ModelStringFilterInput | null;
  when?: ModelStringFilterInput | null;
  roomId?: ModelIDFilterInput | null;
  owner?: ModelStringFilterInput | null;
  and?: Array<ModelMessageFilterInput | null> | null;
  or?: Array<ModelMessageFilterInput | null> | null;
  not?: ModelMessageFilterInput | null;
};

export type CreateRoomMutation = {
  __typename: "Room";
  id: string;
  createdAt: string | null;
  updatedAt: string | null;
  messages: {
    __typename: "ModelMessageConnection";
    nextToken: string | null;
  } | null;
};

export type UpdateRoomMutation = {
  __typename: "Room";
  id: string;
  createdAt: string | null;
  updatedAt: string | null;
  messages: {
    __typename: "ModelMessageConnection";
    nextToken: string | null;
  } | null;
};

export type DeleteRoomMutation = {
  __typename: "Room";
  id: string;
  createdAt: string | null;
  updatedAt: string | null;
  messages: {
    __typename: "ModelMessageConnection";
    nextToken: string | null;
  } | null;
};

export type CreateMessageMutation = {
  __typename: "Message";
  id: string;
  content: string;
  when: string;
  roomId: string | null;
  owner: string | null;
  room: {
    __typename: "Room";
    id: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
};

export type UpdateMessageMutation = {
  __typename: "Message";
  id: string;
  content: string;
  when: string;
  roomId: string | null;
  owner: string | null;
  room: {
    __typename: "Room";
    id: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
};

export type DeleteMessageMutation = {
  __typename: "Message";
  id: string;
  content: string;
  when: string;
  roomId: string | null;
  owner: string | null;
  room: {
    __typename: "Room";
    id: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
};

export type GetRoomQuery = {
  __typename: "Room";
  id: string;
  createdAt: string | null;
  updatedAt: string | null;
  messages: {
    __typename: "ModelMessageConnection";
    nextToken: string | null;
  } | null;
};

export type ListRoomsQuery = {
  __typename: "ModelRoomConnection";
  items: Array<{
    __typename: "Room";
    id: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetMessageQuery = {
  __typename: "Message";
  id: string;
  content: string;
  when: string;
  roomId: string | null;
  owner: string | null;
  room: {
    __typename: "Room";
    id: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
};

export type ListMessagesQuery = {
  __typename: "ModelMessageConnection";
  items: Array<{
    __typename: "Message";
    id: string;
    content: string;
    when: string;
    roomId: string | null;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateMessageSubscription = {
  __typename: "Message";
  id: string;
  content: string;
  when: string;
  roomId: string | null;
  owner: string | null;
  room: {
    __typename: "Room";
    id: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
};

export type OnCreateRoomSubscription = {
  __typename: "Room";
  id: string;
  createdAt: string | null;
  updatedAt: string | null;
  messages: {
    __typename: "ModelMessageConnection";
    nextToken: string | null;
  } | null;
};

export type OnUpdateRoomSubscription = {
  __typename: "Room";
  id: string;
  createdAt: string | null;
  updatedAt: string | null;
  messages: {
    __typename: "ModelMessageConnection";
    nextToken: string | null;
  } | null;
};

export type OnDeleteRoomSubscription = {
  __typename: "Room";
  id: string;
  createdAt: string | null;
  updatedAt: string | null;
  messages: {
    __typename: "ModelMessageConnection";
    nextToken: string | null;
  } | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateRoom(input: CreateRoomInput): Promise<CreateRoomMutation> {
    const statement = `mutation CreateRoom($input: CreateRoomInput!) {
        createRoom(input: $input) {
          __typename
          id
          createdAt
          updatedAt
          messages {
            __typename
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRoomMutation>response.data.createRoom;
  }
  async UpdateRoom(input: UpdateRoomInput): Promise<UpdateRoomMutation> {
    const statement = `mutation UpdateRoom($input: UpdateRoomInput!) {
        updateRoom(input: $input) {
          __typename
          id
          createdAt
          updatedAt
          messages {
            __typename
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRoomMutation>response.data.updateRoom;
  }
  async DeleteRoom(input: DeleteRoomInput): Promise<DeleteRoomMutation> {
    const statement = `mutation DeleteRoom($input: DeleteRoomInput!) {
        deleteRoom(input: $input) {
          __typename
          id
          createdAt
          updatedAt
          messages {
            __typename
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRoomMutation>response.data.deleteRoom;
  }
  async CreateMessage(
    input: CreateMessageInput
  ): Promise<CreateMessageMutation> {
    const statement = `mutation CreateMessage($input: CreateMessageInput!) {
        createMessage(input: $input) {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMessageMutation>response.data.createMessage;
  }
  async UpdateMessage(
    input: UpdateMessageInput
  ): Promise<UpdateMessageMutation> {
    const statement = `mutation UpdateMessage($input: UpdateMessageInput!) {
        updateMessage(input: $input) {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMessageMutation>response.data.updateMessage;
  }
  async DeleteMessage(
    input: DeleteMessageInput
  ): Promise<DeleteMessageMutation> {
    const statement = `mutation DeleteMessage($input: DeleteMessageInput!) {
        deleteMessage(input: $input) {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMessageMutation>response.data.deleteMessage;
  }
  async GetRoom(id: string): Promise<GetRoomQuery> {
    const statement = `query GetRoom($id: ID!) {
        getRoom(id: $id) {
          __typename
          id
          createdAt
          updatedAt
          messages {
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
    return <GetRoomQuery>response.data.getRoom;
  }
  async ListRooms(
    filter?: ModelRoomFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRoomsQuery> {
    const statement = `query ListRooms($filter: ModelRoomFilterInput, $limit: Int, $nextToken: String) {
        listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRoomsQuery>response.data.listRooms;
  }
  async GetMessage(id: string): Promise<GetMessageQuery> {
    const statement = `query GetMessage($id: ID!) {
        getMessage(id: $id) {
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
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMessageQuery>response.data.getMessage;
  }
  async ListMessages(
    filter?: ModelMessageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMessagesQuery> {
    const statement = `query ListMessages($filter: ModelMessageFilterInput, $limit: Int, $nextToken: String) {
        listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            content
            when
            roomId
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMessagesQuery>response.data.listMessages;
  }
  OnCreateMessageListener: Observable<
    OnCreateMessageSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMessage($roomId: ID!) {
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
      }`
    )
  ) as Observable<OnCreateMessageSubscription>;

  OnCreateRoomListener: Observable<OnCreateRoomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateRoom {
        onCreateRoom {
          __typename
          id
          createdAt
          updatedAt
          messages {
            __typename
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateRoomSubscription>;

  OnUpdateRoomListener: Observable<OnUpdateRoomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRoom {
        onUpdateRoom {
          __typename
          id
          createdAt
          updatedAt
          messages {
            __typename
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateRoomSubscription>;

  OnDeleteRoomListener: Observable<OnDeleteRoomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRoom {
        onDeleteRoom {
          __typename
          id
          createdAt
          updatedAt
          messages {
            __typename
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteRoomSubscription>;
}
