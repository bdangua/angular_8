//import Injectable
import { Injectable } from "@angular/core";

//import HttpClient
import { HttpClient } from "@angular/common/http";


//import Observable
import { Observable } from "rxjs";

//import URLS
import URLS from "../urls/urls";

//use Injectable
@Injectable({
    providedIn:"root"
})
//export the class
export class CustomersService{
    constructor(private obj:HttpClient){}

    public getCustomers():Observable<any>{
      return this.obj.get(URLS.CUSTOMERS);
    };
};







