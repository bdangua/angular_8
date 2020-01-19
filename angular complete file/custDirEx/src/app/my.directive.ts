//import Directive
//Directive used to assign the logical name to custom directive

//import Input
//Input used to pass the dynamic data to Custom Directive

//import ElementRef
//ElementRef used to manipulate the DOM

//import HostListener
//HostListener used to apply the mouse events
import { Directive,
         Input,
         ElementRef,
         HostListener } from "@angular/core";

//use Directive
@Directive({
    selector:"[myDir]"
})
//export the class
export class myDirective{
    //declare the dynamic properties
    //these properties accessing the dynamic data from "app.component.html" file
    @Input() var_one;
    @Input() var_two;

    //dependency injection
    //create the object to ElementRef with the help of constructor
    constructor(private _el:ElementRef){}

    //create the custom function for code reusability
    public myFun(arg1){
        console.log(this._el.nativeElement);
        this._el.nativeElement.style.backgroundColor=arg1;
    };

    //mouseenter event
    @HostListener("mouseenter") onmouseenter(){
        this.myFun(this.var_one);
    };

    //mouseleave event
    @HostListener("mouseleave") onmouseleave(){
        this.myFun(this.var_two);
    };
};