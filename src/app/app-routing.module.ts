import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
// 追加
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth/auth.guard";
import {RoomDetailComponent} from "./room-detail/room-detail.component";
import {RoomInviteListComponent} from "./room/invite/list/list.component";
import {RoomHomeComponent} from "./room-home/room-home.component";

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full", canActivate: [AuthGuard]},
  // {path: "home", component: RoomListComponent, canActivate: [AuthGuard]},
  {path: "home", component: RoomHomeComponent, canActivate: [AuthGuard]},
  {
    path: "invitedrooms",
    component: RoomInviteListComponent,
    canActivate: [AuthGuard]
  },
  {path: "rooms/:id", component: RoomDetailComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
