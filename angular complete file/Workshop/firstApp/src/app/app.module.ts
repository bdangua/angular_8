import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { firstComponent } from "./first.component";
@NgModule({
  declarations: [
    firstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [firstComponent]
})
export class AppModule { }
