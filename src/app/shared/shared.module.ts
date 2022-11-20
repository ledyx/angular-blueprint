import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { InputComponent } from './components/form-controls/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollTopDirective } from './directives/scroll-top.directive';

@NgModule({
  declarations: [
    LoadingComponent,
    InputComponent,
    ScrollTopDirective
  ],
  exports: [
    LoadingComponent,
    InputComponent,
    ScrollTopDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
