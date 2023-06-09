import { Observable } from 'rxjs';

import { Component } from '@angular/core';

import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss'],
})
export class NavbarMobileComponent {
  public showMobileMenu$: Observable<boolean> = new Observable<boolean>();
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - constructor
   **-------------------------------------------------------------------------------------
   */
  constructor(private menuService: MenuService) {
    this.showMobileMenu$ = this.menuService.showMobileMenu$;
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - toggleMobileMenu
   **-------------------------------------------------------------------------------------
   */

  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = false;
  }
}
