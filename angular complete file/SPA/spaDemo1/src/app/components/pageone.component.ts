import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pageone',
  templateUrl: './pageone.component.html',
  styles: []
})
export class PageoneComponent implements OnInit {
  
    private p_id:number = 444;
    private p_name:string = "p_four";
    private p_cost:number = 40000;
 
 
  private var_one:string;
  constructor(private route:ActivatedRoute) { 
    this.var_one = this.route.snapshot.params['p_id']+"...."+
                   this.route.snapshot.params['p_name']+"....."+
                   this.route.snapshot.params['p_cost'];
  }

  ngOnInit() {
  }

}
