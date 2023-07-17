import { Component, OnInit } from '@angular/core';

import { ThemeService } from './core/services/theme.service';
import { DataService } from './shared/services/data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'Athena UI';
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - constructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(public themeService: ThemeService, private readonly dataService: DataService) {}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - ngOnInit
	 **-------------------------------------------------------------------------------------
	 */
	ngOnInit() {
		this.dataService.seed();
	}
}
