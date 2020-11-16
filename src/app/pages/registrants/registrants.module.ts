import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrantsComponent } from './registrants.component';
import { RegistrantViewComponent } from './registrant-view/registrant-view.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    RegistrantsComponent,
    RegistrantViewComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [
    RegistrantViewComponent
  ],
  providers: []
})
export class RegistrantsModule {}
