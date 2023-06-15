import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkflowPageComponent } from './pages/workflow/workflow.component';
import { WorkflowComponent } from './workflow.component';

const routes: Routes = [
  {
    path: '',
    component: WorkflowComponent,
    children: [
      { path: '', redirectTo: 'workflow', pathMatch: 'full' },
      { path: 'workflow', component: WorkflowPageComponent },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkflowRoutingModule {}
