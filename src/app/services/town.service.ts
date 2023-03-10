import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class TownService {

  constructor(private apiRequestService: ApiRequestService) { }

  getAll() {
    return this.apiRequestService.get('/api/town');
  }
}
