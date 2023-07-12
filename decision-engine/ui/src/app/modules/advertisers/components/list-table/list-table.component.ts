import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
	selector: '[list-table]',
	templateUrl: './list-table.component.html',
})
export class ListTableComponent implements OnInit {
	public tableItems: any[] = [
		{
			id: 1,
			title: 'Advertiser 1',
			description: 'Email workflow based off campaign from super bowl',
			questionTotal: 3,
			submissonTotal: 0,
			active: true,
		},
		{
			id: 3,
			title: 'Advertiser 2',
			description: 'Hosuing loan decisions',
			questionTotal: 3,
			submissonTotal: 0,
			active: true,
		},
		{
			id: 2,
			title: 'Advertiser 3',
			description: 'Email workflow based off campaign from super bowl',
			questionTotal: 3,
			submissonTotal: 0,
			active: true,
		},
		{
			id: 4,
			title: 'Advertiser 4',
			description: 'SMS loan decisions',
			questionTotal: 3,
			submissonTotal: 0,
			active: true,
		},
	]
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
		this.router.navigateByUrl(`/secure/workflow`)
	}
}
