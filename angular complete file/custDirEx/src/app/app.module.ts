import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { myDirective } from './my.directive';
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,myDirective
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
