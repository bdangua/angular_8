import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pagethree',
  templateUrl: './pagethree.component.html',
  styles: []
})
export class PagethreeComponent implements OnInit {
  private var_three:string;
  constructor(private route:ActivatedRoute) {
    this.var_three = this.route.snapshot.params["p_id"]+"...."+
    this.route.snapshot.params["p_name"]+"...."+
    this.route.snapshot.params["p_cost"];
  }

  ngOnInit() {
  }

}
