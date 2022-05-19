import { Component, OnInit } from '@angular/core';
import { APIData } from '../apidata';
import { TestAPIService } from '../test-api.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  
  arr:APIData[] = [];

  constructor(service:TestAPIService) { 
    service.getDataFromAPI().subscribe(
      data=>{
        console.log('inside deposit constructor subscribe :- '+data);
        this.arr = (data as unknown as APIData[]);
      },
      error=>{
        console.log('inside deposit constructor subscribe :- '+error);
      });

  }

  ngOnInit(): void {
  }

}
