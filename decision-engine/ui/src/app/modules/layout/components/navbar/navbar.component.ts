import { Component } from '@angular/core';

import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - constructor
   **-------------------------------------------------------------------------------------
   */
  constructor(private menuService: MenuService) {}

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - toggleMobileMenu
   **-------------------------------------------------------------------------------------
   */
  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = true;
  }
}
