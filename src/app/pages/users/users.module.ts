import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { NewUserComponent } from './new-user/new-user.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatProgressSpinnerModule, MatSelectModule, MatTableModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent,
    NewUserComponent,
    DeleteConfirmationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTableModule,
  ],
  entryComponents: [
    NewUserComponent,
    DeleteConfirmationComponent,
  ],
  providers: []
})
export class UsersModule {}
