import {
	Component,
	OnInit
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { DbService } from './db.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: []
})
export class ProfileComponent implements OnInit {
	student: object;
	constructor(private dataService: DbService, private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			this.student = this.dataService.getStudentInfo(params.id);
		});
	}
}
