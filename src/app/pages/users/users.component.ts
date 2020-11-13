import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BehaviorSubject } from 'rxjs';

import { SudoService } from 'src/app/services/sudo.service';
import { User } from 'src/app/interfaces/User';
import { NewUserComponent } from './new-user/new-user.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  isLoading = true;

  users$: BehaviorSubject<User[]>

  columns = [
    `username`,
    `role`,
    `actions`
  ];

  constructor(
    private service: SudoService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users$ = this.service.users$;
    this.service.getUsers();
  }

  createUser() {
    this.dialog.open(NewUserComponent, { width: `50%` });
  }

  deleteUser(user: User) {
    this.dialog.open(DeleteConfirmationComponent, { width: `50%`, data: user });
  }
}
