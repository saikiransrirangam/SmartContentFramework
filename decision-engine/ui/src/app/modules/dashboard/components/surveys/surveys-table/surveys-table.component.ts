import { DataService } from 'src/app/shared/services/data.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: '[surveys-table]',
	templateUrl: './surveys-table.component.html',
})
export class SurveysTableComponent implements OnInit {
	public tableItems: any[] = [];
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME -  constructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(private readonly router: Router, private readonly dataService: DataService) {}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - ngOnInit
	 **-------------------------------------------------------------------------------------
	 */
	ngOnInit(): void {
		const workflows = this.dataService.get('workflows');
		this.tableItems = Object.keys(workflows).map(e => {
			const workflow = workflows[+e];
			return {
				id: e,
				...workflow.root.data,
			};
		});
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - navigate
	 **-------------------------------------------------------------------------------------
	 */
	public navigate(): void {
		this.router.navigateByUrl(`/secure/workflow`);
	}
}
