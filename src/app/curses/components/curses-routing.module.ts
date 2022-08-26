import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurseListComponent } from './curse-list/curse-list.component';

const routes: Routes = [
  {path: 'curses', children: [
    {path: 'list', component: CurseListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursesRoutingModule { }
