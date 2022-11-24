import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { InputComponent } from './components/form-controls/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollTopDirective } from './directives/scroll-top.directive';
import { CardModalComponent } from './components/modal/card-modal/card-modal.component';

@NgModule({
  declarations: [
    LoadingComponent,
    InputComponent,
    ScrollTopDirective,
    CardModalComponent
  ],
  exports: [
    LoadingComponent,
    InputComponent,
    ScrollTopDirective,
    CardModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
