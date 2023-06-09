import { AngularSvgIconModule } from 'angular-svg-icon';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

@NgModule({
	declarations: [AuthComponent, SignInComponent],
	imports: [
		CommonModule,
		AuthRoutingModule,
		HttpClientModule,
		AngularSvgIconModule.forRoot(),
		FormsModule,
		ReactiveFormsModule,
	],
})
export class AuthModule {}
