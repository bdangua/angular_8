import { Component } from "@angular/core";
import { gitHubService } from "../services/github.service";
import errCallBack from "../error/err";
@Component({
    selector:"github",
    templateUrl:"./github.component.html"
}) 
export class gitHubComponent{
    private result:any;
    constructor(private obj:gitHubService){}
    ngOnInit(){
        this.obj.getData().subscribe((posRes)=>{
            this.result = posRes;
        },errCallBack);
    };
};