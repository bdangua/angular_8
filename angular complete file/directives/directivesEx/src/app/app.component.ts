import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // login_details:any = {uname:"",upwd:""};
  // login(){
  //   if(this.login_details.uname === "admin" && 
  //       this.login_details.upwd === "admin"){
  //         alert("Login Success...!");
  //   }else{
  //     alert("Login Fail...!");
  //   }
  // }


  myFun(arg1,arg2){
    if(arg1 === "admin" && arg2 === "admin"){
        alert("Login Success...!");
    }else{
      alert("Login Fail....!");
    }
  }

  count:number = 0;


}
