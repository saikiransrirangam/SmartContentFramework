import { SubMenuItem } from 'src/app/core/models/menu.model';
import { MenuService } from 'src/app/modules/layout/services/menu.service';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-mobile-submenu',
  templateUrl: './navbar-mobile-submenu.component.html',
  styleUrls: ['./navbar-mobile-submenu.component.scss'],
})
export class NavbarMobileSubmenuComponent {
  @Input() public submenu = <SubMenuItem>{};
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - constructor
   **-------------------------------------------------------------------------------------
   */
  constructor(private menuService: MenuService) {}

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
   ** METHOD NAME - collapse
   **-------------------------------------------------------------------------------------
   */

  private collapse(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - closeMobileMenu
   **-------------------------------------------------------------------------------------
   */

  public closeMobileMenu() {
    this.menuService.showMobileMenu = false;
  }
}
