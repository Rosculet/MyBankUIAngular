import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BalanceComponent} from "./components/balance/balance.component";
import {LoansComponent} from "./components/loans/loans.component";
import {CardsComponent} from "./components/cards/cards.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {RegisterComponent} from "./components/customer/register.component";
import {ContactComponent} from "./components/contact/contact.component";
import {LoginComponent} from "./components/login/login.component";
import {AccountComponent} from "./components/account/account.component";
import {ModalModule} from "ngx-bootstrap/modal";

//настройка маршрутов

const routes: Routes = [
  {path: 'account', component: AccountComponent },
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'customer', component: RegisterComponent},
  {path: '', component: HomePageComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'loans', component: LoansComponent},
  {path: 'balance', component: BalanceComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes),ModalModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
