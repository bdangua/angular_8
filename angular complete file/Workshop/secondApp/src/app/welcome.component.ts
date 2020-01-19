import { Component } from "@angular/core";

@Component({
    selector:"welcome",
    templateUrl:"./welcome.component.html"
})
export class welcomeComponent{
    private wish:string;
    constructor(){
        this.wish = "welcome to workshop";
    }
};