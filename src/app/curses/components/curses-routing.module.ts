import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurseListComponent } from './curse-list/curse-list.component';
import { AuthGuard } from '../../shared/guard/auth.guard';

const routes: Routes = [
  {path: 'curses', children: [
    {path: 'list', component: CurseListComponent, canActivate: [AuthGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursesRoutingModule { }
