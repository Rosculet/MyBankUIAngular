import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RegisterComponent} from "./components/login-page/login-page.component";
import { HomePageComponent } from './components/home-page/home-page.component';
import { HelpDescComponent } from './components/help-desc/help-desc.component';
import { LoansComponent } from './components/loans/loans.component';
import { BalanceComponent } from './components/balance/balance.component';
import { CardsComponent } from './components/cards/cards.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomePageComponent,
    HelpDescComponent,
    LoansComponent,
    BalanceComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
