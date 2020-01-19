import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import GITHUB from "../urls/urls";
@Injectable({
    providedIn:"root"
})
export class gitHubService{
    constructor(private obj:HttpClient){}
    public getData():Observable<any>{
        return this.obj.get(GITHUB);
    };
}