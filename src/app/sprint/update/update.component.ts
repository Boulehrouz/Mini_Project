import { Component } from '@angular/core';
import { SprintsService } from '../Services/sprints.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sprint } from '../Models/sprint';
import { map } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(private ActivatedRoute:ActivatedRoute,private SprintsService:SprintsService,private router:Router)
  {
    this.sprint= new Sprint();
  }
  sprint:Sprint;
  ngOnInit(): void {
    let id = this.ActivatedRoute.snapshot.params["id"];
    this.SprintsService.getById(id).
    pipe(
      map(s =>{
        s.DateDebut=s.DateDebut.toString().split("T")[0];
        s.DateFin=s.DateFin.toString().split("T")[0];
        return s;
      })
    )
    .subscribe({
      next:(data)=>{
        this.sprint = data;
      }
    })
  }

  update()
  {
    this.SprintsService.update(this.sprint).subscribe({
      next:()=>{
        this.router.navigateByUrl("/sprint/list");
      },
      error:()=>{},
      complete:()=>{}
    });
  }

}
