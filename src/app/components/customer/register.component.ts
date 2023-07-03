import {Component} from '@angular/core';
import {CustomerService } from '../../services/customer';

@Component({
  selector: 'appLogin',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  customer: any = {
    name: '',
    email: '',
    mobileNumber: '',
    pwd: '',
    role: '',
  };

  constructor(private customerService: CustomerService) {}

  registerCustomer(): void {
    this.customerService.registerCustomer(this.customer)
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

  searchCustomerById(): void {
    this.customerService.getCustomerById(this.customer.customer_id)
      .subscribe(
        customer => {
          // Присваивание customer_id найденного customer в account
          this.customer.customer_id = customer.customer_id;
          console.log('Customer found:', customer);
        },
        error => {
          console.error('An error occurred during customer search', error);
          // Дополнительные действия при ошибке поиска customer
        }
      );
  }
}
