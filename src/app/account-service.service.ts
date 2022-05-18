import { Injectable } from '@angular/core';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  accountDb:Account[] = []; // spring boot

  constructor() { }

  addAccount(account:Account)
  {
      this.accountDb.push(account);
  }

  getAllAccounts():Account[]
  {
    return this.accountDb;
  }


}
