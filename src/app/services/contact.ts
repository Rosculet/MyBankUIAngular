import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ContactComponent} from "../components/contact/contact.component";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) {}

  registerContact(contact: { subject: string; name: string; message: string; email: string }) {
    const url = `${this.baseUrl}/contact`;
    return this.http.post<ContactComponent>(url, contact);
  }
}
