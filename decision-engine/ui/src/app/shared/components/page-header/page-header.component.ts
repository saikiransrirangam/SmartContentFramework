import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-page-header',
	templateUrl: './page-header.component.html',
})
export class PageHeaderComponent implements OnInit {
	@Input('pageTitle') pageTitle: string = '';
	@Input('breadcrumbs') breadcrumbs: string = '';
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - constructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor() {}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - ngOnInit
	 **-------------------------------------------------------------------------------------
	 */
	ngOnInit(): void {}
}
