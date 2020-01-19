import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn:"root"
})
export class loginService{
    constructor(private http:HttpClient){}
    public authenticate(login_details:any):Observable<any>{
        return this.http.post("http://localhost:8080/login",login_details);
    };
};