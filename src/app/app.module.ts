import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './core/components/layout/layout.component';
import { StudentsModule } from './students/students.module';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { UnderConstructComponent } from './components/under-construct/under-construct.component';
import { InitComponent } from './core/components/init/init.component';
import { SharedModule } from './shared/shared/shared.module';
import { CursesModule } from './curses/curses.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    UnderConstructComponent,
    InitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    StudentsModule,
    SharedModule,
    CursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
