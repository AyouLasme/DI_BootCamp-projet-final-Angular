
import { Municipality } from './municipality';

export class City{

    id: number;
    libelle: string; 
    municipality: Municipality;

    constructor(id = 0, libelle = "", municipality = new Municipality()){
        this.id = id;
        this.libelle = libelle;
        this.municipality = municipality;
    }
}