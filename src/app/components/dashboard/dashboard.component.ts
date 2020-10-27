import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';
import { BehaviorSubject, combineLatest, Observable, timer } from 'rxjs';
import { debounce, flatMap, tap } from 'rxjs/operators';

import { DashboardService } from 'src/app/services/dashboard.service';
import { RegistrantLite } from 'src/app/interfaces/registrant';
import { Pagination, PaginationMeta } from 'src/app/interfaces/pagination';
import { RegistrantViewComponent } from './registrant-view/registrant-view.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  registrants: RegistrantLite[];

  pagination: PaginationMeta

  registrantSearch$: Observable<Pagination<RegistrantLite>>

  searchQuery$ = new BehaviorSubject<string>(``);
  searchPage$ = new BehaviorSubject<{ page: number, limit: number }>({ page: 1, limit: 10 });

  isLoading = false;

  columns = [
    `name`,
    `email`,
    `createdAt`,
    `actions`
  ];

  numCheckedIn: number;

  constructor(
    private service: DashboardService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.searchRegistrants();
  }

  searchRegistrants() {
    combineLatest(
      this.searchPage$,
      this.searchQuery$.pipe(debounce(() => timer(500)))
    ).pipe(
      tap(() => this.isLoading = true),
      flatMap(
        ([{ page, limit }, q]) => this.service.searchRegistrants(page, limit, q)
      ),
      tap(() => this.isLoading = false)
    ).subscribe(result => {
      this.registrants = result.items.map(reg => ({ ...reg, createdAt: new Date(reg.createdAt) }));
      this.pagination = result.meta;
    });
  }

  onSearch(text: string) {
    this.searchQuery$.next(text);
  }

  onPage(pageEvent: PageEvent) {
    this.searchPage$.next({ page: pageEvent.pageIndex + 1, limit: pageEvent.pageSize });
  }

  viewRegistrant(data: RegistrantLite) {
    this.dialog.open(RegistrantViewComponent, { width: `50%`, data });
  }
}
