import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../Services/projects.service';
import { Projet } from '../Models/projet';
import { map } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  constructor(private ActivatedRoute:ActivatedRoute,private ProjetServices:ProjectsService,private router:Router)
  {
    this.projet= new Projet();
  }
  projet:Projet;
  ngOnInit(): void {
    let id = this.ActivatedRoute.snapshot.params["id"];
    this.ProjetServices.getById(id).
    pipe(
      map(p =>{
        p.DateDebut=p.DateDebut.toString().split("T")[0];
        p.DateFin=p.DateFin.toString().split("T")[0];
        return p;
      })
    )
    .subscribe({
      next:(data)=>{
        this.projet = data;
      }
    })
  }

  update()
  {
    this.ProjetServices.update(this.projet).subscribe({
      next:()=>{
        this.router.navigateByUrl("/project/list");
      },
      error:()=>{},
      complete:()=>{}
    });
  }
}
