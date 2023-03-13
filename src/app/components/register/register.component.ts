import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/helpers/validator';
import { City } from 'src/app/models/city';
import { Competence } from 'src/app/models/comeptence';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

import { CompetenceService } from 'src/app/services/competence.service';
import { Municipality } from '../../models/municipality';
import { MunicipalityService } from 'src/app/services/municipality.service';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  form: FormGroup;
  user: User;
  cities: City[];
  municipalities: Municipality[];
  commune: string;
  tout: string;
  homme: string;
  femme: string;
  enfant: string
  competencies: Competence[];


  public role: string;
  roleCouturierChecked: boolean = false
  constructor(
    private serviceUser: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private municipalityservice: MunicipalityService,
    private cityservice: CityService,
    private competenceService: CompetenceService
  ) {
    this.user = new User();
  }



  // Methode de recuperation des elements du register
  registerUser() {
    const reponseApresVerification = this.verifyChamp();
    
    if(this.form.valid) {
      let data = this.form.value;
      data.city = {id: this.form.value.city as number, libelle: ''};
      data.municipality = {id: this.form.value.municipality as number, libelle: ''};
      console.log("form : ", data);
      this.serviceUser.register(data).subscribe({
        next: data => {
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
    if(this.role == "taylor") {
       if(!!this.user.firstname && !!this.user.lastname && !!this.user.municipality && !!this.user.email && !!this.user.adresse && !!this.user.password && !!this.user.tel && !!this.user.city && !!this.user.category && !!this.competencies && !!this.user.verificationPassword) {
        return true
       }
       return false;
    }else{
      if(!!this.user.firstname && !!this.user.lastname && !!this.user.municipality && !!this.user.email && !!this.user.adresse && !!this.user.password && !!this.user.tel && !!this.user.city && !!this.user.verificationPassword) {
        return true
      }
      return false;
    }
  }

  //Methode de verification du mot de pass
  


  // Methode de recuperation des villes

  public getAllCity() {
    this.cityservice.getAll().subscribe({
      next: data => {
        console.log(data);
        this.cities = data as City[];
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
        this.competencies = data as Competence[];
      },
      error: error => {
        console.log(error);

      }
    })
  }


  // Methode de recuperation des communes
  public getAllmunicipality() {
    this.municipalityservice.getAll().subscribe({
      next: data => {
        console.log(data);
        this.municipalities = data as Municipality[];
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
      tel: ['', [Validators.required]],
      municipality: ['', [Validators.required]],
      city: ['', [Validators.required]],
      role: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      category: ['', []],
      competencies: ['', []],
    },
    {
      validator: MustMatch('password', 'confirmPassword')
    }
    );

    this.getAllCity();
    this.getAllmunicipality();
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
