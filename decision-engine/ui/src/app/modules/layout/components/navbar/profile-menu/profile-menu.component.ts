import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})
export class ProfileMenuComponent {
  public isMenuOpen = false;
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - toggleMenu
   **-------------------------------------------------------------------------------------
   */
  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
