import { Component, ViewChild, ViewChildren, QueryList } from "@angular/core";
import { secondComponent } from './second.component';
@Component({
    selector:"first",
    templateUrl:"./first.component.html"
})
export class firstComponent{
    /*
    @ViewChild(secondComponent,{static:true})
    private obj:secondComponent;

    clickMe(){
        this.obj.var_one = "Welcome_1";
        this.obj.var_two = "Welcome_2";
    };*/

    //QueryList is the predefined helper class
    //QueryList used to iterate all the target occurances
    //QueryList will prepare the map object based on taget occurances
    @ViewChildren(secondComponent)
    private obj:QueryList<secondComponent> = new QueryList();


    //convert map object to equalent Array
    //to convert one data structure to another data structure we will use following life cycle method
    //ngAfterViewInit()
    private my_array:Array<any> = [];
    ngAfterViewInit(){
        this.my_array = this.obj.toArray();
    }

    //implement the click listener
    public clickMe(){
        this.my_array.forEach((element,index)=>{
            element.var_one = "Welcome_1";
            element.var_two = "Welcome_2";
        });
    };

};