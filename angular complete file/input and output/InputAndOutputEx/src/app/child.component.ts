import { Component,Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector:"child",
    templateUrl:"./child.component.html"
})
export class childComponent{
    @Input() p_id;
    @Input() p_name;
    @Input() p_cost;
    //EventEmitter is the helper class
    //EventEmitter class helps to @Output() Decorator, to share the data from Child Component to Parent Component.
    @Output() send:EventEmitter<any> = new EventEmitter();
    clickMe(){
        this.send.emit(this.p_id+"...."+this.p_name+"...."+this.p_cost);
    };
};