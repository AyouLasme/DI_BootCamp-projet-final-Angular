import { Municipality } from "./municipality";
import { User } from "./user";
import { Reponse } from './reponse';

export class Demand {
    id: number;
    object: string;
    content: string; 
    dateRetrait: string;
    dateDmd: string;
    imageModels: string[];
    municipality: any;
    sender: any;
    category: string;
    statut: string;
 

    constructor(id = 0, object = "", content = "", dateRetrait = "", dateDmd = "", imageModels = [], municipality : any = {}, sender : any= {}, category = "",statut = ""){
        this.id = id;
        this.object = object;
        this.content = content;
        this.dateRetrait = dateRetrait;
        this.dateDmd = dateDmd;
        this.imageModels = imageModels;
        this.municipality = municipality;
        this.sender = sender;
        this.category = category;
        this.statut = statut;
    }
}