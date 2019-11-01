import {Component, OnInit, Input} from "@angular/core";
import {MyAPIService} from "../../API.my";

@Component({
  selector: "app-user-modal",
  templateUrl: "./user-modal.component.html",
  styleUrls: ["./user-modal.component.css"]
})
export class UserModalComponent implements OnInit {
  @Input() username: string;
  @Input() src: string;
  isOpen: boolean;
  user: any;

  constructor(private api: MyAPIService) {}

  ngOnInit() {}

  toggleModal(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.user = this.api.GetUser(this.username);
      console.log("user modal:", this.user);
    }
  }
}
