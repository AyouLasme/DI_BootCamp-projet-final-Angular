import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { DemandService } from 'src/app/services/demand.service';
import { Demand } from '../../../models/demand';
import { MunicipalityService } from 'src/app/services/municipality.service';
import { Municipality } from 'src/app/models/municipality';
import { Reponse } from 'src/app/models/reponse';
import { ReponseService } from 'src/app/services/reponse.service';
import { HttpClient } from '@angular/common/http';
import { Competence } from 'src/app/models/comeptence';
import { CompetenceService } from 'src/app/services/competence.service';
import {CalendarModule} from 'primeng/calendar';


@Component({
  selector: 'nz-demo-upload-picture-card',
  templateUrl: './customer-demand.component.html',
  styleUrls: ['./customer-demand.component.css'],
})
export class CustomerDemandComponent implements OnInit{
 
  form: FormGroup;
  demand: Demand;
  demandList: Demand[];
  municipalities: Municipality[];
  selectedMunicipality: Municipality;
  reponses: Reponse[];
  reponse: Reponse;
  competencies: Competence[];
  dateRetrait : Date;


  constructor(
    private demandService: DemandService,
    private router: Router,
    private fb: FormBuilder,
    private municipalityservice: MunicipalityService,
    private reponseService: ReponseService,
    private http: HttpClient,
    private competenceService: CompetenceService
  
  ) {
    this.demand = new Demand();
    this.reponse = new Reponse();
  }


  ngOnInit(): void {
    this.form = this.fb.group({
      object: ['', [Validators.required]],
      category: ['', [Validators.required]],
      content: ['', [Validators.required]],
      dateDmd:  ['', [Validators.required]],
      dateRetrait: ['', [Validators.required]],
      images: ['', [Validators.required]],
      municipality: [Municipality, [Validators.required]],
      sender: [sessionStorage.getItem("userId"), [Validators.required]],
      competencies: ['', []],
    });
    this.getAllmunicipality();
    this.getAllDemand();
    //this.getAllReponse();
    this.getAllCompetence();
  }

// Methode d'enregistrement des commandes
  commandUser() {
    if(this.form.valid) {
      let data = this.form.value;
      data["statut"] = "Annonce";
      data["images"] = [];
      data["sender"] = {id:parseInt(sessionStorage.getItem("userId"))};
      data["receiver"] = {id: 1};
      data.municipality = {id:data.municipality[0].id};
      let d = [];
        data.competencies.forEach(e => {
          d.push({id:e.id})
        });
        data.competencies = d;
        console.log(data);
        this.demandService.saveDemand(data as Demand).subscribe({
        next: data => {
          this.form.clearAsyncValidators();
          this.router.navigate(['/customer-space/'+ sessionStorage.getItem("userId") 
          + '/historique-customer']);
        },
        error: error => {
          console.log(error);
        }
      })
    }else{
      console.log(
        this.invalidField()
      );
    }
  }



  invalidField(){
    const invalid = [];
    const controls = this.form.controls;
    for(const name in controls){
      if(controls[name].invalid){
        invalid.push(name);
      }
    }
    return invalid;
  }


// Methode pour telecharger les images
  url;
  uploadFile(event:any) {
    let image = event.target.files[0];
    console.log(image);

    var reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onload = (_event) => {
      this.url = reader.result;
      console.log(this.url);
    }
  }



   // Methode de recuperation des reponses
   public getAllReponse() {
    this.reponseService.getAll().subscribe({
      next: data => {
        console.log(data);
        this.reponses = data as Reponse[];
      },
      error: error => {
        console.log(error);
      }
    })
  }



   // Methode de recuperation des demandes
   public getAllDemand() {
    this.reponseService.getAll().subscribe({
      next: data => {
        console.log("commande : ", data);
        this.demandList = data as Demand[];
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




 
  
}
