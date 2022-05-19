import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Account } from './account';
import { loginDetails } from './login-details';
import { LoginResponseDetails } from './login-response-details';


@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  rootEndPoint:string='http://localhost:8080/bank';
  loginEndPoint:string = this.rootEndPoint+'/login';
  createAccountEndPoint:string = this.rootEndPoint+'/admin/account';

  constructor(private http:HttpClient) { }

  doLoginAction(loginDetails:loginDetails):Observable<LoginResponseDetails>
  {
    return this.http.post<LoginResponseDetails>(`${this.loginEndPoint}`,loginDetails);
  }


  addAccount(account:Account):Observable<Object>
  {
    console.log('Instructor Service - Create Instructor called ');
    return this.http.post<Account>(`${this.createAccountEndPoint}`,account);
  }

  getAllAccounts():Account[]
  {
    return [];
  }

  
}
