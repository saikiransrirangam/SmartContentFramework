import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AdvertisersComponent } from './advertisers.component'
import { ListPage } from './pages'

const routes: Routes = [
	{
		path: '',
		component: AdvertisersComponent,
		children: [{ path: '', component: ListPage }],
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdvertisersRoutingModule {}
