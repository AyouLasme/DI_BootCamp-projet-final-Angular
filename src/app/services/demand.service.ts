import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { Demand } from '../models/demand';
import { Reponse } from '../models/reponse';

@Injectable({
  providedIn: 'root'
})
export class DemandService {
 
  readonly API_URL = "http://localhost:8081";

  constructor(private apiRequestService: ApiRequestService) { }

  saveDemand(demand: Demand) {
    return this.apiRequestService.post({ 
      endpoint: '/api/demandes', data: demand
     })
  }

  getAll() {
    return this.apiRequestService.get('/api/demandes');
  }


  deleteCommand(id:Number){
    return this.apiRequestService.delete(`/api/demandes/${id}`)
  }

  updateCommande(data : any){
    return this.apiRequestService.put({ endpoint: 'api/demandes', data : data});
  }

   
  getDemandByMunicipality(id:Number) {
    return this.apiRequestService.get('/api/demandes/municipality/' + id);
  }

}
