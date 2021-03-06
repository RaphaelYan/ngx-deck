import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StackModule } from '../../src';
import { TouchAnimationModule } from '../../src';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    StackModule,
    TouchAnimationModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
