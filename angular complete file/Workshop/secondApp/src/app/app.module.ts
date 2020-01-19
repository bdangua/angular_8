import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { welcomeComponent } from './welcome.component';
import { SampleComponent } from './sample.component';

@NgModule({
  declarations: [
    AppComponent,welcomeComponent, SampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SampleComponent]
})
export class AppModule { }
