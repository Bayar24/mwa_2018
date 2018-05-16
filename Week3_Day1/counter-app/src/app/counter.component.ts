import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <button (click)="decrease()">-</button>
  {{counterValue}}
  <button (click)="increase()">+</button>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  private counterValue =0;
  
  @Input('value') counter :number;
  @Output() counterChange = new EventEmitter();
  constructor() { 
    
  }
  increase()
  { 
    this.counterValue++; 
    this.Counter = this.counterValue;
    this.counterChange.emit(this.counterValue); 
    return false;
  }
  decrease()
  { 
    this.counterValue--;
    this.Counter = this.counterValue;
    this.counterChange.emit(this.counterValue); 
    return false;
  }
  ngOnInit() {
    this.counterValue = this.counter?this.counter:0;
  }
  set Counter(value: number){
    this.counter = value;
  }

}
