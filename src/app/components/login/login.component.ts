import { Component } from '@angular/core';
import {LoginService} from "../../services/login";


@Component({
  selector: 'app-login',
  template: `
    <div>
      <input type="text" [(ngModel)]="name" placeholder="Username">
      <input type="password" [(ngModel)]="pwd" placeholder="Password">
      <button (click)="login()">Login</button>
    </div>
  `
})
export class LoginComponent {


  name: string = '';
  pwd: string = '';

  constructor(private loginService: LoginService) { }

  login() {
    this.loginService.login(this.name, this.pwd)
      .subscribe(
        response => {
          // Обработайте успешный ответ от сервера
          console.log('Login success:', response);
        },
        error => {
          // Обработайте ошибку
          console.error('Login error:', error);
        }
      );
  }

}
