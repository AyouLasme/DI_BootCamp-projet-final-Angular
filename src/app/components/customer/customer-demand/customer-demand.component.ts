import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { DemandService } from 'src/app/services/demand.service';
import { Demand } from '../../../models/demand';
import { MunicipalityService } from 'src/app/services/municipality.service';
import { Municipality } from 'src/app/models/municipality';


@Component({
  selector: 'nz-demo-upload-picture-card',
  templateUrl: './customer-demand.component.html',
  styleUrls: ['./customer-demand.component.css'],
})
export class CustomerDemandComponent implements OnInit{
 
  form: FormGroup;
  demand: Demand;
  municipalities: Municipality[];
  selectedMunicipality: Municipality;


  constructor(
    private demandService: DemandService,
    private router: Router,
    private fb: FormBuilder,
    private municipalityservice: MunicipalityService,
  
  ) {
    this.demand = new Demand();
  }


  // Methode de recuperation des elements du formulaire de publication
  commandUser() {
    console.log(this.form.value)
    if(this.form.valid) {
      let data = this.form.value;
      data.municipality = this.selectedMunicipality
      console.log("form : ", data);
      this.demandService.getAll().subscribe({
        next: data => {
          this.router.navigate(['/historique-customer']);
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
      object: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
      category: ['', [Validators.required]],
      content: ['', [Validators.required, Validators.maxLength(5000)]],
      dateDmd:  ['', [Validators.required]],
      dateRetrait: ['', [Validators.required]],
      imageModels: ['', [Validators.required]],
      municipality: ['', [Validators.required]],
    });
    this.getAllmunicipality();
  }
}
