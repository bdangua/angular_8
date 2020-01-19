//import Component
//Component used to convert the TS to HTML
import { Component } from "@angular/core";

//import loginService
//loginService containes authenticate()
//authenticate() receives the login_details from component
//authenticate() sends the Observable to Component
//to receive Observable we have subscribe()
import { loginService } from "../services/login.service";

//import HttpErrorResponse
//HttpErrorResponse used to handle the Error without crashing the application
import { HttpErrorResponse } from "@angular/common/http";

//use Component
@Component({
    selector:"login",
    templateUrl:"./login.component.html"
})
//export the class
export class loginComponent{
    //decalre the variable
    //this variable used to hold the server response
    private result:any;

    //create thje object to loginService
    //dependency injection
    constructor(private obj:loginService){}

    //when ever we click the button automatically login() function will be fired
    public login(login_details:any):any{
        this.obj.authenticate(login_details).subscribe((arg1)=>{
            this.result = arg1;
        },(arg1:HttpErrorResponse)=>{
            console.log(arg1);
        });
    };
}