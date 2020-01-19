import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JavaService {
  constructor(private obj:HttpClient) { }
  public getJavaData():Observable<any>{
    return this.obj.get("http://localhost:9090/EmployeeDetailRestResource/api/empService/getAll");
  };
}
