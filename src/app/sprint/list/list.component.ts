import { Component } from '@angular/core';
import { Sprint } from '../Models/sprint';
import { SprintsService } from '../Services/sprints.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  sprints:Sprint[]=[];

  constructor(private SprintsService:SprintsService)
  {

  }

  ngOnInit(): void {
    this.SprintsService.getAll().subscribe({
      next:(data)=> {
        this.sprints=data;
      },
      error:()=>{},
      complete:()=>{}
    });
  }
  remove(id:number)
  {
    if(confirm("Etes vous sur de vouloir supprimer le sprint ??"))
    {
      this.SprintsService.remove(id).subscribe({
        next:()=>{
          this.sprints=this.sprints.filter(s => s.Id != id);
        },
        error:()=>{},
        complete:()=>{}
      })
    }
  }
}
