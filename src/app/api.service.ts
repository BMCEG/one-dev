import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  baseURL = 'http://139.162.181.170:8000'; //add url here bor3y
  // baseURL = "https://one-dev.com";
  git
  baseImageURL = this.baseURL + "/";
  httpHeaders = new HttpHeaders({ "Content-type": "application/json" });

  constructor(private http: HttpClient) { }

  addContactUs(data): Observable<any> {
    return this.http.post(this.baseURL + "/api/send-message/", data, {
      headers: this.httpHeaders
    });
  }

  addResereUnit(data): Observable<any> {
    return this.http.post(this.baseURL + "/api/send-reserve/", data, {
      headers: this.httpHeaders
    });
  }

  addNewsletter(email): Observable<any> {
    return this.http.post(
      this.baseURL + "/api/newsletters/",
      { email: email },
      { headers: this.httpHeaders }
    );
  }

  addJobApplication(data): Observable<any> {
    return this.http.post(this.baseURL + '/api/career/', data, {
      headers: this.httpHeaders });
  }
}
