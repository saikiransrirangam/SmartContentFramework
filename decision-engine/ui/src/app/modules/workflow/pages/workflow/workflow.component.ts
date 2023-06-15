import {
	NgFlowchart,
	NgFlowchartCanvasDirective,
	NgFlowchartStepRegistry,
} from 'src/app/shared/components/flowchart';

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionStepComponent } from './question-step/question-step.component';
import { SelectionStepComponent } from './selection-step/selection-step.component';
import { SurveyCompleteComponent } from './survey-complete/survey-complete.component';

@Component({
	selector: 'app-workflow',
	templateUrl: './workflow.component.html',
	styleUrls: ['./workflow.component.scss'],
})
export class WorkflowPageComponent implements OnInit {
	@ViewChild(NgFlowchartCanvasDirective)
	chart: NgFlowchartCanvasDirective;

	public options: NgFlowchart.Options = new NgFlowchart.Options();

	public operations = [
		{
			name: 'Are You Voting',
			type: 'question',
			data: {
				name: 'Are You Voting',
				icon: 'reorder',
				color: '#3498db',
			},
			template: QuestionStepComponent,
		},
		{
			name: 'Democrat or Republican',
			type: 'question',
			data: {
				name: 'Democrat or Republican',
				icon: 'reorder',
				color: '#3498db',
			},

			template: QuestionStepComponent,
		},
		{
			name: 'Approve of Trump?',
			type: 'question',
			data: {
				name: 'Approve of Trump?',
				icon: 'reorder',
				color: '#3498db',
			},

			template: QuestionStepComponent,
		},
		{
			name: 'Approve of Biden?',
			type: 'question',
			data: {
				name: 'Approve of Biden?',
				icon: 'reorder',
				color: '#3498db',
			},

			template: QuestionStepComponent,
		},
	];
	public components = [
		{
			name: 'Alert',
			type: 'component',
			data: {
				name: '',
				icon: 'settings_input_component',
				color: '#00A36C',
			},
			template: QuestionStepComponent,
		},
		{
			name: 'Confirm',
			type: 'component',
			data: {
				name: '',
				icon: 'settings_input_component',
				color: '#00A36C',
			},

			template: QuestionStepComponent,
		},
		{
			name: 'Redirect',
			type: 'component',
			data: {
				name: '',
				icon: 'settings_input_component',
				color: '#00A36C',
			},
			template: QuestionStepComponent,
		},
	];
	public pages = [
		{
			name: 'Survey Complete',
			type: 'component',
			data: {
				name: 'Survey Complete Page',
				icon: 'pageview',
				color: '#E6E6FA',
				title: '',
				description: '',
			},

			template: SurveyCompleteComponent,
		},
	];
	showMenu = false;
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - constructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(private registry: NgFlowchartStepRegistry, private readonly router: Router) {}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - ngOnInit
	 **-------------------------------------------------------------------------------------
	 */
	ngOnInit(): void {
		this.operations.forEach(op => {
			this.registry.registerStep(op.type, op.template);
		});
		this.registry.registerStep('route', SelectionStepComponent);
		this.registry.registerStep('page', SurveyCompleteComponent);
		this.options = {
			...this.options,
			stepGap: 40,
			hoverDeadzoneRadius: 250,
		};
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - makeDraggable
	 **-------------------------------------------------------------------------------------
	 */
	public makeDraggable() {
		//https://codepen.io/thenutz/pen/VwYeYEE
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - save
	 **-------------------------------------------------------------------------------------
	 */
	public save() {
		let json = this.chart.getFlow().toJSON(4);
		var x = window.open();
		x.document.open();
		x.document.write(
			'<html><head><title></title></head><body><pre>' + json + '</pre></body></html>'
		);
		x.document.close();
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - cancel
	 **-------------------------------------------------------------------------------------
	 */
	public cancel() {
		this.router.navigateByUrl('/secure/dashboard/surveys');
	}
}
