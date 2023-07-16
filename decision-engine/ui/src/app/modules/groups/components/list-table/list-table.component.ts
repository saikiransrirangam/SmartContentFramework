import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
	selector: '[list-table]',
	templateUrl: './list-table.component.html',
})
export class ListTableComponent implements OnInit {
	@Input('tableItems') tableItems: any
	@Input('term') term: string
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
		this.router.navigateByUrl(`/secure/groups/form`)
	}
}
