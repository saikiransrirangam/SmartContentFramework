import { Component, OnInit } from '@angular/core'

import { MenuService } from '../layout/services/menu.service'

@Component({
	selector: 'app-advertisers',
	templateUrl: './advertisers.component.html',
	styleUrls: ['./advertisers.scss'],
})
export class AdvertisersComponent implements OnInit {
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
