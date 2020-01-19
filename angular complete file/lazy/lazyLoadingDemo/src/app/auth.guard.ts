//import Injectable
//Injectable used to create the custom services
//Routing Guards, we will create by using Custom Services.
import { Injectable } from "@angular/core";
//use Injectable
@Injectable({
    providedIn:"root"
})
//export the class
export class authGuard{
    canLoad():boolean{
        return confirm("do you want to enter into countriesModule ??");
    }
};