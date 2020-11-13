import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  providers: [AuthService]
})
export class SidenavComponent {
  @Output() logout = new EventEmitter<void>();

  onLogout() {
    this.logout.emit();
  }
}
