import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  outputs: ['counterChange'],
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
  @Input ('Counter') counterValue: number = 0;
  set Counter(value:number){
    this.counterValue = value;
  }  
  
  counterChange: EventEmitter<number>;

  constructor() { 
    this.counterChange = new EventEmitter();
  }

  ngOnInit() {    
    this.counterChange.emit(this.counterValue);
  }

  clickMinus(){
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
  }

  clickPlus(){
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }
}
