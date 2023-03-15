import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  readonly API_URL = "http://localhost:8081";

  constructor(private apiRequestService: ApiRequestService) { } 

  public getAll(){
    return this.apiRequestService.get(this.API_URL+"/api/reponses")
   }
}
