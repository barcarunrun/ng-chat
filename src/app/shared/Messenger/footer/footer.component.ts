import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.sass"]
})
export class FooterComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}
  goBack(): void {
    this.location.back();
  }
}
