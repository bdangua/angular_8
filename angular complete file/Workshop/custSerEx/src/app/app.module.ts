import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { mongodbComponent } from './components/mongodb.component';
import { mysqlComponent } from './components/mysql.component';

@NgModule({
  declarations: [
    AppComponent,mongodbComponent,mysqlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [mysqlComponent]
})
export class AppModule { }
