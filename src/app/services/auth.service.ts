
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public logedUser: User;
  API_URL = 'http://localhost:8081';
  constructor(private apiRequestService: ApiRequestService) {
  }


  register(user: User) {
    if (user.role === "Taylor") {
      return this.apiRequestService.post({ endpoint: "/api/taylors", data: user })
    }else if (user.role === "Customer") {
      return this.apiRequestService.post({ endpoint: "/api/customers", data: user })
    } else {
      console.log("Erreur, le type de l'utilisateur est non connu!!");
      return this.apiRequestService.post({ endpoint: "not-found", data: user })
    }
  }



  getUser(connexionData: { email: String, password: String }) {
    return this.apiRequestService.post({ endpoint: '/api/users/login', data: JSON.stringify(connexionData) });
  }



  getAll() {
    return this.apiRequestService.get('/api/users');
  }



  updateUser(id: number, user: User) {
    return this.apiRequestService.put({ endpoint: '/api/users/login' + id, data: JSON.stringify(user) });
  }
}
