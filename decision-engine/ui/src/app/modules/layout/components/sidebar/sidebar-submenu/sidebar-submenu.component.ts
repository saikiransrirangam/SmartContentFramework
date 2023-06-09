import { Observable } from 'rxjs/internal/Observable';
import { SubMenuItem } from 'src/app/core/models/menu.model';

import { Component, Input } from '@angular/core';

import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-sidebar-submenu',
  templateUrl: './sidebar-submenu.component.html',
  styleUrls: ['./sidebar-submenu.component.scss'],
})
export class SidebarSubmenuComponent {
  @Input() public submenu = <SubMenuItem>{};
  public showSideBar$: Observable<boolean> = new Observable<boolean>();
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - constructor
   **-------------------------------------------------------------------------------------
   */
  constructor(private menuService: MenuService) {
    this.showSideBar$ = this.menuService.showSideBar$;
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - toggleMenu
   **-------------------------------------------------------------------------------------
   */
  public toggleMenu(menu: any) {
    this.menuService.toggleSubMenu(menu);
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - collapses
   **-------------------------------------------------------------------------------------
   */
  private collapse(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }
}
