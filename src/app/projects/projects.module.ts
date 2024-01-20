import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';

import { ProjectsRoutingModule } from './projects-routing.module';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    AddComponent,
    ProjectsListComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    HttpClientModule,
    FormsModule
    ]
})
export class ProjectsModule { }
