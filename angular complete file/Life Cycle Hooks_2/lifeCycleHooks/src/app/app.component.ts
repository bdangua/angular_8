import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(){
      console.log("in constructor");
    };
    ngOnChanges(){
      console.log("in ngOnChanges");
    };
    ngOnInit(){
      console.log("in ngOnInit");
    };
    ngAfterContentInit(){
      console.log("in ngAfterContentInit");
    };
    ngAfterContentChecked(){
      console.log("in ngAfterContentChecked");
    };
    ngAfterViewInit(){
      console.log("in ngAfterViewInit");
    };
    ngAfterViewChecked(){
      console.log("in ngAfterViewChecked");
    };
    ngOnDestroy(){
      console.log("in ngOnDestroy");
    };
    ngDoCheck(){
      console.log("in ngDoCheck");
    };
    private data:number = 100;
    public increment():any{
        this.data+=10;
    };
    public decrement():any{
        this.data-=100;
    };
};

/*
  Execution Flow
  --------------
  => constructor

  => ngOnInit

  => ngDoCheck

  => ngAfterContentInit

  => ngAfterContentChecked

  => ngAfterViewInit

  => ngAfterViewChecked

  ----------------------------------------------

  => ngDoCheck

  => ngAfterContentChecked

  => ngAfterViewChecked
*/

/*
  if model data changed
  ---------------------

  => ngDoCheck

  => ngAfterContentChecked

  => ngAfterViewChecked
*/
