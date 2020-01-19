import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import BaseURL from '../urls/urls';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  constructor(private obj:HttpClient) { }
  public authenticate():Observable<any>{
    return this.obj.get(BaseURL+"/test");
  };
};
