//import HttpErrorResponse
//HttpErrorResponse used to handle the Exceptions thrown by server
import { HttpErrorResponse } from "@angular/common/http";
//create the callback function (arrow function)
//Error is the predefined class in angular
//Error class used to identify the "4XX" Errors
const errCallBack = (err:HttpErrorResponse)=>{
    if(err.error instanceof Error)
        console.log("client side error");
    else
        console.log("server side error");
};
export default errCallBack;

