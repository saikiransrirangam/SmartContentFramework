import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LayoutComponent } from './layout.component'

const routes: Routes = [
	{
		path: 'dashboard',
		component: LayoutComponent,
		loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
	},
	{
		path: 'workflow',
		component: LayoutComponent,
		loadChildren: () => import('../workflow/workflow.module').then(m => m.WorkflowModule),
	},
	{
		path: 'advertisers',
		component: LayoutComponent,
		loadChildren: () =>
			import('../advertisers/advertisers.module').then(m => m.AdvertisersModule),
	},
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: '**', redirectTo: 'error/404' },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LayoutRoutingModule {}
