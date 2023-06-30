import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgFlowchartModule } from 'src/app/shared/components/flowchart';
import { NgZorroAntdModule } from 'src/app/shared/ng-zorro.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { components, secondaryComponents } from './components';
import { QuestionStepComponent } from './pages/workflow/question-step/question-step.component';
import { EditStepComponent } from './pages/workflow/selection-step/edit-step/edit-step.component';
import { SelectionStepComponent } from './pages/workflow/selection-step/selection-step.component';
import { EditPageComponent } from './pages/workflow/survey-complete/edit-page/edit-page.component';
import {
    SurveyCompleteComponent
} from './pages/workflow/survey-complete/survey-complete.component';
import { WorkflowPageComponent } from './pages/workflow/workflow.component';
import { WorkflowRoutingModule } from './workflow-routing.module';
import { WorkflowComponent } from './workflow.component';

@NgModule({
	declarations: [
		WorkflowComponent,
		WorkflowPageComponent,
		SelectionStepComponent,
		EditStepComponent,
		QuestionStepComponent,
		EditPageComponent,
		SurveyCompleteComponent,
		...components,
		...secondaryComponents,
	],
	imports: [
		NgFlowchartModule,
		CommonModule,
		WorkflowRoutingModule,
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
export class WorkflowModule {}
