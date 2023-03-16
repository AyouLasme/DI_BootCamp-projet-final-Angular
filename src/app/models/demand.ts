import { Municipality } from "./municipality";
import { User } from "./user";
import { Reponse } from './reponse';
import { Competence } from './comeptence';

export class Demand {
    id: number;
    object: string;
    content: string; 
    dateRetrait: string;
    dateDmd: string;
    images: string[];
    municipality: any;
    sender: any;
    category: string;
    statut: string;
    competencies: any[];
    reponses: any[];
 

    constructor(id = 0, object = "", content = "", dateRetrait = "", dateDmd = "", images = [], municipality : any = {}, sender : any= {}, category = "",statut = "", competencies = [], reponses= []){
        this.id = id;
        this.object = object;
        this.content = content;
        this.dateRetrait = dateRetrait;
        this.dateDmd = dateDmd;
        this.images = images;
        this.municipality = municipality;
        this.sender = sender;
        this.category = category;
        this.statut = statut;
        this.competencies = competencies;
        this.reponses = reponses;
    }
}