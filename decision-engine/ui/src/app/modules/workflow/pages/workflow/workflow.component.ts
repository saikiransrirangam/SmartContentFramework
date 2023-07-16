import {
    NgFlowchart, NgFlowchartCanvasDirective, NgFlowchartStepRegistry
} from 'src/app/shared/components/flowchart';
import { WORKFLOWS } from 'src/app/shared/database/workflows';

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
    ConditionalComponent, WorkflowActionComponent, WorkflowTriggerComponent
} from '../../components';
import { WorkflowEndComponent } from '../../components/end/end.component';

@Component({
	selector: 'app-workflow',
	templateUrl: './workflow.component.html',
	styleUrls: ['./workflow.component.scss'],
})
export class WorkflowPageComponent implements OnInit {
	@ViewChild(NgFlowchartCanvasDirective)
	chart: NgFlowchartCanvasDirective
	public options: NgFlowchart.Options = new NgFlowchart.Options()
	showMenu = false
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - constructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(
		private registry: NgFlowchartStepRegistry,
		private readonly router: Router,
		private readonly ac: ActivatedRoute
	) {}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - ngOnInit
	 **-------------------------------------------------------------------------------------
	 */
	ngOnInit(): void {
		this.registry.registerStep('trigger', WorkflowTriggerComponent)
		this.registry.registerStep('conditional', ConditionalComponent)
		this.registry.registerStep('action', WorkflowActionComponent)
		this.registry.registerStep('end', WorkflowEndComponent)
		this.options = {
			...this.options,
			stepGap: 40,
			hoverDeadzoneRadius: 250,
			rootPosition: 'CENTER',
			orientation: 'HORIZONTAL',
		}
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - ngAfterViewINit
	 **-------------------------------------------------------------------------------------
	 */
	public async ngAfterViewInit() {
		this.ac.paramMap.subscribe(params => {
			const id = params.get('id')
			if (id) this.chart.getFlow().upload(WORKFLOWS[params.get('id')])
			else {
				let id = new Date().getTime()

				const workflow = {
					root: {
						id,
						type: 'trigger',
						data: {},
					},
				}
				WORKFLOWS[id] = workflow
				this.chart.getFlow().upload(workflow)
			}
		})
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
		let json = this.chart.getFlow().toJSON(4)
		var x = window.open()
		x.document.open()
		x.document.write(
			'<html><head><title></title></head><body><pre>' + json + '</pre></body></html>'
		)
		x.document.close()
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - cancel
	 **-------------------------------------------------------------------------------------
	 */
	public cancel() {
		this.router.navigateByUrl('/secure/dashboard/surveys')
	}
}
