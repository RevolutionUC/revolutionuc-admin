import { Component, OnInit, Inject } from "@angular/core";
import {
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
  MatLegacyDialogRef as MatDialogRef,
  MatLegacyDialog as MatDialog,
} from "@angular/material/legacy-dialog";
import { map } from "rxjs/operators";

import { Registrant, RegistrantLite } from "../../../interfaces/registrant";
import { RegistrantsService } from "../registrants.service";
import { SendEmailDialogComponent } from "../send-email-dialog/send-email-dialog.component";

@Component({
  selector: "registrant-view",
  templateUrl: "./registrant-view.component.html",
  styleUrls: ["./registrant-view.component.css"],
})
export class RegistrantViewComponent implements OnInit {
  registrant: Registrant;
  isLoading = true;

  isMinor = false;

  confirmLimitReached = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public reg: RegistrantLite,
    public ref: MatDialogRef<RegistrantViewComponent>,
    private dialog: MatDialog,
    private service: RegistrantsService
  ) {}

  ngOnInit() {
    this.service
      .getRegistrant(this.reg.id)
      .pipe(
        map((registrant) => ({
          ...registrant,
          dob: registrant.dateOfBirth,
          dateOfBirth: new Date(registrant.dateOfBirth).toLocaleDateString(),
        }))
      )
      .subscribe((registrant) => {
        this.registrant = registrant;
        this.isMinor = getAge(registrant.dob) < 18;
        console.log({ registrant });
      });
  }

  verifyEmail() {
    this.service.verifyRegistrant(this.registrant.id).subscribe(() => {
      this.registrant.emailVerfied = true;
    });
  }

  confirmAttendance() {
    this.service.confirmAttendance(this.registrant.id).subscribe({
      next: () => {
        this.registrant.confirmedAttendance = true;
      },
      error: (err) => {
        console.error({ err });
        this.confirmLimitReached = true;
      },
    });
  }

  sendEmail() {
    this.dialog.open(SendEmailDialogComponent, {
      width: `50%`,
      data: this.registrant.email,
    });
  }

  checkin() {
    this.service.checkInUser(this.registrant.id).subscribe(() => {
      this.registrant.checkedIn = true;
    });
  }

  closeDialog() {
    this.ref.close();
  }
}

function getAge(birthDateString: string) {
  var today = new Date();
  var birthDate = new Date(birthDateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
