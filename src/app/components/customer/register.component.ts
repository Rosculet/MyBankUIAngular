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
  deleteCustomer(): void{
    this.customerService.deleteCustomer(this.customer.customer_id)
      .subscribe(
        () => {
          console.log('Customer deleted successfully');
          // Дополнительные действия после успешного удаления, например, перенаправление или обновление списка
        },
        error => {
          console.log('An error occurred while deleting the customer:', error);
          // Обработка ошибки, например, отображение сообщения об ошибке на пользовательском интерфейсе
        }
      );
  }


  searchCustomerById(): void {
    this.customerService.getCustomerById(this.customer.customer_id)
      .subscribe(
        customer => {
          // Присваивание customer_id найденного customer в account
          this.customer.name = customer.name;
          this.customer.email = customer.email;
          this.customer.mobileNumber = customer.mobileNumber;
          console.log('Customer found:', customer);
        },
        error => {
          console.error('An error occurred during customer search', error);
          // Дополнительные действия при ошибке поиска customer
        }
      );
  }
}
