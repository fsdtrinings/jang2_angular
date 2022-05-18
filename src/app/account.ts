import { Userdetails } from "./userdetails";

export class Account {
    username:string;
    password:string;
    balance:number;
    role:string;
    userdetails:Userdetails;

    constructor(
        username:string,
        password:string,
        balance:number,
        role:string,
        userdetails:Userdetails)
        {
            this.username = username;
            this.password = password;
            this.role = role;
            this.balance = balance;
            this.userdetails = userdetails;
        }

    
}//end class
