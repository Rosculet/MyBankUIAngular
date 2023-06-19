import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8080/register'

  constructor(private http: HttpClient) {}

  registerUser(customer: any): Observable<any> {
    const url = `${this.baseUrl}/register`;
    return this.http.post<any>(url, customer);
  }
}
