import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentListComponent } from './components/student-list/student-list.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { SharedModule } from '../shared/shared/shared.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

@NgModule({
  declarations: [
    StudentListComponent,
    AddStudentComponent,
    EditStudentComponent,
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class StudentsModule { }
