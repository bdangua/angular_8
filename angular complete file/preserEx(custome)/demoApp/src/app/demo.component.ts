import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styles: []
})
export class DemoComponent implements OnInit {

  private wish:string;

  constructor() { 
    this.wish = "welcome to Angular 9";
  }

  ngOnInit() {
  }

}
