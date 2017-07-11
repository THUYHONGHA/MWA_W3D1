import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter Page';
  counter: number=0;
  ComponentCounterValue:number = 5;
  
  changeValue(value:number){
    this.counter=value;
    this.ComponentCounterValue=value;
  }
}
