import { AngularSvgIconModule } from 'angular-svg-icon'
import { NgFlowchartModule } from 'src/app/shared/components/flowchart'
import { NgZorroAntdModule } from 'src/app/shared/ng-zorro.module'
import { SharedModule } from 'src/app/shared/shared.module'

import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatMenuModule } from '@angular/material/menu'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatTooltipModule } from '@angular/material/tooltip'

import { AdvertisersRoutingModule } from './advertisers-routing.module'
import { AdvertisersComponent } from './advertisers.component'
import { components, secondaryComponents } from './components'
import { pages } from './pages'

@NgModule({
	declarations: [AdvertisersComponent, ...components, ...secondaryComponents, ...pages],
	imports: [
		NgFlowchartModule,
		CommonModule,
		AdvertisersRoutingModule,
		SharedModule,
		HttpClientModule,
		AngularSvgIconModule.forRoot(),
		MatSlideToggleModule,
		FormsModule,
		ReactiveFormsModule,
		NgFlowchartModule,
		MatIconModule,
		MatButtonModule,
		MatMenuModule,
		MatTooltipModule,
		FormsModule,
		MatSnackBarModule,
		MatDialogModule,
		NgZorroAntdModule,
		MatInputModule,
		MatFormFieldModule,
	],
})
export class AdvertisersModule {}
