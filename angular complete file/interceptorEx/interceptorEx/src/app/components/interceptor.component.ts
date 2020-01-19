import { Component, OnInit } from '@angular/core';
import { InterceptorService } from '../services/interceptor.service';
import errCallBack from '../error/errCallBack';
@Component({
  selector: 'interceptor',
  templateUrl: './interceptor.component.html',
  styles: []
})
export class InterceptorComponent implements OnInit {
  private result:any;
  constructor(private obj:InterceptorService) { }
  ngOnInit() {
     this.obj.authenticate().subscribe((posRes)=>{
        this.result = posRes;
     },errCallBack);
  }
}
