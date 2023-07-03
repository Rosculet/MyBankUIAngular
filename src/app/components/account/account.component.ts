import { Component } from '@angular/core';
import {AccountService} from "../../services/account";
import {CustomerService} from "../../services/customer";


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {


  account: any = {
    customer_id: '',
    account_number: '',
    account_type: '',
    branch_address: '',
  }
  constructor(private accountService: AccountService, private registerService: CustomerService) {}

  registerAccount(): void {
    this.accountService.registerAccount(this.account)
      .subscribe(
        response => {
          console.log('Account registered successfully');
          // Дополнительные действия при успешной регистрации
        },
        error => {
          console.error('An error occurred during registration', error);
          // Дополнительные действия при ошибке регистрации
        }
      );
  }
}

