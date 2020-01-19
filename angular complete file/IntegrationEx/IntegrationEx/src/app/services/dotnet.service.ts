import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DotnetService {
  constructor(private obj:HttpClient) { }
  public getWebAPIData():Observable<any>{
    return this.obj.get("http://localhost:14741/api/Home");
  };
};
