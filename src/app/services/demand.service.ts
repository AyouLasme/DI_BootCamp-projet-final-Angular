import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { Demand } from '../models/demand';

@Injectable({
  providedIn: 'root'
})
export class DemandService {
  readonly API_URL = "http://localhost:8081";

  constructor(private apiRequestService: ApiRequestService) { }

  saveDemand(demand: Demand) {
    let data = JSON.stringify({
    "object": demand.object,
    "content": demand.content,
    "municipality":demand.municipality,
    "dateDmd": demand.dateDmd,
    "dateRetrait": demand.dateRetrait,
    "imageModele": [
      demand.imageModels
    ],
    "sender":demand.sender,
    "category":demand.category
    });

    return this.apiRequestService.post({ 
      endpoint: "/api/demandes", data: data
     })
  }

  getAll() {
    return this.apiRequestService.get('/api/demandes');
  }
}
