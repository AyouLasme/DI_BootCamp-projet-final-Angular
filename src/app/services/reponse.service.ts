import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { Reponse } from '../models/reponse';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  readonly API_URL = "http://localhost:8081";

  constructor(private apiRequestService: ApiRequestService) { } 

  public getAll(){
    return this.apiRequestService.get(this.API_URL+"/api/reponses")
   }

   public saveReponse(reponse: any){
    return this.apiRequestService.post({ 
    endpoint: '/api/reponses', data: reponse
   })
  }
}
