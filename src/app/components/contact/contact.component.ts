import {Component} from '@angular/core';
import {ContactService} from "../../services/contact";

@Component({
  selector: 'appContact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{

  contact: any = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  constructor(private contactService: ContactService) {}

  registerContact(): void {
    this.contactService.registerContact(this.contact)
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
