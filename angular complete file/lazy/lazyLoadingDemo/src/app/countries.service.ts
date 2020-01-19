import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn:"root"
})
export class countriesService{
    constructor(private obj:HttpClient){}
    public getCountries():Observable<any>{
        return this.obj.get("https://restcountries.eu/rest/v2/all");
    };
};