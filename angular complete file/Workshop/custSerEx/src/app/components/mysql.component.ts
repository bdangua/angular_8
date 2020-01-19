import { Component } from "@angular/core";
import { dbService } from '../services/db.service';

@Component({
    selector:"mysql",
    templateUrl:"./mysql.component.html"
})
export class mysqlComponent{
    private result:string;
    constructor(private obj:dbService){}
    ngOnInit(){
        this.result = this.obj.mySQLDB();
    }
}