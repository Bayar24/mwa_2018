import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-list',
  template: `
    <h1 [appMyvisibility]="true">Custom List</h1>
    <h2 [appMyvisibility]="false">Description</h2>
    <ul>
      <li *ngFor="let item of counter" appUpper>{{item}}</li>
    </ul>
  `,
  styles: []
})
export class MyListComponent implements OnInit {
  @Input('data') counter;
  constructor() 
  {
    
  }

  ngOnInit() {
  }

}
