import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public default = 'light';
  public themeChanged: BehaviorSubject<string> = new BehaviorSubject(
    this.theme,
  );
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - constructor
   **-------------------------------------------------------------------------------------
   */
  constructor() {}
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME -get theme
   **-------------------------------------------------------------------------------------
   */

  public get theme(): string {
    return localStorage.getItem('theme') ?? this.default;
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - set theme
   **-------------------------------------------------------------------------------------
   */
  public set theme(value: string) {
    localStorage.setItem('theme', value);
    this.themeChanged.next(value);
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - isDark
   **-------------------------------------------------------------------------------------
   */
  public get isDark(): boolean {
    return this.theme == 'dark';
  }
}
