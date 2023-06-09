import { SubMenuItem } from 'src/app/core/models/menu.model';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'div[navbar-submenu]',
  templateUrl: './navbar-submenu.component.html',
  styleUrls: ['./navbar-submenu.component.scss'],
})
export class NavbarSubmenuComponent {
  @Input() public submenu = <SubMenuItem[]>{};
}
