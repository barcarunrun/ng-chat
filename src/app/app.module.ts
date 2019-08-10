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
import { RoomCreateComponent } from './room-create/room-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RoomListComponent,
    RoomDetailComponent,
    FooterComponent,
    LoginComponent,
    RoomCreateComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, AmplifyAngularModule],
  providers: [AmplifyService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
