//import Injectable
//Injectable used to create the Custom Service
import { Injectable } from "@angular/core";

//import HttpClient
//HttpClient used to make the rest api calls
import { HttpClient } from "@angular/common/http";

//import Observable
//HttpClient return type is Observable
//Continuous flow of data from server called as Observable.
import { Observable } from "rxjs";

//use Injectable
@Injectable({
    providedIn:"root"
})
//providedIn makes the service as global
//export the class
export class countriesService{
    //create the object to HttpClient
    //we will create objects by using constructor
    //dependency injection
    constructor(private obj:HttpClient){}
    //where obj is the HttpClient object


    //create the function
    //function should make rest api call
    public getCountries():Observable<any>{
        return this.obj.get("https://restcountries.eu/rest/v2/all");
    };
};