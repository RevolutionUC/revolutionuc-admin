import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatIconModule, MatTableModule, MatRippleModule, MatBottomSheetModule,
         MatToolbarModule, MatDialogModule, MatSnackBarModule, MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './services/http_interceptor';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrantViewComponent } from './components/dashboard/registrant-view/registrant-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistrantViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatIconModule,
    MatTableModule,
    MatRippleModule,
    MatMenuModule,
    MatPaginatorModule,
    MatBottomSheetModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  entryComponents: [
    RegistrantViewComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
