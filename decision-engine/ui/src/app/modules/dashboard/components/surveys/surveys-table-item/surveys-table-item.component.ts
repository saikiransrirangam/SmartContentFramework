import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Survey } from '../../../models/survey';

@Component({
	selector: '[surveys-table-item]',
	templateUrl: './surveys-table-item.component.html',
})
export class SurveysTableItemComponent implements OnInit {
	@Input() dataRow = <Survey>{};
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - constructor
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
		this.router.navigateByUrl('/secure/workflow');
	}
}
