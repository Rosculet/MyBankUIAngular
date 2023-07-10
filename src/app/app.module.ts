import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';




import { AppComponent } from './app.component';
import { RegisterComponent} from "./components/customer/register.component";
import { HomePageComponent } from './components/home-page/home-page.component';
import { HelpDescComponent } from './components/help-desc/help-desc.component';
import { LoansComponent } from './components/loans/loans.component';
import { BalanceComponent } from './components/balance/balance.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { ContactComponent } from './components/contact/contact.component';
import { NgOptimizedImage} from "@angular/common";
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomePageComponent,
    HelpDescComponent,
    LoansComponent,
    BalanceComponent,
    CardsComponent,
    ContactComponent,
    LoginComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
