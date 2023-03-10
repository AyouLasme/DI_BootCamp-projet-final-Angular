import { Component } from '@angular/core';
import { ProfilCouturierComponent } from '../profil-couturier/profil-couturier.component';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { TownService } from '../../../services/town.service';
import { CityService } from '../../../services/city.service';
import { Town } from 'src/app/models/town';
import { OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { Competence } from 'src/app/models/comeptence';
import { CompetenceService } from '../../../services/competence.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User;
  towns: Town[];
  cities: City[];
  ville : string;
  commune: string;
  tout: string;
  homme: string;
  femme: string;
  enfant: string
  competences: Competence[];


  public role: string;
  roleCouturierChecked: boolean = false
  constructor(
    private serviceUser: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private townservice: TownService,
    private cityService: CityService,
    private competenceService: CompetenceService
  ) {
    this.user = new User();
  }



  // Methode de recuperation des elements du register
  registerUser() {
    const reponseApresVerification = this.verifyChamp();

    if(reponseApresVerification) {
      console.log(JSON.stringify(this.user));
      this.serviceUser.register(this.user).subscribe({
        next: data => {
          console.log(data);
           //this.router.navigate(['/login']);
        },
        error: error => {
          console.log(error);
          alert(error.message)
        }
      })
    }else{
      alert("Veuillez renseigner tous les champs");
    }
  
  }


// Methode de verifiaction des champs
  public verifyChamp(): boolean {
    // Vous pouvez utiliser la valeur de role pour ouvrir la page appropriée.
    if(this.role == "couturier") {
       if(!!this.user.firstname && !!this.user.lastname && !!this.user.commune && !!this.user.email && !!this.user.adresse && !!this.user.password && !!this.user.tel && !!this.user.ville && !!this.user.category && !!this.competences && !!this.user.verificationPassword) {
        return true
       }
       return false;
    }else{
      if(!!this.user.firstname && !!this.user.lastname && !!this.user.commune && !!this.user.email && !!this.user.adresse && !!this.user.password && !!this.user.tel && !!this.user.ville && !!this.user.verificationPassword) {
        return true
      }
      return false;
    }
  }

  //Methode de verification du mot de pass
  


  // Methode de recuperation des villes

  public getAllTown() {
    this.townservice.getAll().subscribe({
      next: data => {
        console.log(data);
        this.towns = data as Town[];
      },
      error: error => {
        console.log(error);

      }
    })
  }


  // Methode de recupperation des competences

  public getAllCompetence() {
    this.competenceService.getAll().subscribe({
      next: data => {
        console.log(data);
        this.competences = data as Competence[];
      },
      error: error => {
        console.log(error);

      }
    })
  }


  // Methode de recuperation des communes
  public getAllCity() {
    this.cityService.getAll().subscribe({
      next: data => {
        console.log(data);
        this.cities = data as City[];
      },
      error: error => {
        console.log(error);

      }
    })
  }



  // public onSubmit(): void {
  //   // Vous pouvez utiliser la valeur de selectedChoice pour ouvrir la page appropriée.
  //   switch (this.user.role) {
  //     case 'customer':
  //       this.router.navigate(['/Accueil']);
  //       break;
  //     case 'taylor':
  //       this.router.navigate(['/accueilCouturier']);
  //       break;
  //     default:
  //       break;
  //   }
  // }





  form: any;


  ngOnInit() {
    this.form = this.fb.group({
      tout: new FormControl(false),
      homme: new FormControl(true),
      femme: new FormControl(true),
      enfant: new FormControl(false),
      role: new FormControl(true)
    });

    this.getAllTown();
    this.getAllCity();
    this.getAllCompetence();
  }




  // Methode de verification du checkbox. Si le champs tout est selectionné tous les autres champs sont desactives 

  onChange() {
    if (this.form.value.homme && this.form.value.femme) {
      this.form.patchValue({
        tout: false
      });
    } else if (!this.form.value.homme && !this.form.value.femme && !this.form.value.enfant) {
      this.form.patchValue({
        tout: false
      });
    }
  }

  onChangeTout(event) {
    if (event.target.checked) {
      this.form.patchValue({
        homme: true,
        femme: true,
        enfant: true
      });
    } else {
      this.form.patchValue({
        homme: false,
        femme: false,
        enfant: false
      });
    }
  }








  enableForm(event: any, type: string) {
    console.log(event.target)
    if (type == "couturier") {
      this.roleCouturierChecked = event.target.checked; 
      console.log(event);
    } else {
      this.roleCouturierChecked = false;
    }

  }

}
