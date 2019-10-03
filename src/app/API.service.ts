/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateUserInput = {
  id: string;
  username: string;
  displayName: string;
  logo: string;
};

export enum invitedStatus {
  hold = "hold",
  accepted = "accepted",
  canceled = "canceled"
}

export type UpdateUserInput = {
  id: string;
  username?: string | null;
  displayName?: string | null;
  logo?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type CreateInvitedRoomInput = {
  id: string;
  toUsername: string;
  status: invitedStatus;
  createdAt: number;
  updatedAt: number;
  invitedRoomRoomId: string;
  invitedRoomToUserId: string;
  invitedRoomFromUserId: string;
};

export type UpdateInvitedRoomInput = {
  id: string;
  toUsername?: string | null;
  status?: invitedStatus | null;
  createdAt?: number | null;
  updatedAt?: number | null;
  invitedRoomRoomId?: string | null;
  invitedRoomToUserId?: string | null;
  invitedRoomFromUserId?: string | null;
};

export type DeleteInvitedRoomInput = {
  id: string;
};

export type CreateRoomInput = {
  id: string;
  name: string;
  image: string;
  owner: string;
  createdAt: number;
  updatedAt: number;
  roomUserId: string;
};

export type UpdateRoomInput = {
  id: string;
  name?: string | null;
  image?: string | null;
  owner?: string | null;
  createdAt?: number | null;
  updatedAt?: number | null;
  roomUserId?: string | null;
};

export type DeleteRoomInput = {
  id: string;
};

export type CreateMessageInput = {
  id?: string | null;
  content: string;
  when: string;
  roomId: string;
  owner: string;
  createdAt: number;
  updatedAt: number;
  messageUserId: string;
  messageRoomId: string;
};

export type UpdateMessageInput = {
  id: string;
  content?: string | null;
  when?: string | null;
  roomId?: string | null;
  owner?: string | null;
  createdAt?: number | null;
  updatedAt?: number | null;
  messageUserId?: string | null;
  messageRoomId?: string | null;
};

export type DeleteMessageInput = {
  id?: string | null;
};

export type CreateRoomUserInput = {
  id: string;
  username: string;
  createdAt: number;
  updatedAt: number;
  roomUserRoomId: string;
  roomUserUserId: string;
};

export type UpdateRoomUserInput = {
  id: string;
  username?: string | null;
  createdAt?: number | null;
  updatedAt?: number | null;
  roomUserRoomId?: string | null;
  roomUserUserId?: string | null;
};

export type DeleteRoomUserInput = {
  id: string;
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null;
  username?: ModelStringFilterInput | null;
  displayName?: ModelStringFilterInput | null;
  logo?: ModelStringFilterInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
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

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelInvitedRoomFilterInput = {
  id?: ModelIDFilterInput | null;
  toUsername?: ModelStringFilterInput | null;
  status?: ModelinvitedStatusFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelInvitedRoomFilterInput | null> | null;
  or?: Array<ModelInvitedRoomFilterInput | null> | null;
  not?: ModelInvitedRoomFilterInput | null;
};

export type ModelinvitedStatusFilterInput = {
  eq?: invitedStatus | null;
  ne?: invitedStatus | null;
};

export type ModelIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type ModelRoomFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  image?: ModelStringFilterInput | null;
  owner?: ModelStringFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelRoomFilterInput | null> | null;
  or?: Array<ModelRoomFilterInput | null> | null;
  not?: ModelRoomFilterInput | null;
};

export type ModelMessageFilterInput = {
  id?: ModelIDFilterInput | null;
  content?: ModelStringFilterInput | null;
  when?: ModelStringFilterInput | null;
  roomId?: ModelIDFilterInput | null;
  owner?: ModelStringFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelMessageFilterInput | null> | null;
  or?: Array<ModelMessageFilterInput | null> | null;
  not?: ModelMessageFilterInput | null;
};

export type ModelRoomUserFilterInput = {
  id?: ModelIDFilterInput | null;
  username?: ModelStringFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelRoomUserFilterInput | null> | null;
  or?: Array<ModelRoomUserFilterInput | null> | null;
  not?: ModelRoomUserFilterInput | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  displayName: string;
  logo: string;
  invitedRooms: {
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
  joinedRooms: {
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
  ownedRooms: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      name: string;
      image: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  displayName: string;
  logo: string;
  invitedRooms: {
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
  joinedRooms: {
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
  ownedRooms: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      name: string;
      image: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  displayName: string;
  logo: string;
  invitedRooms: {
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
  joinedRooms: {
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
  ownedRooms: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      name: string;
      image: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateInvitedRoomMutation = {
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
      displayName: string;
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
  };
  toUser: {
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
  toUsername: string;
  fromUser: {
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
  status: invitedStatus;
  createdAt: number;
  updatedAt: number;
};

export type UpdateInvitedRoomMutation = {
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
      displayName: string;
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
  };
  toUser: {
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
  toUsername: string;
  fromUser: {
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
  status: invitedStatus;
  createdAt: number;
  updatedAt: number;
};

export type DeleteInvitedRoomMutation = {
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
      displayName: string;
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
  };
  toUser: {
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
  toUsername: string;
  fromUser: {
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
  status: invitedStatus;
  createdAt: number;
  updatedAt: number;
};

export type CreateRoomMutation = {
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

export type UpdateRoomMutation = {
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

export type DeleteRoomMutation = {
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

export type CreateMessageMutation = {
  __typename: "Message";
  id: string;
  content: string;
  when: string;
  roomId: string;
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
  createdAt: number;
  updatedAt: number;
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
      displayName: string;
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
  };
};

export type UpdateMessageMutation = {
  __typename: "Message";
  id: string;
  content: string;
  when: string;
  roomId: string;
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
  createdAt: number;
  updatedAt: number;
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
      displayName: string;
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
  };
};

export type DeleteMessageMutation = {
  __typename: "Message";
  id: string;
  content: string;
  when: string;
  roomId: string;
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
  createdAt: number;
  updatedAt: number;
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
      displayName: string;
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
  };
};

export type CreateRoomUserMutation = {
  __typename: "RoomUser";
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
      displayName: string;
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
  };
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
  username: string;
  createdAt: number;
  updatedAt: number;
};

export type UpdateRoomUserMutation = {
  __typename: "RoomUser";
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
      displayName: string;
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
  };
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
  username: string;
  createdAt: number;
  updatedAt: number;
};

export type DeleteRoomUserMutation = {
  __typename: "RoomUser";
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
      displayName: string;
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
  };
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
  username: string;
  createdAt: number;
  updatedAt: number;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  username: string;
  displayName: string;
  logo: string;
  invitedRooms: {
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
  joinedRooms: {
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
  ownedRooms: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      name: string;
      image: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
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
  } | null> | null;
  nextToken: string | null;
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
      displayName: string;
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
  };
  toUser: {
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
  toUsername: string;
  fromUser: {
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
  status: invitedStatus;
  createdAt: number;
  updatedAt: number;
};

export type ListInvitedRoomsQuery = {
  __typename: "ModelInvitedRoomConnection";
  items: Array<{
    __typename: "InvitedRoom";
    id: string;
    room: {
      __typename: "Room";
      id: string;
      name: string;
      image: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    };
    toUser: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
    };
    toUsername: string;
    fromUser: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
    };
    status: invitedStatus;
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetRoomQuery = {
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

export type ListRoomsQuery = {
  __typename: "ModelRoomConnection";
  items: Array<{
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
  } | null> | null;
  nextToken: string | null;
};

export type GetMessageQuery = {
  __typename: "Message";
  id: string;
  content: string;
  when: string;
  roomId: string;
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
  createdAt: number;
  updatedAt: number;
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
      displayName: string;
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
  };
};

export type ListMessagesQuery = {
  __typename: "ModelMessageConnection";
  items: Array<{
    __typename: "Message";
    id: string;
    content: string;
    when: string;
    roomId: string;
    owner: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
    };
    createdAt: number;
    updatedAt: number;
    room: {
      __typename: "Room";
      id: string;
      name: string;
      image: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    };
  } | null> | null;
  nextToken: string | null;
};

export type GetRoomUserQuery = {
  __typename: "RoomUser";
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
      displayName: string;
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
  };
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
  username: string;
  createdAt: number;
  updatedAt: number;
};

export type ListRoomUsersQuery = {
  __typename: "ModelRoomUserConnection";
  items: Array<{
    __typename: "RoomUser";
    id: string;
    room: {
      __typename: "Room";
      id: string;
      name: string;
      image: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    };
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
    };
    username: string;
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateMessageSubscription = {
  __typename: "Message";
  id: string;
  content: string;
  when: string;
  roomId: string;
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
  createdAt: number;
  updatedAt: number;
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
      displayName: string;
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
  };
};

export type OnCreateInvitedRoomSubscription = {
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
      displayName: string;
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
  };
  toUser: {
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
  toUsername: string;
  fromUser: {
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
  status: invitedStatus;
  createdAt: number;
  updatedAt: number;
};

export type OnCreateRoomUserSubscription = {
  __typename: "RoomUser";
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
      displayName: string;
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
  };
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
  username: string;
  createdAt: number;
  updatedAt: number;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  displayName: string;
  logo: string;
  invitedRooms: {
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
  joinedRooms: {
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
  ownedRooms: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      name: string;
      image: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  displayName: string;
  logo: string;
  invitedRooms: {
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
  joinedRooms: {
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
  ownedRooms: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      name: string;
      image: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  displayName: string;
  logo: string;
  invitedRooms: {
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
  joinedRooms: {
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
  ownedRooms: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      name: string;
      image: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateRoomSubscription = {
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

export type OnUpdateRoomSubscription = {
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

export type OnDeleteRoomSubscription = {
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
export class APIService {
  async CreateUser(input: CreateUserInput): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
          __typename
          id
          username
          displayName
          logo
          invitedRooms {
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
          joinedRooms {
            __typename
            items {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            nextToken
          }
          ownedRooms {
            __typename
            items {
              __typename
              id
              name
              image
              owner
              createdAt
              updatedAt
            }
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
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(input: UpdateUserInput): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
          __typename
          id
          username
          displayName
          logo
          invitedRooms {
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
          joinedRooms {
            __typename
            items {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            nextToken
          }
          ownedRooms {
            __typename
            items {
              __typename
              id
              name
              image
              owner
              createdAt
              updatedAt
            }
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
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(input: DeleteUserInput): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!) {
        deleteUser(input: $input) {
          __typename
          id
          username
          displayName
          logo
          invitedRooms {
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
          joinedRooms {
            __typename
            items {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            nextToken
          }
          ownedRooms {
            __typename
            items {
              __typename
              id
              name
              image
              owner
              createdAt
              updatedAt
            }
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
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateInvitedRoom(
    input: CreateInvitedRoomInput
  ): Promise<CreateInvitedRoomMutation> {
    const statement = `mutation CreateInvitedRoom($input: CreateInvitedRoomInput!) {
        createInvitedRoom(input: $input) {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateInvitedRoomMutation>response.data.createInvitedRoom;
  }
  async UpdateInvitedRoom(
    input: UpdateInvitedRoomInput
  ): Promise<UpdateInvitedRoomMutation> {
    const statement = `mutation UpdateInvitedRoom($input: UpdateInvitedRoomInput!) {
        updateInvitedRoom(input: $input) {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateInvitedRoomMutation>response.data.updateInvitedRoom;
  }
  async DeleteInvitedRoom(
    input: DeleteInvitedRoomInput
  ): Promise<DeleteInvitedRoomMutation> {
    const statement = `mutation DeleteInvitedRoom($input: DeleteInvitedRoomInput!) {
        deleteInvitedRoom(input: $input) {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteInvitedRoomMutation>response.data.deleteInvitedRoom;
  }
  async CreateRoom(input: CreateRoomInput): Promise<CreateRoomMutation> {
    const statement = `mutation CreateRoom($input: CreateRoomInput!) {
        createRoom(input: $input) {
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
              createdAt
              updatedAt
            }
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
              createdAt
              updatedAt
            }
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
              createdAt
              updatedAt
            }
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
  async CreateRoomUser(
    input: CreateRoomUserInput
  ): Promise<CreateRoomUserMutation> {
    const statement = `mutation CreateRoomUser($input: CreateRoomUserInput!) {
        createRoomUser(input: $input) {
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
          username
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRoomUserMutation>response.data.createRoomUser;
  }
  async UpdateRoomUser(
    input: UpdateRoomUserInput
  ): Promise<UpdateRoomUserMutation> {
    const statement = `mutation UpdateRoomUser($input: UpdateRoomUserInput!) {
        updateRoomUser(input: $input) {
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
          username
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRoomUserMutation>response.data.updateRoomUser;
  }
  async DeleteRoomUser(
    input: DeleteRoomUserInput
  ): Promise<DeleteRoomUserMutation> {
    const statement = `mutation DeleteRoomUser($input: DeleteRoomUserInput!) {
        deleteRoomUser(input: $input) {
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
          username
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRoomUserMutation>response.data.deleteRoomUser;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          username
          displayName
          logo
          invitedRooms {
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
          joinedRooms {
            __typename
            items {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            nextToken
          }
          ownedRooms {
            __typename
            items {
              __typename
              id
              name
              image
              owner
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
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    id?: string,
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($id: ID, $filter: ModelUserFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listUsers(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
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
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetInvitedRoom(id: string): Promise<GetInvitedRoomQuery> {
    const statement = `query GetInvitedRoom($id: ID!) {
        getInvitedRoom(id: $id) {
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
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetInvitedRoomQuery>response.data.getInvitedRoom;
  }
  async ListInvitedRooms(
    id?: string,
    filter?: ModelInvitedRoomFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListInvitedRoomsQuery> {
    const statement = `query ListInvitedRooms($id: ID, $filter: ModelInvitedRoomFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listInvitedRooms(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            room {
              __typename
              id
              name
              image
              owner
              createdAt
              updatedAt
            }
            toUser {
              __typename
              id
              username
              displayName
              logo
            }
            toUsername
            fromUser {
              __typename
              id
              username
              displayName
              logo
            }
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListInvitedRoomsQuery>response.data.listInvitedRooms;
  }
  async GetRoom(id: string): Promise<GetRoomQuery> {
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
  async ListRooms(
    id?: string,
    filter?: ModelRoomFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListRoomsQuery> {
    const statement = `query ListRooms($id: ID, $filter: ModelRoomFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listRooms(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
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
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
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
            user {
              __typename
              id
              username
              displayName
              logo
            }
            createdAt
            updatedAt
            room {
              __typename
              id
              name
              image
              owner
              createdAt
              updatedAt
            }
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
  async GetRoomUser(id: string): Promise<GetRoomUserQuery> {
    const statement = `query GetRoomUser($id: ID!) {
        getRoomUser(id: $id) {
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
          username
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
    return <GetRoomUserQuery>response.data.getRoomUser;
  }
  async ListRoomUsers(
    id?: string,
    filter?: ModelRoomUserFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListRoomUsersQuery> {
    const statement = `query ListRoomUsers($id: ID, $filter: ModelRoomUserFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listRoomUsers(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            room {
              __typename
              id
              name
              image
              owner
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              username
              displayName
              logo
            }
            username
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRoomUsersQuery>response.data.listRoomUsers;
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
        }
      }`
    )
  ) as Observable<OnCreateMessageSubscription>;

  OnCreateInvitedRoomListener: Observable<
    OnCreateInvitedRoomSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateInvitedRoom($toUsername: String) {
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
      }`
    )
  ) as Observable<OnCreateInvitedRoomSubscription>;

  OnCreateRoomUserListener: Observable<
    OnCreateRoomUserSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRoomUser($username: String) {
        onCreateRoomUser(username: $username) {
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
          username
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateRoomUserSubscription>;

  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          username
          displayName
          logo
          invitedRooms {
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
          joinedRooms {
            __typename
            items {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            nextToken
          }
          ownedRooms {
            __typename
            items {
              __typename
              id
              name
              image
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          username
          displayName
          logo
          invitedRooms {
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
          joinedRooms {
            __typename
            items {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            nextToken
          }
          ownedRooms {
            __typename
            items {
              __typename
              id
              name
              image
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          username
          displayName
          logo
          invitedRooms {
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
          joinedRooms {
            __typename
            items {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            nextToken
          }
          ownedRooms {
            __typename
            items {
              __typename
              id
              name
              image
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreateRoomListener: Observable<OnCreateRoomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateRoom {
        onCreateRoom {
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
              createdAt
              updatedAt
            }
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
              createdAt
              updatedAt
            }
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
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteRoomSubscription>;
}
