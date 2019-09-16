import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";

import {AmplifyAngularModule, AmplifyService} from "aws-amplify-angular";

import {AppComponent} from "./app.component";
import {NavComponent} from "./nav/nav.component";
import {RoomListComponent} from "./room-list/room-list.component";
import {RoomDetailComponent} from "./room-detail/room-detail.component";
import {FooterComponent} from "./footer/footer.component";
import {LoginComponent} from "./login/login.component";

import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth.guard";
import {RoomCreateComponent} from "./room-create/room-create.component";
import {RoomInviteComponent} from "./room-invite/room-invite.component";
import {RoomJoinComponent} from "./room-join/room-join.component";
import {RoomHomeComponent} from "./room-home/room-home.component";
import {UsersComponent} from "./room/users/users.component";
import {RoomInviteListComponent} from "./room/invite/list/list.component";

import {StoreModule} from "@ngrx/store";
import {showRoomDetailReducer} from "./store/session/session.reducer";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RoomListComponent,
    RoomDetailComponent,
    FooterComponent,
    LoginComponent,
    RoomCreateComponent,
    RoomInviteComponent,
    RoomJoinComponent,
    RoomHomeComponent,
    UsersComponent,
    RoomInviteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AmplifyAngularModule,
    StoreModule.forRoot({showRoomDetail: showRoomDetailReducer})
  ],
  providers: [AmplifyService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
