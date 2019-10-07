import { Component, HostBinding } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "footer-default-cmp",
  templateUrl: "footer.component.html"
})
export class FooterComponent {
  test: Date = new Date();
}
