import { UserDetails } from "./userdetails";

export class Account {
    username:string;
    password:string;
    balance:number;
    role:string;
    

    constructor(
        username:string,
        password:string,
        balance:number,
        role:string,
        )
        {
            this.username = username;
            this.password = password;
            this.role = role;
            this.balance = balance;
           
        }

    
}//end class
