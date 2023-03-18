import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Demand } from 'src/app/models/demand';
import { Reponse } from 'src/app/models/reponse';
import { DemandService } from 'src/app/services/demand.service';
import { ReponseService } from 'src/app/services/reponse.service';

@Component({
  selector: 'app-customer-view-commande',
  templateUrl: './customer-view-commande.component.html',
  styleUrls: ['./customer-view-commande.component.css']
})
export class CustomerViewCommandeComponent {
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
    this.demand = this.demandService.selectedDemand;
    this.reponse = new Reponse();
  }

  ngOnInit(): void {
    this.getAllReponse();
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


  // Methode de validation d'une commande
  validerCommand(reponse) {
    this.demand.receiver = {id:reponse.sender.id};
    this.demand.statut = "Traitement";
    console.log(this.demand)
    this.demandService.updateCommande(this.demand).subscribe({
      next: data => {
        this.demand = data as Demand;
      },
      error: error => {
        console.log(error);

      }
    });
  }

}



