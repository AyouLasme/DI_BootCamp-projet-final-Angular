import { Municipality } from "./municipality";

export class Command {
    id: number;
    titreCommande: string;
    content: string; 
    dateRecuperation: Date;
    heureRecuperation: Date;
    imageModels: String;
    municipality: Municipality;

    constructor(id = 0, titreCommande = "", content = "", dateRecuperation = new Date(), heureRecuperation = new Date(), imageModels = "", municipality = new Municipality()){
        this.id = id;
        this.titreCommande = titreCommande;
        this.content = content;
        this.dateRecuperation = dateRecuperation;
        this.heureRecuperation = heureRecuperation;
        this.imageModels = imageModels;
        this.municipality = municipality;
    }
}