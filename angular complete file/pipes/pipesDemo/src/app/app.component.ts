import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private var_one:string="nareshit";
    private var_two:string = "ANGULAR9";
    private var_three:string="naresh it";
    private var_four:Date = new Date();
    private var_five:any = {p_id:111};
    private var_six:number = 100;
    private var_seven:number = 100.12345;
    private var_eigth:number[] = [10,20,30,40,50];
    private var_nine:number = 0.9;
    
    private var_ten:any;
    constructor(){
      /*****************************************************/
      this.var_ten = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve("Hello");
        },5000);
      });
      /*****************************************************/
    };


    private wish:string = "hello";

    private var1:string = "Angular9";
    private var2:string = "to";
    private var3:string = "welcome";


};
