import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Demand } from 'src/app/models/demand';
import { AuthService } from 'src/app/services/auth.service';
import { DemandService } from 'src/app/services/demand.service';

@Component({
  selector: 'app-taylor-demand',
  templateUrl: './taylor-demand.component.html',
  styleUrls: ['./taylor-demand.component.css']
})
export class TaylorDemandComponent implements OnInit{
  demand: Demand;
  demandList: Demand[];

  constructor(
    private demandService: DemandService,
    private router: Router,
    private fb: FormBuilder,
    private serviceUser: AuthService
  
  ) {
    this.demand = new Demand();
  }

  ngOnInit(): void {
    this.getDemandByMunicipality();
  }


   // Methode de recuperation des demandes
   public getDemandByMunicipality() {
    this.demandService.getDemandByMunicipality(this.serviceUser.logedUser.municipality.id).subscribe({
      next: data => {
        console.log(data)
        this.demandList = data as Demand[];
      },
      error: error => {
        console.log(error);
      }
    })
  }
}
