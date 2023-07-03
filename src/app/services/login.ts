import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const url = 'http://localhost:8080/login'; // Замените YOUR_BACKEND_API_URL на URL вашего бэкэнд сервера
    const body = { username, password };
    return this.http.post(url, body);
  }

}
