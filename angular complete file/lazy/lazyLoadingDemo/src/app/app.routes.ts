//import Routes
//Routes is the predefined class, used to create the Routes in single page applications

//import RouterModule
//RouterModule used to load the Routes into Framework
import { Routes,RouterModule } from "@angular/router";

//import pageOneComponent
import { pageOneComponent } from './pageone.component';
//import countriesModule
import { countriesModule } from "./countries.module";

//import ModuleWithProviders
//ModuleWithProviders is the predefined class used to implement the lazy loading
import { ModuleWithProviders } from "@angular/core";
import { authGuard } from './auth.guard';

//loadChildren is the SPA property
//loadChildren used to locate the Target Modules.
export const appRoutes:Routes = [
    {path:"page_one",component:pageOneComponent},
    {path:"lazy",loadChildren:"./countries.module#countriesModule",
    canLoad:[authGuard]}
]; 

//converting normal routes to lazy routes
export const lazyConst:ModuleWithProviders = 
                            RouterModule.forRoot(appRoutes);



