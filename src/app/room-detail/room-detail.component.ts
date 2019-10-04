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
import {ulid} from "ulid";

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

  async ngOnInit() {
    const cognitUser = await Auth.currentAuthenticatedUser();
    const loginedUser = await this.api.GetUser(cognitUser.username);
    this.user = loginedUser;

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
      const room = await this.api.MyGetRoom(this.roomid);
      // conpst messages = await this.api.ListMessages({
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

  async createMessage() {
    const now = Math.floor(new Date().getTime() / 1000);
    const message: CreateMessageInput = {
      id: ulid(),
      content: this.message,
      when: now.toString(),
      owner: this.user.username,
      messageUserId: this.user.id,
      roomId: this.roomid,
      messageRoomId: this.roomid,
      createdAt: now,
      updatedAt: now
    };
    const sent = await this.api.CreateMessage(message);
    console.log("sent:", sent);
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
