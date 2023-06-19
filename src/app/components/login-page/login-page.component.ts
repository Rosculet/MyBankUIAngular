import {Component} from '@angular/core';
import { LoginService } from '../../services/login';

@Component({
  selector: 'appLogin',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class RegisterComponent {
  customer: any = {
    email: '',
    pwd: '',
    role: '',
    name: '',
    mobileNumber: ''
  };

  constructor(private loginService: LoginService) {}

  registerUser(): void {
    this.loginService.registerUser(this.customer)
      .subscribe(
        response => {
          console.log('User registered successfully');
          // Дополнительные действия при успешной регистрации
        },
        error => {
          console.error('An error occurred during registration', error);
          // Дополнительные действия при ошибке регистрации
        }
      );
  }
}
