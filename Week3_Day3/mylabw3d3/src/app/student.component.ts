import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'student-about',
  template: `
  <ul>
    <li *ngFor="let item of list"><a routerLink="profile/{{item.id}}">{{item.name}}</a></li>
  </ul>
  <router-outlet></router-outlet>
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
