import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AccountComponent} from "../components/account/account.component";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl = 'http://localhost:8080'; // Укажите путь к вашему API для получения счетов

  constructor(private http: HttpClient) { }

  registerAccount(account: {account_type: string; account_address: string; branch_address: string}) {
    const url = `${this.baseUrl}/account`;
    return this.http.post<AccountComponent>(url, account);
  }
}
