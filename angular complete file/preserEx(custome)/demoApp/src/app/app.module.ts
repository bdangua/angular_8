import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { ExampleComponent } from './example.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ExampleComponent]
})
export class AppModule { }
