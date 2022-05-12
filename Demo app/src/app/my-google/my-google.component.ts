import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-google',
  templateUrl: './my-google.component.html',
  styleUrls: ['./my-google.component.css']
})
export class MyGoogleComponent implements OnInit {
  username:string = 'Ramesh'; //api  Spring REST
  status:boolean = false;  // api
  transferStatus:boolean = false;
  accounts:Account[] = [];

  constructor() { 
    let acc1:Account = {
      accountName:'Ramesh',
      balance:4000
    }
    let acc2:Account = {
      accountName:'Deepa',
      balance:40000
    }
    
    this.accounts.push(acc1);
    this.accounts.push(acc2);
    
  }

  
  ngOnInit(): void {
  }

  doThings():string
  {
    return " 40 C";
  }

  doTransferFund(tfunds:string)
  {
    console.log("inside doTransfer funds "+tfunds);
    let amtTransfer:number = parseInt(tfunds);

    if(amtTransfer > this.accounts[1].balance)
    {
      // we cannot tf funds , make transfer status = false and disable the input field 
      this.transferStatus = false;
      this.status = true;
    }
    else
    {
      this.accounts[1].balance -= amtTransfer;
      this.transferStatus = true;
    }
  }
}//end of class

interface Account
{
  accountName:string;
  balance:number
}
