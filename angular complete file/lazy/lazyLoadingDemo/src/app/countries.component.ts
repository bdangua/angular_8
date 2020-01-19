import { Component } from "@angular/core";
import { countriesService } from "./countries.service";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
    selector:"countries",
    templateUrl:"./countries.component.html"
})
export class countriesComponent{
    private result:any;
    constructor(private obj:countriesService){}
    ngOnInit(){
        this.obj.getCountries().subscribe((posRes)=>{
            this.result = posRes;
        },(errRes:HttpErrorResponse)=>{
            if(errRes.error instanceof Error)
                console.log("client side error");
            else
                console.log("server side error");
        });
    }
};