import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
// 追加
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth/auth.guard";
import {RoomDetailComponent} from "./room-detail/room-detail.component";
import {RoomListComponent} from "./room-list/room-list.component";

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: RoomListComponent, canActivate: [AuthGuard]},
  {path: "rooms/:id", component: RoomDetailComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
