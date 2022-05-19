import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountServiceService } from '../account-service.service';
import { UserDetails } from '../userdetails';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  userDeatils:UserDetails= new UserDetails('','','','','',0);
  accountModel:Account = new Account('','',0,'');
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
    this.accountService.addAccount(this.accountModel).subscribe(
      data=>{
            alert(' Data Saved');
      },error=>{
        console.log('Contact to customer care '+error);
      }
    );
  }

}//end class
