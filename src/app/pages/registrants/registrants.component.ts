import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, combineLatest, Observable, of, timer } from 'rxjs';
import { catchError, debounce, flatMap, map, tap } from 'rxjs/operators';

import { RegistrantLite } from 'src/app/interfaces/registrant';
import { Pagination, PaginationMeta } from 'src/app/interfaces/pagination';
import { RegistrantViewComponent } from './registrant-view/registrant-view.component';
import { RegistrantsService } from './registrants.service';

@Component({
  selector: 'registrants',
  templateUrl: './registrants.component.html',
  styleUrls: ['./registrants.component.css'],
})
export class RegistrantsComponent implements OnInit {
  registrantSearch$: Observable<Pagination<RegistrantLite> | null>
  
  registrantSearchError$ = new BehaviorSubject<boolean>(false);
  searchQuery$ = new BehaviorSubject<string>(``);
  searchPage$ = new BehaviorSubject<{ page: number, limit: number }>({ page: 1, limit: 10 });

  columns = [
    `name`,
    `email`,
    `createdAt`,
    `actions`
  ];

  numCheckedIn: number;

  constructor(
    private service: RegistrantsService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.searchRegistrants();
  }

  searchRegistrants() {
    this.registrantSearch$ = combineLatest(
      this.searchPage$,
      this.searchQuery$.pipe(debounce(() => timer(500)))
    ).pipe(
      flatMap(
        ([{ page, limit }, q]) => this.service.searchRegistrants({ page, limit, q })
      ),
      map(
        ({ items, meta }) => ({
          meta, items: items.map(reg => ({ ...reg, createdAt: new Date(reg.createdAt) }))
        })
      ),
      catchError(err => {
        console.error({ err });
        this.registrantSearchError$.next(true);
        return of(null);
      })
    );
    this.registrantSearch$.subscribe(d => console.log({d}));
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
