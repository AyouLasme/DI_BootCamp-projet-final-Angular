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


  constructor(
    private demandService: DemandService,
    private router: Router,
    private fb: FormBuilder,
    private municipalityservice: MunicipalityService,
    private reponseService: ReponseService,
    private http: HttpClient,
  
  ) {
    this.demand = new Demand();
    this.reponse = new Reponse();
  }


 


  // Methode de recuperation des elements du formulaire de publication
  commandUser() {
    let data = this.form.value;
    data["statut"] = "Annonce";
    data["sender"] = {id:parseInt(sessionStorage.getItem("userId"))};
    console.log(data);
    
    data["municipality"] = {id:data.municipality[0].id};
    console.log(data)
    if(this.form.valid) {
      this.demandService.saveDemand(data as Demand).subscribe({
        next: data => {
          this.router.navigate(['/customer-space/'+ sessionStorage.getItem("userId") + '/historique-customer']);
        },
        error: error => {
          console.log(error);
          alert(error.message)
        }
      })
    }else{
      console.log(
        this.invalidField()
      );
      // alert("Veuillez renseigner tous les champs");
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




  ngOnInit(): void {
    this.form = this.fb.group({
      object: ['', [Validators.required]],
      category: ['', [Validators.required]],
      content: ['', [Validators.required]],
      dateDmd:  ['', [Validators.required]],
      dateRetrait: ['', [Validators.required]],
      imageModels: ['', [Validators.required]],
      municipality: ['', [Validators.required]],
      sender: [sessionStorage.getItem("userId"), [Validators.required]],
    });
    this.getAllmunicipality();
    this.getAllDemand();
    //this.getAllReponse();
  }
  
}
