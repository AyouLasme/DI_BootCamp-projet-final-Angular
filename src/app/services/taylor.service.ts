import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaylorService {
  readonly API_URL = "http://localhost:8081";

  readonly ENDPOINT_TAYLOR = "/api/taylors";

  constructor(private httpClient: HttpClient) {

   }

  public getTaylors(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_TAYLOR)
   }
}
