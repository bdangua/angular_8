import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import UPPERCASE from "../urls/urls";
@Injectable({
    providedIn:"root"
})
export class uppercaseService{
    constructor(private http:HttpClient){}
    public convertToUppercase(data:any):Observable<any>{
        //where "data" coming from Component
        //send the "data" to server
        return this.http.post(UPPERCASE,data);
    };
};