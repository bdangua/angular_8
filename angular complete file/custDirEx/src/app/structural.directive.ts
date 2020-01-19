//import following classes
//@Directive  @TemplateRef  @ViewContainerRef   @Input
import { Directive,
         TemplateRef,
         ViewContainerRef,
         Input} from "@angular/core";

//use Directive
@Directive({
    selector:"[hello]"
})
//export the class
export class structuralDirective{
    //create the objects to TemplateRef and ViewContainerRef with the help of constructor
    //dependency injection
    constructor(private _templateRef:TemplateRef<any>,
                private _viewContainerRef:ViewContainerRef){}
    //where _templateRef & _viewContainerRef are the references

    //create the main function in structural directive
    //set keyword used to recognize the main function
    //the name of main function is the "custom name"
    //argument for the main function is the boolean.
    @Input() set hello(arg1:boolean){
       if(arg1){
           //add the DOM Element to Browser Memory with the help of createEmbeddedView() function
           this._viewContainerRef.createEmbeddedView(this._templateRef);
       }else{
           //removing the DOM Element from Browser Memory with the clear function.
           this._viewContainerRef.clear();
       }
    }
};






