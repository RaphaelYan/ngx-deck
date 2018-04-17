import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TaggifyModule } from '../../src';
import { TouchAnimationModule } from '../../src';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    TaggifyModule,
    TouchAnimationModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
