import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountServiceService } from '../account-service.service';
import { Userdetails } from '../userdetails';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  userDeatils:Userdetails= new Userdetails('','','','','',0);
  accountModel:Account = new Account('','',0,'',this.userDeatils);
  accountService:AccountServiceService;

  constructor(accountService:AccountServiceService) {
    this.accountService = accountService;
   }

  ngOnInit(): void {
  }

  formSubmittion()
  {
    console.log("form submit button clicked ");
    console.log(this.accountModel);
    this.accountService.addAccount(this.accountModel);
  }

}//end class
