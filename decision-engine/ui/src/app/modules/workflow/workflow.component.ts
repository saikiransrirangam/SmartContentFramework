import { Component, OnInit } from '@angular/core';

import { MenuService } from '../layout/services/menu.service';

@Component({
	selector: 'app-workflow',
	templateUrl: './workflow.component.html',
	styleUrls: ['./workflow.scss'],
})
export class WorkflowComponent implements OnInit {
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - constructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(private readonly menuService: MenuService) {}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - ngOnInit
	 **-------------------------------------------------------------------------------------
	 */
	ngOnInit(): void {
		setTimeout(() => {
			this.menuService.toggleSidebar();
		}, 500);
	}
}
