import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router } from '@angular/router';
import {Customer} from "../model/customer.model";

@Injectable()
export class AuthActivateRouteGuard implements CanActivate {
  customer= new Customer();

  constructor(private router: Router){

  }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if(sessionStorage.getItem('userdetails')){
      this.customer = JSON.parse(sessionStorage.getItem('userdetails')!);
    }
    if(!this.customer){
      this.router.navigate(['login']);
    }
    return this.customer?true:false;
  }

}
