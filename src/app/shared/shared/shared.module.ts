import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirectiveDirective } from 'src/app/directives/custom-directive.directive';
import { TransformPipe } from 'src/app/pipes/transform.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TransformPipe,
    CustomDirectiveDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TransformPipe,
    CustomDirectiveDirective,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
