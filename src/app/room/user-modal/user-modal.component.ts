import {Component, OnInit, Input} from "@angular/core";
import {MyAPIService} from "../../API.my";
import {Auth, Storage} from "aws-amplify";

@Component({
  selector: "app-user-modal",
  templateUrl: "./user-modal.component.html",
  styleUrls: ["./user-modal.component.css"]
})
export class UserModalComponent implements OnInit {
  @Input() username: string;
  @Input() src: string;
  isOpen: boolean;
  applicantName: string;
  lastName: string;
  firstName: string;
  applicantId: string;
  applicantAbout: string;
  applicantEmail: string;
  filename: string;
  fileNameProfile: string;
  fileNameBackground: string;
  fileUrlProfile: Object | String;
  fileUrlBackground: Object | String;

  constructor(private api: MyAPIService) {
    this.api.GetUser(this.username).then(user => {
      this.filename = user.id + ".png";
    });
  }

  ngOnInit() {}

  toggleModal(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.api.MyGetApplicant(this.username).then(data => {
        // console.log(data);
        this.applicantName = data.lastName + " " + data.firstName;
        this.applicantId = data.id;
        this.applicantAbout = data.about;
        this.applicantEmail = data.email;
        this.lastName = data.lastName;
        this.firstName = data.firstName;

        this.fileNameBackground = "student/background/" + this.filename;
        this.fileNameProfile = "student/profile/" + this.filename;

        Storage.get(this.fileNameBackground)
          .then(result => {
            console.log(result);
            this.fileUrlBackground = result;
          })
          .catch(err => console.log(err));
        Storage.get(this.fileNameProfile)
          .then(result => {
            console.log(result);
            this.fileUrlProfile = result;
          })
          .catch(err => console.log(err));
      });
    }
  }
}
