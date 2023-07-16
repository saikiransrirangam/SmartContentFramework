import { BUYER_GROUPS } from 'src/app/shared/database/buyer-groups';

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'page-advertisers-list',
	templateUrl: './list.component.html',
})
export class ListPage implements OnInit {
	public data = BUYER_GROUPS
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
