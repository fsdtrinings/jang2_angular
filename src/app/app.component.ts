import { Component } from '@angular/core';
import { LoginResponseDetails } from './login-response-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyBankApp';
  role:string = '';
  username:string = '';
  loginUser:LoginResponseDetails = <LoginResponseDetails>{};
  status:boolean = false;
  isAdmin:boolean = false;

  getAck(event:any)
  {

    this.loginUser = event;
    
    
    if(this.role != 'invalid')
    {

        this.role = this.loginUser.role;
        this.username = this.loginUser.username;
        this.status = this.loginUser.status;
        this.isAdmin = this.loginUser.role=='admin'?true:false;
        
    }
    else{
      
      this.status = false;
      this.isAdmin = false;
    }
  }
}
