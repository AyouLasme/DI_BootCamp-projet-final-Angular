import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user : User;

  constructor(private serviceUser: AuthService, private utilisateurService: UtilisateurService, private router: Router){
      this.user=new User();
  }

  connexionUser(){
    console.log(JSON.stringify(this.user));
    this.serviceUser.getUser({email: this.user.email, password: this.user.password}).subscribe({
      next: data =>{
        console.log(data);
        this.user = data as User;
        this.utilisateurService.addUser(JSON.stringify(this.user));
        this.serviceUser.logedUser = data as User;
        switch (this.user.role.toLowerCase()) {
          case 'customer':
            sessionStorage.setItem("userId", this.user.id  + "");
            sessionStorage.setItem("userEmail", this.user.email  + "");
            this.router.navigate(['/customer-space/' + this.user.id]);
            break;
          case 'taylor':
            sessionStorage.setItem("userId", this.user.id  + "");
            sessionStorage.setItem("userEmail", this.user.email  + "");
            this.router.navigate(['/taylor-space/' + this.user.id]);
            break;
        }

        //this.router.navigate(['/accueil']);
      },
      error: error => {
        console.log(error);
        alert("connexion echoué, email ou mot de pass incorrect")
        
      }
    })
   }
}
