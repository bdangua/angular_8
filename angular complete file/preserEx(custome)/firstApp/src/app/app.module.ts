//app.module.ts file acting as Registration file.
//this file used to register the Components,Services,Directives,Pipes,.....
//once if we register then only our applications will be executed
//BrowserModule used to execute the projects into Browsers
//NgModule used to create the custom modules
//collection of custom modules called as project
//AppComponent is the default component
//we have four registration arrays
//@declarations, @imports  @providers   @bootstrap
//we will register Components,Pipes and directives in "declarations" array
//we will register modules in "imports" array
//we will register services in "providers" array
//we will execute particular component by using bootstrap array.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { firstComponent } from "./first.component";
@NgModule({
  declarations: [
    AppComponent,firstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [firstComponent]
})
export class AppModule { }
