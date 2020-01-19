import { Injectable } from "@angular/core";
@Injectable({
    providedIn:"root"
})
export class dbService{
    mySQLDB():string{
        return "MySQL DataBase Data Soon....!";
    };
    mongodb():string{
        return "MongoDB Data Soon...!";
    };  
};