//import NgModule
//NgModule is the predefined class
//NgModule class used to create the Custom Modules
import { NgModule } from "@angular/core";

//import CommonModule
//CommonModule used to share the common benfits provided by framework to all child modules
import { CommonModule } from "@angular/common";


//import countriesComponent
import { countriesComponent } from "./countries.component";

//import countriesService
import { countriesService } from "./countries.service";


//import HttpClientModule
import { HttpClientModule } from "@angular/common/http";


//import Routes,RouterModule
//these classes helps to make countriesComponent as default component in countriesModule
import { Routes,RouterModule } from "@angular/router";


//make the countriesComponent as default component in countriesModule
export const appRoutes:Routes = [
    {path:"",component:countriesComponent}
];

//use NgModule
@NgModule({
    declarations:[countriesComponent],
    imports:[CommonModule,
             HttpClientModule,
             RouterModule.forChild(appRoutes)],
    providers:[countriesService],
    exports:[countriesComponent]
})
export class countriesModule{}
//forChild() is the predefined function in RouterModule
//forChild() function used to load the Routes into Framework in child modules





