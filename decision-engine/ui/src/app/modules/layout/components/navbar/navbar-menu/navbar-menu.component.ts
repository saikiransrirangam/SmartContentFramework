import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/core/models/menu.model';

import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss'],
})
export class NavbarMenuComponent implements OnInit {
  public pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();

  private showMenuClass = [
    'scale-100',
    'animate-fade-in-up',
    'opacity-100',
    'pointer-events-auto',
  ];
  private hideMenuClass = [
    'scale-95',
    'animate-fade-out-down',
    'opacity-0',
    'pointer-events-none',
  ];
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - constructor
   **-------------------------------------------------------------------------------------
   */
  constructor(private menuService: MenuService) {
    this.pagesMenu$ = this.menuService.pagesMenu$;
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - ngOnInit
   **-------------------------------------------------------------------------------------
   */
  ngOnInit(): void {}

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - toggleMenu
   **-------------------------------------------------------------------------------------
   */
  public toggleMenu(menu: MenuItem): void {
    menu.selected = !menu.selected;
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - mouseEnter
   **-------------------------------------------------------------------------------------
   */
  public mouseEnter(event: any): void {
    let element = event.target.querySelector('app-navbar-submenu').children[0];
    if (element) {
      this.hideMenuClass.forEach((c) => element.classList.remove(c));
      this.showMenuClass.forEach((c) => element.classList.add(c));
    }
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - mouseLeave
   **-------------------------------------------------------------------------------------
   */
  public mouseLeave(event: any): void {
    let element = event.target.querySelector('app-navbar-submenu').children[0];
    if (element) {
      this.showMenuClass.forEach((c) => element.classList.remove(c));
      this.hideMenuClass.forEach((c) => element.classList.add(c));
    }
  }
}
