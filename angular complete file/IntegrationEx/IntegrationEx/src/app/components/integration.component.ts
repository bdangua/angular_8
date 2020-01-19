import { Component, OnInit } from '@angular/core';
import { DotnetService } from '../services/dotnet.service';
import { JavaService } from '../services/java.service';
import { Observable } from 'rxjs-compat';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'integration',
  templateUrl: './integration.component.html',
  styles: []
})
export class IntegrationComponent implements OnInit {
  private dotnet:any;
  private java:any;
  constructor(private obj1:DotnetService,
              private obj2:JavaService) { }

  ngOnInit() {
    Observable.forkJoin([
      this.obj1.getWebAPIData(),
      this.obj2.getJavaData()
    ]).subscribe((posRes)=>{
      this.dotnet = posRes[0];
      this.java = posRes[1];
    },(errRes:HttpErrorResponse)=>{
      if(errRes.error instanceof Error)
        console.log("client side error");
      else
        console.log("server side error");
    });
  }
}
