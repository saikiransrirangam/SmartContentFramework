import { Observable } from 'rxjs';
import { MenuItem, SubMenuItem } from 'src/app/core/models/menu.model';

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MenuService } from '../../../services/menu.service';

@Component({
	selector: 'app-sidebar-menu',
	templateUrl: './sidebar-menu.component.html',
	styleUrls: ['./sidebar-menu.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuComponent {
	public pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>()
	public showSideBar$: Observable<boolean> = new Observable<boolean>()
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - constructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(private menuService: MenuService) {
		this.showSideBar$ = this.menuService.showSideBar$
		this.pagesMenu$ = this.menuService.pagesMenu$
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - toggleMenu
	 **-------------------------------------------------------------------------------------
	 */
	public toggleMenu(subMenu: SubMenuItem) {
		// this.menuService.toggleMenu(subMenu);
	}
}
