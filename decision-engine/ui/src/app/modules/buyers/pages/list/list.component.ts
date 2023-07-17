import { DataService } from 'src/app/shared/services/data.service';

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'page-buyers-list',
	templateUrl: './list.component.html',
})
export class ListPage implements OnInit {
	public data = this.dataService.get('buyers');
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - constructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(private readonly dataService: DataService) {}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - ngOnInit
	 **-------------------------------------------------------------------------------------
	 */
	ngOnInit(): void {}
}
