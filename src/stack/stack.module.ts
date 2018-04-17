import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StackComponent } from './stack.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    StackComponent,
  ],
  declarations: [
    StackComponent,
  ],
  providers: [],
})
export class StackModule { }
