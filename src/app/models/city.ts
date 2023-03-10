import { Town } from "./town";

export class City{

    id: number;
    libelle: string; 
    town: Town;

    constructor(id = 0, libelle = "", town = new Town()){
        this.id = id;
        this.libelle = libelle;
        this.town = town;
    }
}