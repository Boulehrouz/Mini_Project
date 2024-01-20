import { Component, OnInit } from '@angular/core';
import { Projet } from '../Models/projet';
import { ProjectsService } from '../Services/projects.service';
import { NotExpr } from '@angular/compiler';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit{
  projects:Projet[]=[];

  constructor(private ProjectsService:ProjectsService)
  {

  }

  ngOnInit(): void {
    this.ProjectsService.getAll().subscribe({
      next:(data)=> {
        this.projects=data;
      },
      error:()=>{},
      complete:()=>{}
    });
  }
  remove(id:number)
  {
    if(confirm("Etes vous sur de vouloir supprimer le projet ??"))
    {
      this.ProjectsService.remove(id).subscribe({
        next:()=>{
          this.projects=this.projects.filter(p => p.Id != id);
        },
        error:()=>{},
        complete:()=>{}
      })
    }
  }
}

