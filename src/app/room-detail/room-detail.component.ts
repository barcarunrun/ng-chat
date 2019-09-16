import {
  Component,
  OnInit,
  AfterViewInit,
  QueryList,
  ViewChildren
} from "@angular/core";

import {ActivatedRoute} from "@angular/router";
import API, {graphqlOperation} from "@aws-amplify/api";

import {CreateMessageInput, APIService, CreateRoomInput} from "../API.service";
import Amplify, {Auth, Hub} from "aws-amplify";
import {MyAPIService} from "../API.my";

import {Store, select} from "@ngrx/store";
import {Observable} from "rxjs";
import {unShowRoomDetail} from "../store/session/session.action";

@Component({
  selector: "app-room-detail",
  templateUrl: "./room-detail.component.html",
  styleUrls: ["./room-detail.component.sass"]
})
export class RoomDetailComponent implements OnInit, AfterViewInit {
  user: any;
  roomid: string;
  roomname: string;
  messages: Array<object>;
  message: string;
  messageSubscription: any;
  isLoading: boolean;
  showRoomDetail$: Observable<boolean>;

  // ngForでループさせる要素のQueryList取得
  @ViewChildren("chatbox")
  chatColumns: QueryList<any>;

  constructor(
    private route: ActivatedRoute,
    private api: MyAPIService,
    private store: Store<{showRoomDetail: boolean}>
  ) {
    this.showRoomDetail$ = store.pipe(select("showRoomDetail"));
  }

  ngOnInit() {
    Auth.currentAuthenticatedUser().then(user => {
      this.user = user;
    });
    // パスパラメータの変更をサブスクライブする
    this.route.paramMap.subscribe(async paramMap => {
      this.message = "";
      this.isLoading = true;
      this.roomid = paramMap.get("id");
      console.log("room/:", this.roomid);
      // パラメータが変わった後の初期化処理
      // Subscribe to creation of Message
      this.messageSubscription = this.api
        .MyOnCreateMessageListener(this.roomid)
        .subscribe({
          next: newMessage => {
            this.messages.push(newMessage.value.data.onCreateMessage);
            // console.log(this.messages);
          }
        });
      const room = await this.api.GetRoomMessages(this.roomid);
      // const messages = await this.api.ListMessages({
      //   roomId: {contains: room.id}
      // });
      this.roomname = room.name;
      this.messages = room.messages.items.sort((a0, b0) => {
        const a = new Date(Number(b0.when) * 1000);
        const b = new Date(Number(a0.when) * 1000);
        return a > b ? -1 : a < b ? 1 : 0;
      });
      // console.log(this.messages);
      this.isLoading = false;
    });
  }
  ngAfterViewInit() {
    this.chatColumns.changes.subscribe(t => {
      // 最下部にスクロール
      const chatbox = document.getElementById("chatbox");
      chatbox.scrollTop = chatbox.scrollHeight;
    });
  }
  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }

  createMessage() {
    const now = new Date();
    const newMessage: CreateMessageInput = {
      content: this.message,
      when: Math.floor(now.getTime() / 1000).toString(),
      owner: this.user.username,
      roomId: this.roomid,
      createdAt: Math.floor(now.getTime() / 1000),
      updatedAt: Math.floor(now.getTime() / 1000)
    };
    const message = this.api.CreateMessage(newMessage);
    // console.log(message);
    this.message = "";
  }

  isMyMessage(owner: string): boolean {
    return owner === this.user.username ? true : false;
  }

  time2str(time: string): string {
    var c = new Date(Number(time) * 1000);
    return c.toLocaleString();
  }

  unShowRoomDetail(): void {
    this.store.dispatch(unShowRoomDetail());
  }
}
