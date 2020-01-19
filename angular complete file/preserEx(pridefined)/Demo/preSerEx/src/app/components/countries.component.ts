//import Component
import { Component } from "@angular/core";

//import countriesService
//countriesService containes getCountries()
//getCountries() returning Observable
//subscribe() used to read the data from Observables
import { countriesService } from "../services/countries.service";


//import HttpErrorResponse
//HttpErrorResponse used to handle the Exceptions thrown by server
import { HttpErrorResponse } from "@angular/common/http";


//use Component
@Component({
    selector:"countries",
    templateUrl:"./countries.component.html"
})
//export the class
export class countriesComponent{
    //decalre result variable
    //result variable used to hold the result coming from server
    private result:any;

    //create the object to countriesService
    //in general we will create objects by using constructor
    //dependency injection
    constructor(private obj:countriesService){}
    //where obj is the service object


    //ngOnInit() is the first life cycle hook
    //ngOnInit() used to write the business logic
    ngOnInit(){
        this.obj.getCountries().subscribe((posRes)=>{
                this.result = posRes;
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
        });
    };
};