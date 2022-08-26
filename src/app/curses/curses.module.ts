import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared/shared.module';
import { AddCurseComponent } from './components/add-curse/add-curse.component';
import { CurseListComponent } from './components/curse-list/curse-list.component';
import { CursesRoutingModule } from './components/curses-routing.module';
import { EditCurseComponent } from './components/edit-curse/edit-curse.component';

@NgModule({
  declarations: [
    CurseListComponent,
    AddCurseComponent,
    EditCurseComponent,
  ],
  imports: [
    CommonModule,
    CursesRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class CursesModule { }
