import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'student-about',
  template: `
  <ul>
    <li *ngFor="let item of list"><a href="/profile/{{item.id}}">{{item.name}}</a></li>
  </ul>
  `,
  styles: []
})
export class StudentComponent implements OnInit {
  dbS:DbService;
  list: any[];
  constructor() { 
    
  }

  ngOnInit() {
    this.dbS = new DbService();
    this.list = this.dbS.getData();
    
  }

}
