import { BehaviorSubject, Subscription } from 'rxjs';
import { Menu } from 'src/app/core/constants/menu';
import { MenuItem, SubMenuItem } from 'src/app/core/models/menu.model';

import { Injectable, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MenuService implements OnDestroy {
  public _pagesMenu$ = new BehaviorSubject<MenuItem[]>([]);
  private subscription = new Subscription();
  private _showSidebar$ = new BehaviorSubject<boolean>(true);
  private _showMobileMenu$ = new BehaviorSubject<boolean>(false);
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - constructor
   **-------------------------------------------------------------------------------------
   */
  constructor(private router: Router) {
    /** Set dynamic menu */
    this._pagesMenu$.next(Menu.pages);

    let sub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        /** Expand menu base on active route */
        this._pagesMenu$.forEach((menuItem) => {
          menuItem.forEach((menu) => {
            let activeGroup = false;
            menu.items.forEach((subMenu) => {
              const active = this.isActive(subMenu.route);
              subMenu.expanded = active;
              subMenu.active = active;
              if (active) activeGroup = true;
              if (subMenu.children) {
                this.expand(subMenu.children);
              }
            });
            menu.active = activeGroup;
          });
        });
      }
    });

    this.subscription.add(sub);
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - showSideBar$
   **-------------------------------------------------------------------------------------
   */
  get showSideBar$() {
    return this._showSidebar$.asObservable();
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - showMobileMenu$
   **-------------------------------------------------------------------------------------
   */
  get showMobileMenu$() {
    return this._showMobileMenu$.asObservable();
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - pagesMenu$
   **-------------------------------------------------------------------------------------
   */
  get pagesMenu$() {
    return this._pagesMenu$.asObservable();
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - showSidebar
   **-------------------------------------------------------------------------------------
   */
  set showSideBar(value: boolean) {
    this._showSidebar$.next(value);
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - showMobileMenu
   **-------------------------------------------------------------------------------------
   */
  set showMobileMenu(value: boolean) {
    this._showMobileMenu$.next(value);
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - toggleSidebar
   **-------------------------------------------------------------------------------------
   */
  public toggleSidebar() {
    this._showSidebar$.next(!this._showSidebar$.value);
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - toggleMenu
   **-------------------------------------------------------------------------------------
   */
  public toggleMenu(menu: any) {
    this.showSideBar = true;
    menu.expanded = !menu.expanded;
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - toggleSubMenu
   **-------------------------------------------------------------------------------------
   */
  public toggleSubMenu(submenu: SubMenuItem) {
    submenu.expanded = !submenu.expanded;
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - expand
   **-------------------------------------------------------------------------------------
   */
  private expand(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = this.isActive(item.route);
      if (item.children) this.expand(item.children);
    });
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - isActive
   **-------------------------------------------------------------------------------------
   */
  private isActive(instruction: any): boolean {
    return this.router.isActive(this.router.createUrlTree([instruction]), {
      paths: 'subset',
      queryParams: 'subset',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - ngOnDestroy
   **-------------------------------------------------------------------------------------
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
