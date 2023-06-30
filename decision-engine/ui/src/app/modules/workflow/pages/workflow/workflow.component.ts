import {
	NgFlowchart,
	NgFlowchartCanvasDirective,
	NgFlowchartStepRegistry,
} from 'src/app/shared/components/flowchart';

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import {
	ConditionalComponent,
	WorkflowActionComponent,
	WorkflowTriggerComponent,
} from '../../components';

@Component({
	selector: 'app-workflow',
	templateUrl: './workflow.component.html',
	styleUrls: ['./workflow.component.scss'],
})
export class WorkflowPageComponent implements OnInit {
	@ViewChild(NgFlowchartCanvasDirective)
	chart: NgFlowchartCanvasDirective;

	public options: NgFlowchart.Options = new NgFlowchart.Options();

	showMenu = false;
	public initial = {
		root: {
			id: '1',
			type: 'trigger',
			data: {
				method: 'POST',
				endpoint: 'api/v2/users?size=10',
			},
			children: [],
		},
		connectors: [],
	};
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
		this.registry.registerStep('trigger', WorkflowTriggerComponent);
		this.registry.registerStep('conditional', ConditionalComponent);
		this.registry.registerStep('action', WorkflowActionComponent);

		this.options = {
			...this.options,
			stepGap: 40,
			hoverDeadzoneRadius: 250,
			rootPosition: 'CENTER',
			orientation: 'HORIZONTAL',
		};
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - ngAfterViewINit
	 **-------------------------------------------------------------------------------------
	 */
	public async ngAfterViewInit() {
		this.chart.getFlow().upload(this.initial);
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
