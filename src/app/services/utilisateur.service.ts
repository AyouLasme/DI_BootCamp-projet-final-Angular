import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  user ?: User;

  constructor(private storageService : StorageService ){
    this.user = JSON.parse(this.storageService.get("user") as string);
  }

  logout(){
    this.storageService.delete("user");
  }

  isConnected() : boolean {
    return !!this.user;
  }

  addUser(user : any) {
    return this.storageService.set({key : 'user',value :user });
  }
  getUser() : User{
   return this.user as User;
  }

}
