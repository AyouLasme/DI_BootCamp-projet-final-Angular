import { Competence } from './comeptence';
export class User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    tel: string;
    password: string;
    adresse: String;
    role : string;
    admin: Boolean;
    sexe: string;
    category: string;
    galery: string;
    isActive: boolean;
    city: string;
    municipality:string;
    competencies: number[];
    verificationPassword: String;

    constructor(id = 0, firstname = "", lastname = "", email = "", tel = "", password = "", adresse = "", role = "", isAdmin = false, sexe = "", category = "", galery = "", isActive = false,city = "", municipality = "", competencies = [], verificationPassword ="") {
        this.id = id;
        this.firstname = firstname;
        this.lastname= lastname;
        this.email= email;
        this.tel= tel;
        this.password= password;
        this.adresse= adresse;
        this.role = role;
        this.admin= isAdmin;
        this.sexe= sexe;
        this.category= category;
        this.galery= galery;
        this.isActive = isActive;
        this.city = city;
        this.municipality = municipality;
        this.competencies = competencies;
        this.verificationPassword = verificationPassword;
    }

}