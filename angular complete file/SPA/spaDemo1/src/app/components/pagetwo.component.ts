import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pagetwo',
  templateUrl: './pagetwo.component.html',
  styles: []
})
export class PagetwoComponent implements OnInit {
  private var_two:string;
  constructor() { 
    this.var_two = "I am from page two !!!";
  }

  ngOnInit() {
  }

}
