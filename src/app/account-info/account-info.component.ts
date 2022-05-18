import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountServiceService } from '../account-service.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  allAccounts:Account[] = [];
  accountService:AccountServiceService;
  constructor(accountService:AccountServiceService) {
    this.accountService = accountService; 
    this.allAccounts = accountService.getAllAccounts();
  }

  ngOnInit(): void {
  }



}//end class
