import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Survey } from '../../../models/survey';

@Component({
	selector: '[surveys-table]',
	templateUrl: './surveys-table.component.html',
})
export class SurveysTableComponent implements OnInit {
	public tableItems: Survey[] = [
		{
			id: 1,
			title: 'Email touchpoint',
			description: 'Email workflow based off campaign from super bowl',
			questionTotal: 3,
			submissonTotal: 0,
			active: true,
		},
		{
			id: 3,
			title: 'Housing Market',
			description: 'Hosuing loan decisions',
			questionTotal: 3,
			submissonTotal: 0,
			active: true,
		},
		{
			id: 2,
			title: 'SMS touchpoint',
			description: 'Email workflow based off campaign from super bowl',
			questionTotal: 3,
			submissonTotal: 0,
			active: true,
		},
		{
			id: 4,
			title: 'Car Loans',
			description: 'SMS loan decisions',
			questionTotal: 3,
			submissonTotal: 0,
			active: true,
		},
	];
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME -  constructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(private readonly router: Router) {}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - ngOnInit
	 **-------------------------------------------------------------------------------------
	 */
	ngOnInit(): void {}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - navigate
	 **-------------------------------------------------------------------------------------
	 */
	public navigate(): void {
		this.router.navigateByUrl(`/secure/workflow`);
	}
}
