import { Component, OnInit } from '@angular/core';

import { MenuService } from '../layout/services/menu.service';

@Component({
	selector: 'app-buyers',
	templateUrl: './buyers.component.html',
	styleUrls: ['./buyers.scss'],
})
export class BuyersComponent implements OnInit {
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
	ngOnInit(): void {}
}
