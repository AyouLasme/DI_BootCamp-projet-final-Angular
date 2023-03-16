import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/helpers/validator';
import { City } from 'src/app/models/city';
import { Competence } from 'src/app/models/comeptence';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

import { CompetenceService } from 'src/app/services/competence.service';
import { MunicipalityService } from 'src/app/services/municipality.service';
import { CityService } from 'src/app/services/city.service';
import { Municipality } from 'src/app/models/municipality';


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
    console.log(this.form.valid);
    if(this.form.valid) {
      let data = this.form.value;
      data.city = {id:data.city[0].id} ;
      data.municipality = {id:data.municipality[0].id};
      if(this.roleCouturierChecked){
        let d = [];
        data.competencies.forEach(e => {
          d.push({id:e.id})
        });
        data.competencies = d;
      }
      this.serviceUser.register(data as User).subscribe({
        next: data => {
          this.form.clearAsyncValidators();
          this.router.navigate(['/']);
        },
        error: error => {
          console.log(error);
        }
      })
    }else{
      
    }
  
  }
  


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
