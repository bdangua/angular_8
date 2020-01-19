import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  my_number:number = 0;

  login(arg1,arg2){
    if(arg1 === "admin" && arg2 === "admin")
        alert("Login Success");
    else
      alert("Login Fail");
  };


}
