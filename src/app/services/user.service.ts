import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly API_URL = "http://localhost:8081";


  constructor(private httpClient: HttpClient) {

   }

  public getUsers(){
    return this.httpClient.get(this.API_URL+"/api/users")
   }
}
