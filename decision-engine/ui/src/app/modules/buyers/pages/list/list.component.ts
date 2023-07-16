import { BUYERS } from 'src/app/shared/database/buyers';

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'page-buyers-list',
	templateUrl: './list.component.html',
})
export class ListPage implements OnInit {
	public data = BUYERS
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
