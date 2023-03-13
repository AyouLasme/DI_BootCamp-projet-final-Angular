import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {
  readonly API_URL = "http://localhost:8081";

  constructor(private apiRequestService: ApiRequestService) { }

  getAll() {
    return this.apiRequestService.get('/api/municipalities');
  }
}
