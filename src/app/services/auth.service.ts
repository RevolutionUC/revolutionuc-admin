import { Injectable, Optional, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Login, User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL: string = environment.BASE_URL;
  private tokenStorageKey = `token`;

  user: User = null;

  constructor(private http: HttpClient, @Optional() @SkipSelf() parent?: AuthService) {
    if (parent) {
      console.log({ parent, this: this });
      throw new Error(`RED ALERT RED ALERT`);
    }
  }

  login(username: string, password: string): Observable<Login> {
    return this.http.post<Login>(`${this.BASE_URL}/admin/login`, { username, password }).pipe(
      map(({ token, user }) => {
        localStorage.setItem(this.tokenStorageKey, token);
        console.log({ this: this });
        this.user = user;
        console.log(`map`, { user: this.user });
        return { token, user };
      })
    );
  }

  logout(): void {
    console.log(`logout()`);
    localStorage.removeItem(this.tokenStorageKey);
    this.user = null;
  }

  getToken(): string {
    return localStorage.getItem(this.tokenStorageKey);
  }

  isUserLoggedIn(): boolean {
    console.log({ this: this });
    console.log(`isUserLoggedIn`, { user: this.user });
    return !!this.user;
  }
}
