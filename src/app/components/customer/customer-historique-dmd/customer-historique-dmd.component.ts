import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DemandService } from 'src/app/services/demand.service';
import { ReponseService } from '../../../services/reponse.service';
import { Demand } from 'src/app/models/demand';
import { Reponse } from '../../../models/reponse';

@Component({
  selector: 'app-customer-historique-dmd',
  templateUrl: './customer-historique-dmd.component.html',
  styleUrls: ['./customer-historique-dmd.component.css']
})
export class CustomerHistoriqueDmdComponent implements OnInit{
  demand: Demand;
  demandList: Demand[];
  reponses: Reponse[];
  reponse: Reponse;
  constructor(
    private demandService: DemandService,
    private router: Router,
    private fb: FormBuilder,
    private reponseService: ReponseService,
  
  ) {
    this.demand = new Demand();
    this.reponse = new Reponse();
  }

  ngOnInit(): void {
    this.getAllDemand();
  }


  // Methode de recuperation des reponses
  public getAllReponse() {
    this.reponseService.getAll().subscribe({
      next: data => {
        this.reponses = data as Reponse[];
      },
      error: error => {
        console.log(error);

      }
    })
  }



   // Methode de recuperation des demandes
   public getAllDemand() {
    this.demandService.getAll().subscribe({
      next: data => {
        this.demandList = data as Demand[];
      },
      error: error => {
        console.log(error);

      }
    })
  }


  //methode de vue des commandes
  viewCommande($commandId){
    this.router.navigate(['customer-space',sessionStorage.getItem("userId"), 'command-view', $commandId])
  }
}
