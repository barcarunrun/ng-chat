import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SidebarCompanyComponent } from "./sidebar.component";

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [SidebarCompanyComponent],
  exports: [SidebarCompanyComponent]
})
export class SidebarModule {}
