import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { RegistrantsComponent } from './registrants.component';
import { RegistrantViewComponent } from './registrant-view/registrant-view.component';
import { SendEmailDialogComponent } from './send-email-dialog/send-email-dialog.component';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegistrantsComponent,
    RegistrantViewComponent,
    SendEmailDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [
    RegistrantViewComponent,
    SendEmailDialogComponent
  ],
  providers: []
})
export class RegistrantsModule {}
