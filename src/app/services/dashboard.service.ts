import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Pagination } from '../interfaces/pagination';
import { Registrant, RegistrantLite } from '../interfaces/registrant';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private BASE_URL: string = `${environment.BASE_URL}/admin`;

  constructor(private http: HttpClient) {}

  searchRegistrants(page = 1, limit = 10, q = '') {
    return this.http.get<Pagination<RegistrantLite>>(
      `${this.BASE_URL}/registrants?q=${q}&page=${page}&limit=${limit}`
    );
  }

  getRegistrant(uuid: string) {
    return this.http.get<Registrant>(`${this.BASE_URL}/registrants/${uuid}`);
  }

  getStats(stats) {
    if (stats){
      return this.http.get(`${this.BASE_URL}/stats?stats=${stats}`);
    }
    else {
      return this.http.get(`${this.BASE_URL}/stats`);
    }
  }

  checkInUser(uuid: string) {
    return this.http.get(`${this.BASE_URL}/registrants/${uuid}/checkin`);
  }

  checkOutUser(uuid: string) {
    return this.http.get(`${this.BASE_URL}/registrants/${uuid}/checkout`);
  }

  isUserMinor(age: number) {
    return age < 18;
  }
}
