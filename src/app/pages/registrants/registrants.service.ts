import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Pagination } from "../../interfaces/pagination";
import { Registrant, RegistrantLite } from "../../interfaces/registrant";
import { SendEmailDto } from "../../interfaces/email";

@Injectable({
  providedIn: "root",
})
export class RegistrantsService {
  private BASE_URL: string = `${environment.BASE_URL}/admin`;

  constructor(private http: HttpClient) {}

  searchRegistrants({ page = 1, limit = 10, q = "" }) {
    return this.http.get<Pagination<RegistrantLite>>(
      `${this.BASE_URL}/registrants?q=${q}&page=${page}&limit=${limit}&sortKey=age&sortOrder=DESC`
    );
  }

  getRegistrant(uuid: string) {
    return this.http.get<Registrant>(`${this.BASE_URL}/registrants/${uuid}`);
  }

  sendEmail(payload: SendEmailDto) {
    return this.http.post<void>(`${this.BASE_URL}/registrants/email`, payload);
  }

  verifyRegistrant(uuid: string) {
    return this.http.post<void>(
      `${this.BASE_URL}/registrants/${uuid}/verify`,
      {}
    );
  }

  confirmAttendance(uuid: string) {
    return this.http.post<void>(
      `${this.BASE_URL}/registrants/${uuid}/confirm`,
      {}
    );
  }

  checkInUser(uuid: string) {
    return this.http.post<void>(
      `${this.BASE_URL}/registrants/${uuid}/checkin`,
      {}
    );
  }

  checkOutUser(uuid: string) {
    return this.http.get(`${this.BASE_URL}/registrants/${uuid}/checkout`);
  }

  getCheckedInCount() {
    return this.http.get<number>(`${this.BASE_URL}/checkedInCount`);
  }

  getConfirmedCheckedInCount() {
    return this.http.get<number>(`${this.BASE_URL}/confirmedCheckedInCount`);
  }
}
