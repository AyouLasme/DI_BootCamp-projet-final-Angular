import { Demand } from './demand';
import { User } from './user';
export class Reponse {
    id: number;
    dateOffre: Date; 
    prixOffre: number;
    demande: Demand;
    sender: any;

    constructor(id = 0, dateOffre = new Date(), prixOffre = 0, demande = new Demand(),  sender : any= {}){
        this.id = id;
        this.dateOffre = dateOffre;
        this.prixOffre = prixOffre;
        this.demande = demande;
        this.sender = sender;
    }
}