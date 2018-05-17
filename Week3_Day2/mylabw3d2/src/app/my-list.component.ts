import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-list',
  template: `
    <h1 [appMyvisibility]="true">Custom List</h1>
    <h2 [appMyvisibility]="false">Description</h2> <span>^Invisible header</span>
    <ul>
      <li *ngFor="let item of list" appUpper>{{item}}</li>
    </ul>
    <div appMycolor (colorChange)="onColorChange($event)">Click on it</div>
  `,
  styles: []
})
export class MyListComponent implements OnInit {
  @Input('data') list;
  @Output() colorChange = new EventEmitter();
  constructor() 
  {
    
  }

  ngOnInit() {
    
  }
  onColorChange(color: string): void {
    this.colorChange.emit(color); 
  }
}
