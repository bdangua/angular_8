import { Component, OnInit } from '@angular/core';
import { CustomersService } from "../services/customers.service";
import { CountriesService } from "../services/countries.service";
import errCallBack from "../error/err";
@Component({
  selector: 'series',
  templateUrl: './series.component.html',
  styles: []
})
export class SeriesComponent implements OnInit {
  private result_one:any;
  private result_two:any;
  constructor(private obj1:CustomersService,
              private obj2:CountriesService) { }
  ngOnInit() {
      this.obj1.getCustomers().subscribe((posRes)=>{
          this.result_one = posRes;
          /**************************************/
            this.obj2.getCountries().subscribe((posRes)=>{
                this.result_two = posRes;
            },errCallBack);
          /**************************************/
      },errCallBack);
  }
}
