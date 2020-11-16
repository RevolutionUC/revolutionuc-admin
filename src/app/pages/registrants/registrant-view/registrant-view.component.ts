import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Registrant, RegistrantLite } from 'src/app/interfaces/registrant';
import { RegistrantsService } from '../registrants.service';

@Component({
  selector: 'registrant-view',
  templateUrl: './registrant-view.component.html',
  styleUrls: ['./registrant-view.component.css'],
})
export class RegistrantViewComponent implements OnInit {
  registrant$: Observable<Registrant>;
  isLoading = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public reg: RegistrantLite,
    public ref: MatDialogRef<RegistrantViewComponent>,
    private service: RegistrantsService
  ) {}

  ngOnInit() {
    this.registrant$ = this.service.getRegistrant(this.reg.id).pipe(
      map(registrant => ({
        ...registrant,
        dateOfBirth: new Date(registrant.dateOfBirth).toLocaleDateString()
      }))
    );
  }

  closeDialog() {
    this.ref.close();
  }
}
