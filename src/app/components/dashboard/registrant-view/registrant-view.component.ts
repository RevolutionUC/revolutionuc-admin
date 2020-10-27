import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, PageEvent } from '@angular/material';

import { DashboardService } from 'src/app/services/dashboard.service';
import { Registrant, RegistrantLite } from 'src/app/interfaces/registrant';

@Component({
  selector: 'registrant-view',
  templateUrl: './registrant-view.component.html',
  styleUrls: ['./registrant-view.component.css'],
})
export class RegistrantViewComponent implements OnInit {
  registrant: Registrant;
  isLoading = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public reg: RegistrantLite,
    public ref: MatDialogRef<RegistrantViewComponent>,
    private service: DashboardService
  ) {}

  ngOnInit() {
    this.service.getRegistrant(this.reg.id).subscribe(registrant => {
      this.registrant = { ...registrant, dateOfBirth: new Date(registrant.dateOfBirth).toLocaleDateString()};
      this.isLoading = false;
    });
  }

  closeDialog() {
    this.ref.close();
  }
}
