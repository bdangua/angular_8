import { Component } from "@angular/core";
import { uppercaseService } from "../services/uppercase.service";
import errCallBack from "../error/error"; 
@Component({
    selector:"uppercase",
    templateUrl:"./uppercase.component.html"
})
export class uppercaseComponent{
    private result:any;
    constructor(private obj:uppercaseService){}
    public clickMe(data:any):any{
        this.obj.convertToUppercase(data)
                .subscribe((posRes)=>{
            this.result = posRes;
        },errCallBack);
    };
};