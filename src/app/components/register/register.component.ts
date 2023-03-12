import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/helpers/validator';
import { City } from 'src/app/models/city';
import { Competence } from 'src/app/models/comeptence';
import { Town } from 'src/app/models/town';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { CityService } from 'src/app/services/city.service';
import { CompetenceService } from 'src/app/services/competence.service';
import { TownService } from 'src/app/services/town.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  form: FormGroup;
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
    const data = this.form.getRawValue();

    if(this.form.valid) {
      console.log(JSON.stringify(this.user));
      this.serviceUser.register(this.form.value as User).subscribe({
        next: data => {
          console.log(data);
          this.router.navigate(['/login']);
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






 

  ngOnInit() {
    this.form = this.fb.group({
      firstname: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3), Validators.email]],
      password:['', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]],
      sexe: ['', [Validators.required]],
      town: ['', [Validators.required]],
      city: ['', [Validators.required]],
      role: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      category: ['', [Validators.required]],
      competence: ['', [Validators.required]],
    },
    {
      validator: MustMatch('password', 'confirmPassword')
    }
    );

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
