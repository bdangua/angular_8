import { Component } from '@angular/core';
import { CustomersService } from "../services/customers.service";
import { CountriesService } from "../services/countries.service";
import errCallBack from "../error/err";
import { Observable } from "rxjs-compat";
@Component({
  selector: 'parallel',
  templateUrl: './parallel.component.html',
  styles: []
})
export class ParallelComponent {
  private result_one:any;
  private result_two:any;
  constructor(private obj1:CustomersService,
              private obj2:CountriesService) { }
  ngOnInit() {
      Observable.forkJoin([
        this.obj1.getCustomers(),
        this.obj2.getCountries()
      ]).subscribe((posRes)=>{
        this.result_one = posRes[0];
        this.result_two = posRes[1];
      },errCallBack);
  }
}
