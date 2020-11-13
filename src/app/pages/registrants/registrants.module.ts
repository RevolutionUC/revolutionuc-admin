import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrantsComponent } from './registrants.component';
import { RegistrantViewComponent } from './registrant-view/registrant-view.component';
import { MatCardModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatTableModule } from '@angular/material';

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
