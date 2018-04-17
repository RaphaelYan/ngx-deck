import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TouchAnimationDirective } from './touch-animation.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    TouchAnimationDirective,
  ],
  declarations: [
    TouchAnimationDirective,
  ],
  providers: [],
})
export class TouchAnimationModule { }
