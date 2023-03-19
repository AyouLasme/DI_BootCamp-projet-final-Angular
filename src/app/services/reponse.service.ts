import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { Reponse } from '../models/reponse';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {
  getByDemandeSender(demande: number, sender: number) {
    // const param = {params: new HttpParams({demande_id:demande , sender_id:sender})}
    const param = `${demande}/${sender}`;
    return this.apiRequestService.get(this.API_URL+"/api/reponses/" + param);
  }

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
