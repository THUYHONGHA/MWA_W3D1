import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
        Counter Component
        <button (click)="clickMinus()">-</button>
        {{counterValue}}
        <button (click)="clickPlus()">+</button>
    </p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  counterValue: number = 0;
  
  constructor() { }

  ngOnInit() {    
  }

  clickMinus(){
    this.counterValue--;
  }

  clickPlus(){
    this.counterValue++;
  }
}
