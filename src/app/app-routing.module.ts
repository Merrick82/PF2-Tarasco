import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnderConstructComponent } from './components/under-construct/under-construct.component';
import { InitComponent } from './core/components/init/init.component';

const routes: Routes = [
  {path: 'inicio', component: InitComponent},
  {path: 'construct', component: UnderConstructComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
