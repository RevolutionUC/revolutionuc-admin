import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatIconModule, MatTableModule, MatRippleModule, MatBottomSheetModule,
         MatToolbarModule, MatDialogModule, MatSnackBarModule, MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule, MatSidenavModule, MatListModule, MatAutocompleteModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthInterceptor } from './services/http_interceptor';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { RegistrantsModule } from './pages/registrants/registrants.module';
import { UsersModule } from './pages/users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatChipsModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    MatRippleModule,
    MatMenuModule,
    MatPaginatorModule,
    MatBottomSheetModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    RegistrantsModule,
    UsersModule
  ],
  entryComponents: [],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
