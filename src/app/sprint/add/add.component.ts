import { Component } from '@angular/core';
import { SprintsService } from '../Services/sprints.service';
import { Router } from '@angular/router';
import { Sprint } from '../Models/sprint';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(private SprintsService:SprintsService, private router:Router)
  {
    this.sprint = new Sprint();
  }
  sprint:Sprint;
ngOnInit(): void {
  
}

add(){
  this.SprintsService.add(this.sprint).subscribe({
    next : () => {
      this.router.navigateByUrl("/sprint/list");
    },
    error : () => {},
    complete : () => {}
  });
}

}
