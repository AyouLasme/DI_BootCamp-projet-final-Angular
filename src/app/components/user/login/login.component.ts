import { Component, Type } from '@angular/core';
import { User } from '../../../models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user : User;

  constructor(private serviceUser: AuthService, private router: Router){
      this.user=new User();
  }

  connexionUser(){
    console.log(JSON.stringify(this.user));
    this.serviceUser.getUser({email: this.user.email, password: this.user.password}).subscribe({
      next: data =>{
        console.log(data);
        let dataUser:User = data as User;
        switch (dataUser.role.toLowerCase()) {
          case 'customer':
            this.router.navigate(['/Accueil']);
            break;
          case 'taylor':
            this.router.navigate(['/accueilCouturier']);
            break;
        }

        //this.router.navigate(['/accueil']);
      },
      error: error => {
        console.log(error);
        alert("connexion echoué,email ou mot de pass incorrect")
        
      }
    })
  }
}
