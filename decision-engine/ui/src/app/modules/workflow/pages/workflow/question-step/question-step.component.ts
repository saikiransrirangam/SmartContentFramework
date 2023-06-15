import { NgFlowchart, NgFlowchartStepComponent } from 'src/app/shared/components/flowchart';

import { Component } from '@angular/core';

import { SelectionStepComponent } from '../selection-step/selection-step.component';

@Component({
	selector: 'app-question-step',
	templateUrl: './question-step.component.html',
	styleUrls: ['./question-step.component.scss'],
})
export class QuestionStepComponent extends NgFlowchartStepComponent {
	public readonly routeData = {
		name: 'selection',
		icon: 'alt_route',
		color: '#2980b9',
		config: [
			{
				name: '',
				description: '',
				type: 'text',
				value: 'true',
			},
		],
	};
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - ngOnInit
	 **-------------------------------------------------------------------------------------
	 */
	override ngOnInit(): void {
		this.onAdd('Yes');
		this.onAdd('No');
	}
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
		return ['BELOW'];
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - onAdd
	 **-------------------------------------------------------------------------------------
	 */
	onAdd(title) {
		let route = {
			...this.routeData,
			name: title,
		};

		this.addChild(
			{
				template: SelectionStepComponent,
				type: 'selection',
				data: route,
			},
			{
				sibling: true,
			}
		);
	}
}
