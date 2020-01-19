import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // login_details:any = {'uname':'','upwd':''};
    // login(){
    //   if(this.login_details.uname == "admin" && 
    //      this.login_details.upwd == "admin"){
    //        alert("Login Success");
    //      }else{
    //        alert("Login Fail");
    //      }
    // }

    todayData = new Date();
    obj:any = {'key1':'hello'};


}
