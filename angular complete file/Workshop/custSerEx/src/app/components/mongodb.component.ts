import { Component } from "@angular/core";
import { dbService } from "../services/db.service";
@Component({
    selector:"mongodb",
    templateUrl:"./mongodb.component.html"
})
export class mongodbComponent{
    private result:string;
    constructor(private obj:dbService){}
    ngOnInit(){
        this.result = this.obj.mongodb();
    }
}