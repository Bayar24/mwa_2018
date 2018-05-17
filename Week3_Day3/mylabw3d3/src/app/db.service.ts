import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  students: any[] = [{id:'1', name:'Asaad Saad', stuID:'12345', email:'aa@aa.mn'}]; 
  constructor() { }
  getData(): any[]{
      return this.students;
  }
  getStudentInfo(id: string): object {
		for(let student of this.students) {
			if(id === student.id) {
				return student;
			} else {
				return null;
			}
		}
  }
}
