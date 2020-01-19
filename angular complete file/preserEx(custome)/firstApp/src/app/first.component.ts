//Component is predefined class available in @angular/core package
//Component class used to convert the TypeScript Standards to HTML Standards
//we will use Component class by using "@"
//Using the predefined class by using "@" symbol called as Decorator.
//Decorators are used to define th METADATA
//Data About Particular Component Called as METADATA
//Component Class constructor takes the JSON Object as Argument.
//"selector" is the json key used to define the custom HTML Element.
//we will call custom HTML Element in "index.html" file.
//"templateUrl" is the json key used to define the external template to Component.
//in general we will use external templates to display components data.
//export is the keyword in TypeScript
//export keyword used to export the components,services,directives,pipes,....
//anyone can import the exported members in angular applications
import { Component } from "@angular/core";
@Component({
    selector:"first",
    templateUrl:"./first.component.html"
})
export class firstComponent{
    private mean:string;
    private mern:string;
    private mevn:string;
    constructor(){
        this.mean = "MEAN Stack...!";
        this.mern = "MERN Stack...!";
        this.mevn = "MEVN Stack...!";
    };
    public getMeanData():string{
        return this.mean;
    };
    public getMernData():string{
        return this.mern;
    };
    public getMevnData():string{
        return this.mevn;
    };
};