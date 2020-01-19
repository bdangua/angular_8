import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { reversePipe } from './reverse.pipe';
import { customPipe } from './custom.message';

@NgModule({
  declarations: [
    AppComponent,reversePipe,customPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
