//import Injectable
//Injectable used to create the Custom Service
import { Injectable } from "@angular/core";
//use Injectable
@Injectable({
    providedIn : "root"
})
//providedIn property used to make the "service" as global
//export the class
export class authGurads{
    //canActivate()
    canActivate():boolean{
        return confirm("do you want to enter into page one ??");
    };
    canDeactivate():boolean{
        return confirm("do you want to leave page two ??");
    };
    canActivateChild():boolean{
        return confirm("do you want to enter into child three ??");
    };
};