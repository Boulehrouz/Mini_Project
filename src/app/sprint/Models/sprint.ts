import { Projet } from "src/app/projects/Models/projet";

export class Sprint {
    Id:number=0;
    SprintName:string="";
    SprintGoal:string="";
    DateDebut!:Date | string;
    DateFin!:Date | string;
    projet:Projet;
    constructor(){
        this.projet= new Projet();
    }
}
