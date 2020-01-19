import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'childthree',
  templateUrl: './childthree.component.html',
  styles: []
})
export class ChildthreeComponent implements OnInit {
  private var_six:string;
  constructor(private route:ActivatedRoute) {
    this.var_six = this.route.snapshot.params['v_o']+"...."+
                   this.route.snapshot.params['v_t']+"...."+
                   this.route.snapshot.params['v_th'];
   }

  ngOnInit() {
  }

}
