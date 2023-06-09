import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/core/models/menu.model';
import { ThemeService } from 'src/app/core/services/theme.service';

import { Component } from '@angular/core';

import packageJson from '../../../../../../package.json';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public showSideBar$: Observable<boolean> = new Observable<boolean>();
  public pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();
  public appJson: any = packageJson;
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - constructor
   **-------------------------------------------------------------------------------------
   */
  constructor(
    public themeService: ThemeService,
    private menuService: MenuService,
  ) {
    this.showSideBar$ = this.menuService.showSideBar$;
    this.pagesMenu$ = this.menuService.pagesMenu$;
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - toggleSidebar
   **-------------------------------------------------------------------------------------
   */
  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - toggleTheme
   **-------------------------------------------------------------------------------------
   */
  toggleTheme() {
    this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
  }
}
