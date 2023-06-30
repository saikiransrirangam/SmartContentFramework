import { NgFlowchart, NgFlowchartStepComponent } from 'src/app/shared/components/flowchart';

import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { ConditionalComponent } from '../conditional/conditional.component';

@Component({
	selector: 'workflow-trigger',
	templateUrl: './trigger.component.html',
	styleUrls: ['./trigger.component.scss'],
})
export class WorkflowTriggerComponent extends NgFlowchartStepComponent {
	public validateForm!: UntypedFormGroup;
	public readonly routeData = {
		name: 'selection',
		icon: 'alt_route',
		color: '#2980b9',
		config: [{}],
	};
	public idx = 0;
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - constructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(private fb: UntypedFormBuilder) {
		super();
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - ngOnInit
	 **-------------------------------------------------------------------------------------
	 */
	override ngOnInit(): void {}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - onDelete
	 **-------------------------------------------------------------------------------------
	 */
	onDelete() {
		this.destroy(true);
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - getDropPositionsForStep
	 **-------------------------------------------------------------------------------------
	 */
	override getDropPositionsForStep(): NgFlowchart.DropPosition[] {
		return ['RIGHT'];
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - onAdd
	 **-------------------------------------------------------------------------------------
	 */
	onAdd(title) {
		this.idx = this.idx + 1;
		let route = {
			...this.routeData,
			name: `Condition ${this.idx}`,
		};

		this.addChild(
			{
				template: ConditionalComponent,
				type: 'conditional',
				data: route,
			},
			{
				sibling: true,
			}
		);
	}
}
