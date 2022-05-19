import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIData } from './apidata';

@Injectable({
  providedIn: 'root'
})
export class TestAPIService {

  // http holds all methods like get post put delete 
  constructor(private http:HttpClient) {}
   

   endPoint:string = 'https://jsonplaceholder.typicode.com/posts';

   getDataFromAPI():Observable<APIData>
   {
    return this.http.get<APIData>(`${this.endPoint}`);
   }
}
