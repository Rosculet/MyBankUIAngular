import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HelpDescComponent} from "./components/help-desc/help-desc.component";
import {BalanceComponent} from "./components/balance/balance.component";
import {LoansComponent} from "./components/loans/loans.component";
import {CardsComponent} from "./components/cards/cards.component";
import {HomePageComponent} from "./components/home-page/home-page.component";

//настройка маршрутов

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'loans', component: LoansComponent},
  {path: 'balance', component: BalanceComponent},
  {path: 'help', component: HelpDescComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
