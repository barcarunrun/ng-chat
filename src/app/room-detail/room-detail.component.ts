import {Component, OnInit, AfterViewInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import API, {graphqlOperation} from "@aws-amplify/api";

import {CreateMessageInput, APIService, CreateRoomInput} from "../API.service";
import Amplify, {Auth, Hub} from "aws-amplify";
import {MyAPIService} from "../API.my";

const chat = {
  id: 123,
  content: `We are happy to announce our new service NEORT β was released!!
NOERT is a platform for creator, engineer, artist everyone love digital art.
Everyone can create and browse awesome artwork for free.
(link: https://neort.io/) neort.io Enjoy digital art life!!`,
  user: {
    id: 1,
    name: "NEORT",
    image:
      "https://pbs.twimg.com/profile_images/1095209921816158208/Yznn0ohE_400x400.jpg"
  }
};
const chat2 = {
  id: 123,
  content: `Pickup artwork "Trail #1" by "Kakuya Shiraishi" (link: https://neort.io/art/bl0p5uk3p9fafudeb320) neort.io/art/bl0p5uk3p9…
#NEORT #openframeworks`,
  user: {
    id: 1,
    name: "ANA",
    image:
      "https://pbs.twimg.com/profile_images/1007226589883588608/8JIPe0u1_400x400.jpg"
  }
};
const chat3 = {
  id: 123,
  content: `The ocular engine. Sources:  @archillinks (link: http://archillect.com) archillect.com`,
  user: {
    id: 1,
    name: "ANA",
    image:
      "https://pbs.twimg.com/profile_images/1045579977067024384/S0luKMwQ_400x400.jpg"
  }
};

@Component({
  selector: "app-room-detail",
  templateUrl: "./room-detail.component.html",
  styleUrls: ["./room-detail.component.sass"]
})
export class RoomDetailComponent implements OnInit, AfterViewInit {
  user: any;
  roomid: string;
  talks: Array<object>;
  messages: Array<object>;

  message: string;

  constructor(private route: ActivatedRoute, private api: MyAPIService) {
    this.roomid = this.route.snapshot.paramMap.get("id");
    this.message = "";
    // Subscribe to creation of Message
    const messageSubscription = this.api.MyOnCreateMessageListener(this.roomid);
    messageSubscription.subscribe({
      next: newMessage => {
        this.messages.push(newMessage.value.data.onCreateMessage);
        // console.log(this.messages);
      }
    });
  }

  async ngOnInit() {
    const room = await this.api.GetRoom(this.roomid);
    const messages = await this.api.ListMessages({roomId: {contains: room.id}});
    this.messages = messages.items.sort((a0, b0) => {
      const a = new Date(Number(b0.when) * 1000);
      const b = new Date(Number(a0.when) * 1000);
      return a > b ? -1 : a < b ? 1 : 0;
    });
    // this.messages = messages.items;
    // console.log(this.messages);
    Auth.currentAuthenticatedUser().then(user => {
      this.user = user;
    });

    this.talks = [
      chat,
      chat3,
      chat,
      chat2,
      chat3,
      chat,
      chat2,
      chat,
      chat3,
      chat2,
      chat,
      chat3,
      chat,
      chat3
    ];
  }
  ngAfterViewInit() {
    const elm = document.getElementById("box");
    elm.scrollTop = elm.scrollHeight;
  }

  createMessage() {
    const now = new Date();
    const newMessage: CreateMessageInput = {
      content: this.message,
      when: Math.floor(now.getTime() / 1000).toString(),
      owner: this.user.username,
      roomId: this.roomid
    };
    const message = this.api.CreateMessage(newMessage);
    // console.log(message);
    this.message = "";
  }

  time2str(time: string): string {
    var c = new Date(Number(time) * 1000);
    return c.toLocaleString();
  }
}
