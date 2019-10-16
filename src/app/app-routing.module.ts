import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
// 追加
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth/auth.guard";
import {RoomDetailComponent} from "./room-detail/room-detail.component";
import {RoomInviteListComponent} from "./room/invite/list/list.component";
import {RoomHomeComponent} from "./room-home/room-home.component";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {RoomMainComponent} from "./layouts/room-layout/room-layout.component";
import {DefaultComponent} from "./layouts/default-layout/default-layout.component";

import {UserComponent} from "./applicantAdmin/user/user.component";

import {CompanyComponent} from "./companyAdmin/user/user.component";
import {EditComponent} from "./companyAdmin/edit/edit.component";
import {UserlistComponent} from "./companyAdmin/userlist/userlist.component";
import {IndexComponent} from "./index/index/index.component";
import {DetailComponent} from "./index/detail/detail.component";

const routes: Routes = [
  //  { path: "", redirectTo: "home", pathMatch: "full", canActivate: [AuthGuard] },
  // {path: "home", component: RoomListComponent, canActivate: [AuthGuard]},

  {
    path: "messenger",
    component: RoomMainComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "rooms/:id",
        component: RoomDetailComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "invitedrooms",
        component: RoomInviteListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "home",
        component: RoomHomeComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: "applicantAdmin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "login",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
      },
      {
        path: "profile",
        component: UserComponent
      }
    ]
  },
  {
    path: "companyAdmin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "login",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
      },
      {
        path: "profile",
        component: CompanyComponent
      },
      {
        path: "messenger",
        component: RoomMainComponent
      },
      {
        path: "userlist",
        component: UserlistComponent
      },
      {
        path: "edit",
        component: EditComponent
      }
    ]
  },
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: IndexComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "detail",
        component: DetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
