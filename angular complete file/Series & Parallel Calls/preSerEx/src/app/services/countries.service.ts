import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import URLS from '../urls/urls';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private obj:HttpClient) { }
  public getCountries():Observable<any>{
     return this.obj.get(URLS.COUNTRIES);
  };
}
