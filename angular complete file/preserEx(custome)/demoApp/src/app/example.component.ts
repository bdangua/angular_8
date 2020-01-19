import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example',
  templateUrl: './example.component.html',
  styles: []
})
export class ExampleComponent implements OnInit {
  private var_one:string;
  constructor() { 
    this.var_one = "we know components in angular";
  }

  ngOnInit() {
  }

}
