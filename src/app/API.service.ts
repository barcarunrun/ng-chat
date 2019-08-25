/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateCompanyInput = {
  id?: string | null;
  name: string;
  createdAt: number;
  updatedAt: number;
  companyOwnerId: string;
};

export type UpdateCompanyInput = {
  id: string;
  name?: string | null;
  createdAt?: number | null;
  updatedAt?: number | null;
  companyOwnerId?: string | null;
};

export type DeleteCompanyInput = {
  id?: string | null;
};

export type CreateStoreInput = {
  id?: string | null;
  createdAt: number;
  updatedAt: number;
  companyId: string;
};

export type UpdateStoreInput = {
  id: string;
  createdAt?: number | null;
  updatedAt?: number | null;
  companyId?: string | null;
};

export type DeleteStoreInput = {
  id?: string | null;
};

export type CreateOfferInput = {
  id?: string | null;
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
  storeId: string;
};

export type UpdateOfferInput = {
  id: string;
  title?: string | null;
  content?: string | null;
  createdAt?: number | null;
  updatedAt?: number | null;
  storeId?: string | null;
};

export type DeleteOfferInput = {
  id?: string | null;
};

export type CreateUserInput = {
  id?: string | null;
  username: string;
  logo: string;
};

export type UpdateUserInput = {
  id: string;
  username?: string | null;
  logo?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateInvitedRoomInput = {
  id?: string | null;
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

export type UpdateInvitedRoomInput = {
  id: string;
  roomId?: string | null;
  toUser?: string | null;
  fromUser?: string | null;
  status?: invitedStatus | null;
  createdAt?: number | null;
  updatedAt?: number | null;
};

export type DeleteInvitedRoomInput = {
  id?: string | null;
};

export type CreateRoomInput = {
  id?: string | null;
  name: string;
  image: string;
  createdAt: number;
  updatedAt: number;
};

export type UpdateRoomInput = {
  id: string;
  name?: string | null;
  image?: string | null;
  createdAt?: number | null;
  updatedAt?: number | null;
};

export type DeleteRoomInput = {
  id?: string | null;
};

export type CreateMessageInput = {
  id?: string | null;
  content: string;
  when: string;
  roomId: string;
  owner: string;
  createdAt: number;
  updatedAt: number;
};

export type UpdateMessageInput = {
  id: string;
  content?: string | null;
  when?: string | null;
  roomId?: string | null;
  owner?: string | null;
  createdAt?: number | null;
  updatedAt?: number | null;
};

export type DeleteMessageInput = {
  id?: string | null;
};

export type CreateRoomUserInput = {
  id?: string | null;
  roomUserRoomId: string;
  roomUserUserId: string;
};

export type UpdateRoomUserInput = {
  id: string;
  roomUserRoomId?: string | null;
  roomUserUserId?: string | null;
};

export type DeleteRoomUserInput = {
  id?: string | null;
};

export type ModelCompanyFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelCompanyFilterInput | null> | null;
  or?: Array<ModelCompanyFilterInput | null> | null;
  not?: ModelCompanyFilterInput | null;
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

export type ModelStoreFilterInput = {
  id?: ModelIDFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelStoreFilterInput | null> | null;
  or?: Array<ModelStoreFilterInput | null> | null;
  not?: ModelStoreFilterInput | null;
};

export type ModelOfferFilterInput = {
  id?: ModelIDFilterInput | null;
  title?: ModelStringFilterInput | null;
  content?: ModelStringFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelOfferFilterInput | null> | null;
  or?: Array<ModelOfferFilterInput | null> | null;
  not?: ModelOfferFilterInput | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null;
  username?: ModelStringFilterInput | null;
  logo?: ModelStringFilterInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelInvitedRoomFilterInput = {
  id?: ModelIDFilterInput | null;
  roomId?: ModelStringFilterInput | null;
  toUser?: ModelStringFilterInput | null;
  fromUser?: ModelStringFilterInput | null;
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

export type ModelRoomFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  image?: ModelStringFilterInput | null;
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

export type CreateCompanyMutation = {
  __typename: "Company";
  id: string;
  name: string;
  stores: {
    __typename: "ModelStoreConnection";
    items: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  owner: {
    __typename: "User";
    id: string;
    username: string;
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
  officer: {
    __typename: "User";
    id: string;
    username: string;
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
  createdAt: number;
  updatedAt: number;
};

export type UpdateCompanyMutation = {
  __typename: "Company";
  id: string;
  name: string;
  stores: {
    __typename: "ModelStoreConnection";
    items: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  owner: {
    __typename: "User";
    id: string;
    username: string;
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
  officer: {
    __typename: "User";
    id: string;
    username: string;
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
  createdAt: number;
  updatedAt: number;
};

export type DeleteCompanyMutation = {
  __typename: "Company";
  id: string;
  name: string;
  stores: {
    __typename: "ModelStoreConnection";
    items: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  owner: {
    __typename: "User";
    id: string;
    username: string;
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
  officer: {
    __typename: "User";
    id: string;
    username: string;
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
  createdAt: number;
  updatedAt: number;
};

export type CreateStoreMutation = {
  __typename: "Store";
  id: string;
  admin: {
    __typename: "User";
    id: string;
    username: string;
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
  company: {
    __typename: "Company";
    id: string;
    name: string;
    stores: {
      __typename: "ModelStoreConnection";
      nextToken: string | null;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    officer: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    createdAt: number;
    updatedAt: number;
  };
  offres: {
    __typename: "ModelOfferConnection";
    items: Array<{
      __typename: "Offer";
      id: string;
      title: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type UpdateStoreMutation = {
  __typename: "Store";
  id: string;
  admin: {
    __typename: "User";
    id: string;
    username: string;
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
  company: {
    __typename: "Company";
    id: string;
    name: string;
    stores: {
      __typename: "ModelStoreConnection";
      nextToken: string | null;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    officer: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    createdAt: number;
    updatedAt: number;
  };
  offres: {
    __typename: "ModelOfferConnection";
    items: Array<{
      __typename: "Offer";
      id: string;
      title: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type DeleteStoreMutation = {
  __typename: "Store";
  id: string;
  admin: {
    __typename: "User";
    id: string;
    username: string;
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
  company: {
    __typename: "Company";
    id: string;
    name: string;
    stores: {
      __typename: "ModelStoreConnection";
      nextToken: string | null;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    officer: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    createdAt: number;
    updatedAt: number;
  };
  offres: {
    __typename: "ModelOfferConnection";
    items: Array<{
      __typename: "Offer";
      id: string;
      title: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type CreateOfferMutation = {
  __typename: "Offer";
  id: string;
  store: {
    __typename: "Store";
    id: string;
    admin: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      createdAt: number;
      updatedAt: number;
    };
    offres: {
      __typename: "ModelOfferConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
};

export type UpdateOfferMutation = {
  __typename: "Offer";
  id: string;
  store: {
    __typename: "Store";
    id: string;
    admin: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      createdAt: number;
      updatedAt: number;
    };
    offres: {
      __typename: "ModelOfferConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
};

export type DeleteOfferMutation = {
  __typename: "Offer";
  id: string;
  store: {
    __typename: "Store";
    id: string;
    admin: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      createdAt: number;
      updatedAt: number;
    };
    offres: {
      __typename: "ModelOfferConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  logo: string;
  rooms: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  joined: Array<{
    __typename: "Store";
    id: string;
    admin: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      createdAt: number;
      updatedAt: number;
    };
    offres: {
      __typename: "ModelOfferConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  }>;
  owned: Array<{
    __typename: "Store";
    id: string;
    admin: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      createdAt: number;
      updatedAt: number;
    };
    offres: {
      __typename: "ModelOfferConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  }>;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  logo: string;
  rooms: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  joined: Array<{
    __typename: "Store";
    id: string;
    admin: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      createdAt: number;
      updatedAt: number;
    };
    offres: {
      __typename: "ModelOfferConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  }>;
  owned: Array<{
    __typename: "Store";
    id: string;
    admin: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      createdAt: number;
      updatedAt: number;
    };
    offres: {
      __typename: "ModelOfferConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  }>;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  logo: string;
  rooms: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  joined: Array<{
    __typename: "Store";
    id: string;
    admin: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      createdAt: number;
      updatedAt: number;
    };
    offres: {
      __typename: "ModelOfferConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  }>;
  owned: Array<{
    __typename: "Store";
    id: string;
    admin: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      createdAt: number;
      updatedAt: number;
    };
    offres: {
      __typename: "ModelOfferConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  }>;
};

export type CreateInvitedRoomMutation = {
  __typename: "InvitedRoom";
  id: string;
  roomId: string;
  toUser: string;
  fromUser: string;
  status: invitedStatus;
  createdAt: number;
  updatedAt: number;
};

export type UpdateInvitedRoomMutation = {
  __typename: "InvitedRoom";
  id: string;
  roomId: string;
  toUser: string;
  fromUser: string;
  status: invitedStatus;
  createdAt: number;
  updatedAt: number;
};

export type DeleteInvitedRoomMutation = {
  __typename: "InvitedRoom";
  id: string;
  roomId: string;
  toUser: string;
  fromUser: string;
  status: invitedStatus;
  createdAt: number;
  updatedAt: number;
};

export type CreateRoomMutation = {
  __typename: "Room";
  id: string;
  name: string;
  image: string;
  users: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
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
  users: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
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
  users: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
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
  createdAt: number;
  updatedAt: number;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
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
};

export type UpdateMessageMutation = {
  __typename: "Message";
  id: string;
  content: string;
  when: string;
  roomId: string;
  owner: string;
  createdAt: number;
  updatedAt: number;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
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
};

export type DeleteMessageMutation = {
  __typename: "Message";
  id: string;
  content: string;
  when: string;
  roomId: string;
  owner: string;
  createdAt: number;
  updatedAt: number;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
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
};

export type CreateRoomUserMutation = {
  __typename: "RoomUser";
  id: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
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
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
};

export type UpdateRoomUserMutation = {
  __typename: "RoomUser";
  id: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
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
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
};

export type DeleteRoomUserMutation = {
  __typename: "RoomUser";
  id: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
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
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
};

export type GetCompanyQuery = {
  __typename: "Company";
  id: string;
  name: string;
  stores: {
    __typename: "ModelStoreConnection";
    items: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  owner: {
    __typename: "User";
    id: string;
    username: string;
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
  officer: {
    __typename: "User";
    id: string;
    username: string;
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
  createdAt: number;
  updatedAt: number;
};

export type ListCompanysQuery = {
  __typename: "ModelCompanyConnection";
  items: Array<{
    __typename: "Company";
    id: string;
    name: string;
    stores: {
      __typename: "ModelStoreConnection";
      nextToken: string | null;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    officer: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetStoreQuery = {
  __typename: "Store";
  id: string;
  admin: {
    __typename: "User";
    id: string;
    username: string;
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
  company: {
    __typename: "Company";
    id: string;
    name: string;
    stores: {
      __typename: "ModelStoreConnection";
      nextToken: string | null;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    officer: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    createdAt: number;
    updatedAt: number;
  };
  offres: {
    __typename: "ModelOfferConnection";
    items: Array<{
      __typename: "Offer";
      id: string;
      title: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type ListStoresQuery = {
  __typename: "ModelStoreConnection";
  items: Array<{
    __typename: "Store";
    id: string;
    admin: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      createdAt: number;
      updatedAt: number;
    };
    offres: {
      __typename: "ModelOfferConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetOfferQuery = {
  __typename: "Offer";
  id: string;
  store: {
    __typename: "Store";
    id: string;
    admin: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      createdAt: number;
      updatedAt: number;
    };
    offres: {
      __typename: "ModelOfferConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
};

export type ListOffersQuery = {
  __typename: "ModelOfferConnection";
  items: Array<{
    __typename: "Offer";
    id: string;
    store: {
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    };
    title: string;
    content: string;
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  username: string;
  logo: string;
  rooms: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  joined: Array<{
    __typename: "Store";
    id: string;
    admin: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      createdAt: number;
      updatedAt: number;
    };
    offres: {
      __typename: "ModelOfferConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  }>;
  owned: Array<{
    __typename: "Store";
    id: string;
    admin: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      createdAt: number;
      updatedAt: number;
    };
    offres: {
      __typename: "ModelOfferConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  }>;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    username: string;
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  } | null> | null;
  nextToken: string | null;
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

export type ListInvitedRoomsQuery = {
  __typename: "ModelInvitedRoomConnection";
  items: Array<{
    __typename: "InvitedRoom";
    id: string;
    roomId: string;
    toUser: string;
    fromUser: string;
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
  users: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
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
  createdAt: number;
  updatedAt: number;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
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
    createdAt: number;
    updatedAt: number;
    room: {
      __typename: "Room";
      id: string;
      name: string;
      image: string;
      createdAt: number;
      updatedAt: number;
    } | null;
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
  createdAt: number;
  updatedAt: number;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
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
};

export type OnCreateInvitedRoomSubscription = {
  __typename: "InvitedRoom";
  id: string;
  roomId: string;
  toUser: string;
  fromUser: string;
  status: invitedStatus;
  createdAt: number;
  updatedAt: number;
};

export type OnCreateCompanySubscription = {
  __typename: "Company";
  id: string;
  name: string;
  stores: {
    __typename: "ModelStoreConnection";
    items: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  owner: {
    __typename: "User";
    id: string;
    username: string;
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
  officer: {
    __typename: "User";
    id: string;
    username: string;
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
  createdAt: number;
  updatedAt: number;
};

export type OnUpdateCompanySubscription = {
  __typename: "Company";
  id: string;
  name: string;
  stores: {
    __typename: "ModelStoreConnection";
    items: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  owner: {
    __typename: "User";
    id: string;
    username: string;
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
  officer: {
    __typename: "User";
    id: string;
    username: string;
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
  createdAt: number;
  updatedAt: number;
};

export type OnDeleteCompanySubscription = {
  __typename: "Company";
  id: string;
  name: string;
  stores: {
    __typename: "ModelStoreConnection";
    items: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  owner: {
    __typename: "User";
    id: string;
    username: string;
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
  officer: {
    __typename: "User";
    id: string;
    username: string;
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
  createdAt: number;
  updatedAt: number;
};

export type OnCreateStoreSubscription = {
  __typename: "Store";
  id: string;
  admin: {
    __typename: "User";
    id: string;
    username: string;
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
  company: {
    __typename: "Company";
    id: string;
    name: string;
    stores: {
      __typename: "ModelStoreConnection";
      nextToken: string | null;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    officer: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    createdAt: number;
    updatedAt: number;
  };
  offres: {
    __typename: "ModelOfferConnection";
    items: Array<{
      __typename: "Offer";
      id: string;
      title: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnUpdateStoreSubscription = {
  __typename: "Store";
  id: string;
  admin: {
    __typename: "User";
    id: string;
    username: string;
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
  company: {
    __typename: "Company";
    id: string;
    name: string;
    stores: {
      __typename: "ModelStoreConnection";
      nextToken: string | null;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    officer: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    createdAt: number;
    updatedAt: number;
  };
  offres: {
    __typename: "ModelOfferConnection";
    items: Array<{
      __typename: "Offer";
      id: string;
      title: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnDeleteStoreSubscription = {
  __typename: "Store";
  id: string;
  admin: {
    __typename: "User";
    id: string;
    username: string;
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
  company: {
    __typename: "Company";
    id: string;
    name: string;
    stores: {
      __typename: "ModelStoreConnection";
      nextToken: string | null;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    officer: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    createdAt: number;
    updatedAt: number;
  };
  offres: {
    __typename: "ModelOfferConnection";
    items: Array<{
      __typename: "Offer";
      id: string;
      title: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnCreateOfferSubscription = {
  __typename: "Offer";
  id: string;
  store: {
    __typename: "Store";
    id: string;
    admin: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      createdAt: number;
      updatedAt: number;
    };
    offres: {
      __typename: "ModelOfferConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
};

export type OnUpdateOfferSubscription = {
  __typename: "Offer";
  id: string;
  store: {
    __typename: "Store";
    id: string;
    admin: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      createdAt: number;
      updatedAt: number;
    };
    offres: {
      __typename: "ModelOfferConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
};

export type OnDeleteOfferSubscription = {
  __typename: "Offer";
  id: string;
  store: {
    __typename: "Store";
    id: string;
    admin: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      createdAt: number;
      updatedAt: number;
    };
    offres: {
      __typename: "ModelOfferConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  logo: string;
  rooms: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  joined: Array<{
    __typename: "Store";
    id: string;
    admin: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      createdAt: number;
      updatedAt: number;
    };
    offres: {
      __typename: "ModelOfferConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  }>;
  owned: Array<{
    __typename: "Store";
    id: string;
    admin: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      createdAt: number;
      updatedAt: number;
    };
    offres: {
      __typename: "ModelOfferConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  }>;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  logo: string;
  rooms: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  joined: Array<{
    __typename: "Store";
    id: string;
    admin: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      createdAt: number;
      updatedAt: number;
    };
    offres: {
      __typename: "ModelOfferConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  }>;
  owned: Array<{
    __typename: "Store";
    id: string;
    admin: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      createdAt: number;
      updatedAt: number;
    };
    offres: {
      __typename: "ModelOfferConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  }>;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  logo: string;
  rooms: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  joined: Array<{
    __typename: "Store";
    id: string;
    admin: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      createdAt: number;
      updatedAt: number;
    };
    offres: {
      __typename: "ModelOfferConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  }>;
  owned: Array<{
    __typename: "Store";
    id: string;
    admin: {
      __typename: "User";
      id: string;
      username: string;
      logo: string;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      createdAt: number;
      updatedAt: number;
    };
    offres: {
      __typename: "ModelOfferConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  }>;
};

export type OnCreateRoomSubscription = {
  __typename: "Room";
  id: string;
  name: string;
  image: string;
  users: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
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
  users: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
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
  users: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
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

export type OnCreateRoomUserSubscription = {
  __typename: "RoomUser";
  id: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
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
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
};

export type OnUpdateRoomUserSubscription = {
  __typename: "RoomUser";
  id: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
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
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
};

export type OnDeleteRoomUserSubscription = {
  __typename: "RoomUser";
  id: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
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
    logo: string;
    rooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    joined: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
    owned: Array<{
      __typename: "Store";
      id: string;
      createdAt: number;
      updatedAt: number;
    }>;
  };
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCompany(
    input: CreateCompanyInput
  ): Promise<CreateCompanyMutation> {
    const statement = `mutation CreateCompany($input: CreateCompanyInput!) {
        createCompany(input: $input) {
          __typename
          id
          name
          stores {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          owner {
            __typename
            id
            username
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
          officer {
            __typename
            id
            username
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
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
    return <CreateCompanyMutation>response.data.createCompany;
  }
  async UpdateCompany(
    input: UpdateCompanyInput
  ): Promise<UpdateCompanyMutation> {
    const statement = `mutation UpdateCompany($input: UpdateCompanyInput!) {
        updateCompany(input: $input) {
          __typename
          id
          name
          stores {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          owner {
            __typename
            id
            username
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
          officer {
            __typename
            id
            username
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
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
    return <UpdateCompanyMutation>response.data.updateCompany;
  }
  async DeleteCompany(
    input: DeleteCompanyInput
  ): Promise<DeleteCompanyMutation> {
    const statement = `mutation DeleteCompany($input: DeleteCompanyInput!) {
        deleteCompany(input: $input) {
          __typename
          id
          name
          stores {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          owner {
            __typename
            id
            username
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
          officer {
            __typename
            id
            username
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
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
    return <DeleteCompanyMutation>response.data.deleteCompany;
  }
  async CreateStore(input: CreateStoreInput): Promise<CreateStoreMutation> {
    const statement = `mutation CreateStore($input: CreateStoreInput!) {
        createStore(input: $input) {
          __typename
          id
          admin {
            __typename
            id
            username
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
          company {
            __typename
            id
            name
            stores {
              __typename
              nextToken
            }
            owner {
              __typename
              id
              username
              logo
            }
            officer {
              __typename
              id
              username
              logo
            }
            createdAt
            updatedAt
          }
          offres {
            __typename
            items {
              __typename
              id
              title
              content
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <CreateStoreMutation>response.data.createStore;
  }
  async UpdateStore(input: UpdateStoreInput): Promise<UpdateStoreMutation> {
    const statement = `mutation UpdateStore($input: UpdateStoreInput!) {
        updateStore(input: $input) {
          __typename
          id
          admin {
            __typename
            id
            username
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
          company {
            __typename
            id
            name
            stores {
              __typename
              nextToken
            }
            owner {
              __typename
              id
              username
              logo
            }
            officer {
              __typename
              id
              username
              logo
            }
            createdAt
            updatedAt
          }
          offres {
            __typename
            items {
              __typename
              id
              title
              content
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <UpdateStoreMutation>response.data.updateStore;
  }
  async DeleteStore(input: DeleteStoreInput): Promise<DeleteStoreMutation> {
    const statement = `mutation DeleteStore($input: DeleteStoreInput!) {
        deleteStore(input: $input) {
          __typename
          id
          admin {
            __typename
            id
            username
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
          company {
            __typename
            id
            name
            stores {
              __typename
              nextToken
            }
            owner {
              __typename
              id
              username
              logo
            }
            officer {
              __typename
              id
              username
              logo
            }
            createdAt
            updatedAt
          }
          offres {
            __typename
            items {
              __typename
              id
              title
              content
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <DeleteStoreMutation>response.data.deleteStore;
  }
  async CreateOffer(input: CreateOfferInput): Promise<CreateOfferMutation> {
    const statement = `mutation CreateOffer($input: CreateOfferInput!) {
        createOffer(input: $input) {
          __typename
          id
          store {
            __typename
            id
            admin {
              __typename
              id
              username
              logo
            }
            company {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            offres {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          title
          content
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
    return <CreateOfferMutation>response.data.createOffer;
  }
  async UpdateOffer(input: UpdateOfferInput): Promise<UpdateOfferMutation> {
    const statement = `mutation UpdateOffer($input: UpdateOfferInput!) {
        updateOffer(input: $input) {
          __typename
          id
          store {
            __typename
            id
            admin {
              __typename
              id
              username
              logo
            }
            company {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            offres {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          title
          content
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
    return <UpdateOfferMutation>response.data.updateOffer;
  }
  async DeleteOffer(input: DeleteOfferInput): Promise<DeleteOfferMutation> {
    const statement = `mutation DeleteOffer($input: DeleteOfferInput!) {
        deleteOffer(input: $input) {
          __typename
          id
          store {
            __typename
            id
            admin {
              __typename
              id
              username
              logo
            }
            company {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            offres {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          title
          content
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
    return <DeleteOfferMutation>response.data.deleteOffer;
  }
  async CreateUser(input: CreateUserInput): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
          __typename
          id
          username
          logo
          rooms {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          joined {
            __typename
            id
            admin {
              __typename
              id
              username
              logo
            }
            company {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            offres {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          owned {
            __typename
            id
            admin {
              __typename
              id
              username
              logo
            }
            company {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            offres {
              __typename
              nextToken
            }
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
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(input: UpdateUserInput): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
          __typename
          id
          username
          logo
          rooms {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          joined {
            __typename
            id
            admin {
              __typename
              id
              username
              logo
            }
            company {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            offres {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          owned {
            __typename
            id
            admin {
              __typename
              id
              username
              logo
            }
            company {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            offres {
              __typename
              nextToken
            }
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
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(input: DeleteUserInput): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!) {
        deleteUser(input: $input) {
          __typename
          id
          username
          logo
          rooms {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          joined {
            __typename
            id
            admin {
              __typename
              id
              username
              logo
            }
            company {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            offres {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          owned {
            __typename
            id
            admin {
              __typename
              id
              username
              logo
            }
            company {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            offres {
              __typename
              nextToken
            }
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
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateInvitedRoom(
    input: CreateInvitedRoomInput
  ): Promise<CreateInvitedRoomMutation> {
    const statement = `mutation CreateInvitedRoom($input: CreateInvitedRoomInput!) {
        createInvitedRoom(input: $input) {
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
          roomId
          toUser
          fromUser
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
          roomId
          toUser
          fromUser
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
          users {
            __typename
            items {
              __typename
              id
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
          users {
            __typename
            items {
              __typename
              id
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
          users {
            __typename
            items {
              __typename
              id
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
          createdAt
          updatedAt
          room {
            __typename
            id
            name
            image
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
          createdAt
          updatedAt
          room {
            __typename
            id
            name
            image
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
          createdAt
          updatedAt
          room {
            __typename
            id
            name
            image
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
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
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
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
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
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
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
    return <DeleteRoomUserMutation>response.data.deleteRoomUser;
  }
  async GetCompany(id: string): Promise<GetCompanyQuery> {
    const statement = `query GetCompany($id: ID!) {
        getCompany(id: $id) {
          __typename
          id
          name
          stores {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          owner {
            __typename
            id
            username
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
          officer {
            __typename
            id
            username
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
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
    return <GetCompanyQuery>response.data.getCompany;
  }
  async ListCompanys(
    filter?: ModelCompanyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCompanysQuery> {
    const statement = `query ListCompanys($filter: ModelCompanyFilterInput, $limit: Int, $nextToken: String) {
        listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            stores {
              __typename
              nextToken
            }
            owner {
              __typename
              id
              username
              logo
            }
            officer {
              __typename
              id
              username
              logo
            }
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
    return <ListCompanysQuery>response.data.listCompanys;
  }
  async GetStore(id: string): Promise<GetStoreQuery> {
    const statement = `query GetStore($id: ID!) {
        getStore(id: $id) {
          __typename
          id
          admin {
            __typename
            id
            username
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
          company {
            __typename
            id
            name
            stores {
              __typename
              nextToken
            }
            owner {
              __typename
              id
              username
              logo
            }
            officer {
              __typename
              id
              username
              logo
            }
            createdAt
            updatedAt
          }
          offres {
            __typename
            items {
              __typename
              id
              title
              content
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <GetStoreQuery>response.data.getStore;
  }
  async ListStores(
    filter?: ModelStoreFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStoresQuery> {
    const statement = `query ListStores($filter: ModelStoreFilterInput, $limit: Int, $nextToken: String) {
        listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            admin {
              __typename
              id
              username
              logo
            }
            company {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            offres {
              __typename
              nextToken
            }
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
    return <ListStoresQuery>response.data.listStores;
  }
  async GetOffer(id: string): Promise<GetOfferQuery> {
    const statement = `query GetOffer($id: ID!) {
        getOffer(id: $id) {
          __typename
          id
          store {
            __typename
            id
            admin {
              __typename
              id
              username
              logo
            }
            company {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            offres {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          title
          content
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
    return <GetOfferQuery>response.data.getOffer;
  }
  async ListOffers(
    filter?: ModelOfferFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOffersQuery> {
    const statement = `query ListOffers($filter: ModelOfferFilterInput, $limit: Int, $nextToken: String) {
        listOffers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            store {
              __typename
              id
              createdAt
              updatedAt
            }
            title
            content
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
    return <ListOffersQuery>response.data.listOffers;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          username
          logo
          rooms {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          joined {
            __typename
            id
            admin {
              __typename
              id
              username
              logo
            }
            company {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            offres {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          owned {
            __typename
            id
            admin {
              __typename
              id
              username
              logo
            }
            company {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            offres {
              __typename
              nextToken
            }
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
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
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
    return <ListUsersQuery>response.data.listUsers;
  }
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
  async ListInvitedRooms(
    filter?: ModelInvitedRoomFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListInvitedRoomsQuery> {
    const statement = `query ListInvitedRooms($filter: ModelInvitedRoomFilterInput, $limit: Int, $nextToken: String) {
        listInvitedRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            roomId
            toUser
            fromUser
            status
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
    return <ListInvitedRoomsQuery>response.data.listInvitedRooms;
  }
  async GetRoom(id: string): Promise<GetRoomQuery> {
    const statement = `query GetRoom($id: ID!) {
        getRoom(id: $id) {
          __typename
          id
          name
          image
          users {
            __typename
            items {
              __typename
              id
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
            name
            image
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
          createdAt
          updatedAt
          room {
            __typename
            id
            name
            image
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
            createdAt
            updatedAt
            room {
              __typename
              id
              name
              image
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
          createdAt
          updatedAt
          room {
            __typename
            id
            name
            image
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
      `subscription OnCreateInvitedRoom($toUser: String!) {
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
      }`
    )
  ) as Observable<OnCreateInvitedRoomSubscription>;

  OnCreateCompanyListener: Observable<
    OnCreateCompanySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCompany {
        onCreateCompany {
          __typename
          id
          name
          stores {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          owner {
            __typename
            id
            username
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
          officer {
            __typename
            id
            username
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateCompanySubscription>;

  OnUpdateCompanyListener: Observable<
    OnUpdateCompanySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCompany {
        onUpdateCompany {
          __typename
          id
          name
          stores {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          owner {
            __typename
            id
            username
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
          officer {
            __typename
            id
            username
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateCompanySubscription>;

  OnDeleteCompanyListener: Observable<
    OnDeleteCompanySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCompany {
        onDeleteCompany {
          __typename
          id
          name
          stores {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          owner {
            __typename
            id
            username
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
          officer {
            __typename
            id
            username
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteCompanySubscription>;

  OnCreateStoreListener: Observable<OnCreateStoreSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateStore {
        onCreateStore {
          __typename
          id
          admin {
            __typename
            id
            username
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
          company {
            __typename
            id
            name
            stores {
              __typename
              nextToken
            }
            owner {
              __typename
              id
              username
              logo
            }
            officer {
              __typename
              id
              username
              logo
            }
            createdAt
            updatedAt
          }
          offres {
            __typename
            items {
              __typename
              id
              title
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateStoreSubscription>;

  OnUpdateStoreListener: Observable<OnUpdateStoreSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateStore {
        onUpdateStore {
          __typename
          id
          admin {
            __typename
            id
            username
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
          company {
            __typename
            id
            name
            stores {
              __typename
              nextToken
            }
            owner {
              __typename
              id
              username
              logo
            }
            officer {
              __typename
              id
              username
              logo
            }
            createdAt
            updatedAt
          }
          offres {
            __typename
            items {
              __typename
              id
              title
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateStoreSubscription>;

  OnDeleteStoreListener: Observable<OnDeleteStoreSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteStore {
        onDeleteStore {
          __typename
          id
          admin {
            __typename
            id
            username
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
          company {
            __typename
            id
            name
            stores {
              __typename
              nextToken
            }
            owner {
              __typename
              id
              username
              logo
            }
            officer {
              __typename
              id
              username
              logo
            }
            createdAt
            updatedAt
          }
          offres {
            __typename
            items {
              __typename
              id
              title
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteStoreSubscription>;

  OnCreateOfferListener: Observable<OnCreateOfferSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateOffer {
        onCreateOffer {
          __typename
          id
          store {
            __typename
            id
            admin {
              __typename
              id
              username
              logo
            }
            company {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            offres {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          title
          content
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateOfferSubscription>;

  OnUpdateOfferListener: Observable<OnUpdateOfferSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOffer {
        onUpdateOffer {
          __typename
          id
          store {
            __typename
            id
            admin {
              __typename
              id
              username
              logo
            }
            company {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            offres {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          title
          content
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateOfferSubscription>;

  OnDeleteOfferListener: Observable<OnDeleteOfferSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOffer {
        onDeleteOffer {
          __typename
          id
          store {
            __typename
            id
            admin {
              __typename
              id
              username
              logo
            }
            company {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            offres {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          title
          content
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteOfferSubscription>;

  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          username
          logo
          rooms {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          joined {
            __typename
            id
            admin {
              __typename
              id
              username
              logo
            }
            company {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            offres {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          owned {
            __typename
            id
            admin {
              __typename
              id
              username
              logo
            }
            company {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            offres {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
          logo
          rooms {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          joined {
            __typename
            id
            admin {
              __typename
              id
              username
              logo
            }
            company {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            offres {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          owned {
            __typename
            id
            admin {
              __typename
              id
              username
              logo
            }
            company {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            offres {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
          logo
          rooms {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          joined {
            __typename
            id
            admin {
              __typename
              id
              username
              logo
            }
            company {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            offres {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          owned {
            __typename
            id
            admin {
              __typename
              id
              username
              logo
            }
            company {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            offres {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
          users {
            __typename
            items {
              __typename
              id
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
          users {
            __typename
            items {
              __typename
              id
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
          users {
            __typename
            items {
              __typename
              id
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

  OnCreateRoomUserListener: Observable<
    OnCreateRoomUserSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRoomUser {
        onCreateRoomUser {
          __typename
          id
          room {
            __typename
            id
            name
            image
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
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateRoomUserSubscription>;

  OnUpdateRoomUserListener: Observable<
    OnUpdateRoomUserSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRoomUser {
        onUpdateRoomUser {
          __typename
          id
          room {
            __typename
            id
            name
            image
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
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateRoomUserSubscription>;

  OnDeleteRoomUserListener: Observable<
    OnDeleteRoomUserSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRoomUser {
        onDeleteRoomUser {
          __typename
          id
          room {
            __typename
            id
            name
            image
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
            logo
            rooms {
              __typename
              nextToken
            }
            joined {
              __typename
              id
              createdAt
              updatedAt
            }
            owned {
              __typename
              id
              createdAt
              updatedAt
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteRoomUserSubscription>;
}
