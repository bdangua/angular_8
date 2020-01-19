import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    profileData:FormGroup;
    constructor(){
        this.profileData = new FormGroup({
            fname : new FormControl("Naresh",[Validators.required,
                                              Validators.minLength(3),
                                              Validators.maxLength(6)]),
            lname : new FormControl(),
            email : new FormControl(),
            contact : new FormControl(),
            addr    : new FormGroup({
              address : new FormControl(),
              city    : new FormControl()
            }),
            gender : new FormControl(),
            country : new FormControl()
        });
    }
    public register():any{
      console.log( this.profileData.value );
    };
}
