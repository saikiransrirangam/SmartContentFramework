import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { components } from './components';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { pipes } from './pipes';

@NgModule({
	declarations: [ClickOutsideDirective, ...components, ...pipes],
	imports: [CommonModule],
	exports: [ClickOutsideDirective, ...components, ...pipes],
})
export class SharedModule {}
