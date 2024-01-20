import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../Services/projects.service';
import { Projet } from '../Models/projet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  constructor(private ProjectsService:ProjectsService, private router:Router)
  {
    this.projet = new Projet();
  }
  projet:Projet;
ngOnInit(): void {
  
}

add(){
  this.ProjectsService.add(this.projet).subscribe({
    next : () => {
      this.router.navigateByUrl("/project/list");
    },
    error : () => {},
    complete : () => {}
  });
}

}
