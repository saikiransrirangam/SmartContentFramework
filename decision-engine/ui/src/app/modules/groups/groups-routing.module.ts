import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { GroupsComponent } from './groups.component'
import { FormPage, ListPage } from './pages'

const routes: Routes = [
	{
		path: '',
		component: GroupsComponent,
		children: [
			{ path: '', component: ListPage },
			{ path: 'form/:id', component: FormPage },
			{ path: 'form', component: FormPage },
		],
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class GroupsRoutingModule {}
