//import HttpRequest
//HttpRequest used to receive the requests(Http Requests)
//import HttpHandler
//HttpHandler used to bypass the requests to server
//import HttpEvent
//HttpEvent used to handle the Exceptions raised by Interceptors
import { HttpRequest,
         HttpHandler,
         HttpEvent } from "@angular/common/http";
//import Injectable
//in general we will create interceptors by using custom services
import { Injectable } from "@angular/core";
//import Observable
//Observable used to handle the Exceptions, without crashing the applications
import { Observable } from "rxjs";
//use Injectable
@Injectable({
    providedIn:"root"
})
//export the class
export class authFilter{
    //intercept() is the predefined method
    //intercept() used to authenticate the Http Requests
    intercept(req:HttpRequest<any>,handler:HttpHandler)                                                   :Observable<HttpEvent<any>>{
        const req1 = req.clone({
            setHeaders:{
                title:"naresh"
            }
        });
        return handler.handle(req1);
    };
};