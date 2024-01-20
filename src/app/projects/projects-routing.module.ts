import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"add",component : AddComponent},
  {path:"list",component : ProjectsListComponent},
  {path:"update/:id",component : UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
