import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-help-desc',
  templateUrl: './help-desc.component.html',
  styleUrls: ['./help-desc.component.css']
})
export class HelpDescComponent {
  public inquiryDetails: string = "";
  constructor(private http: HttpClient) {}
  ngOnInit(): void{
    this.http.get<string>('http://localhost:8080/help').subscribe((response: string) => {
      this.inquiryDetails = response;
    });
  }
}
