import { Municipality } from "./municipality";
import { User } from "./user";

export class Demand {
    id: number;
    object: string;
    content: string; 
    dateRetrait: Date;
    dateDmd: Date;
    imageModels: String;
    municipality: Municipality;
    receiver: User;
    sender: User;
    category: string;

    constructor(id = 0, object = "", content = "", dateRetrait = new Date(), dateDmd = new Date(), imageModels = "", municipality = new Municipality(), receiver = new User(), sender = new User(), category = ""){
        this.id = id;
        this.object = object;
        this.content = content;
        this.dateRetrait = dateRetrait;
        this.dateDmd = dateDmd;
        this.imageModels = imageModels;
        this.municipality = municipality;
        this.receiver = receiver;
        this.sender = sender;
        this.category = category;
    }
}