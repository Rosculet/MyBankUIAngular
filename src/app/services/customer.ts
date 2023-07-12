import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RegisterComponent} from "../components/customer/register.component";
import {catchError, Observable} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8080/customer'

  constructor(private http: HttpClient) {}

  registerCustomer(user: { name: string; email: string; mobile_number: string; pwd: string; role: string} ) {
    const url = `${this.baseUrl}/register`;
    return this.http.post<RegisterComponent>(url, user);
  }

  getCustomerById(customer_id: bigint): Observable<any>{
    const url = `${this.baseUrl}/${customer_id}`; // Замените на ваш URL для получения данных о клиенте
    return this.http.get(url)
      .pipe(catchError(err => err.msg));
  }
  deleteCustomer(customer_id: bigint): Observable<any> {
    const url = `${this.baseUrl}/delete/${customer_id}`;
    return this.http.delete(url);
  }

}
