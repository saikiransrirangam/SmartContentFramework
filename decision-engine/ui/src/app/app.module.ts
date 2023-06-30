import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgFlowchartModule } from './shared/components/flowchart';
import { NgZorroAntdModule } from './shared/ng-zorro.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		NgFlowchartModule,
		BrowserAnimationsModule,
		NgZorroAntdModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
