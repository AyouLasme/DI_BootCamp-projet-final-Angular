import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Demand } from 'src/app/models/demand';
import { AuthService } from 'src/app/services/auth.service';
import { DemandService } from 'src/app/services/demand.service';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { ReponseService } from '../../../services/reponse.service';
import { Reponse } from 'src/app/models/reponse';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-taylor-demand',
  templateUrl: './taylor-demand.component.html',
  styleUrls: ['./taylor-demand.component.css']
})
export class TaylorDemandComponent implements OnInit{
  form: FormGroup;
  demand: Demand;
  demandList: Demand[];
  reponses: Reponse[];
  reponse: Reponse;
  selectedCommand: Demand;
  displayModal:boolean = false;
  firstReponse:boolean = true;

  constructor(
    private demandService: DemandService,
    private router: Router,
    private fb: FormBuilder,
    private utilisateurService: UtilisateurService,
    private reponseService: ReponseService,
    private messageService: MessageService
  
  ) {
    this.demand = new Demand();
    this.reponse = new Reponse();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      prixOffre: [0, [Validators.required]],
      dateOffre: ['', [Validators.required]],
      demande: [Demand, [Validators.required]],
      sender: [sessionStorage.getItem("userId"), [Validators.required]], 
    });
    this.getDemandByMunicipality();
    this.getAllReponse();
  }


   // Methode de recuperation des demandes
   public getDemandByMunicipality() {
    this.demandService.getDemandByMunicipality(this.utilisateurService.getUser()?.municipality?.id).subscribe({
      next: data => {
        console.log(data)
        this.demandList = data as Demand[];
      },
      error: error => {
        console.log(error);
      }
    })
  }


  // Methode de 
  selectCommand(demande: any){
    this.selectedCommand = demande;
    this.displayModal = true;

  }

  selectMessage(){
    this.displayModal = true;
  }

   //Methode de recuperation des elements du formulaire de l'offre
  registerOffre(){
    this.reponseService.getByDemandeSender(this.selectedCommand.id, parseInt(sessionStorage.getItem("userId"))).subscribe({
      next: data => {
        let d = data as any[];
        if (d.length == 0) {
          this.firstReponse = true;
        }else{
          this.firstReponse = false;
          this.messageService.add({key: 'firstReponse', severity:'warn', summary: 'Reponse déjà envoyée', detail: 'Vous avez déjà repondu à cette demande.'})
        }
      },
      error: error => {
        console.log(error);
      }
    });


    if(this.form.valid && this.firstReponse) {
      this.displayModal = false;
      let data = this.form.value;
      data.sender = {id:parseInt(sessionStorage.getItem("userId"))};
      data.demande = {id:this.selectedCommand.id};
        console.log(data);
        this.reponseService.saveReponse(data).subscribe({
        next: data => {
          this.form.clearAsyncValidators();
            this.messageService.add({key: 'reponseSent', severity:'success', summary: 'Sucès', detail: 'Votre reponse a été envoyé'})
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
}
