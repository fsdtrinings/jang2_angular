import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServiceService } from '../account-service.service';
import { loginDetails } from '../login-details';
import { LoginResponseDetails } from '../login-response-details';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginModel:loginDetails = {
    username:'',
    password:''
  }

  @Output() loginAcknowlegment= new EventEmitter<LoginResponseDetails>();
  
  
  
  responseStatus:LoginResponseDetails=<LoginResponseDetails>{}
  
  constructor(
    private accountService:AccountServiceService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  doLogin()
  {
    console.log('inside do login '+this.loginModel);
    console.log(this.loginModel.username+' - '+this.loginModel.password)

    this.accountService.doLoginAction(this.loginModel).subscribe(
      data=>{
        console.log('After login from spring boot service :- '+data)
        this.responseStatus = data;
        console.log('Response Status '+this.responseStatus.status+" - "+this.responseStatus.role+' - '+this.responseStatus.username)
        
        if(this.responseStatus.username != 'invalid')
        {
          this.loginAcknowlegment.emit(this.responseStatus);

          if(this.responseStatus.role == 'admin')
          {
            this.router.navigate(['addAccount']);
          }
          if(this.responseStatus.role == 'client')
          {
            this.router.navigate(['transferfund']);
          }
        }
        

      },
      error=>{
        console.log(error);
      }
    );
  }
}


