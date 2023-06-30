import { NgFlowchart, NgFlowchartStepComponent } from 'src/app/shared/components/flowchart';

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { WorkflowActionComponent } from '../actions/action.component';
import {
	ConfigData,
	EditConditionalComponent,
} from './edit-conditional/edit-conditional.component';

export type StandardStepData = {
	name: string;
	icon: string;
	color: string;
	config: Array<ConfigData>;
};

@Component({
	selector: 'workflow-conditional-step',
	templateUrl: './conditional.component.html',
	styleUrls: ['./conditional.component.scss'],
})
export class ConditionalComponent extends NgFlowchartStepComponent {
	name: string;
	formData: any = {};
	isDirty: boolean = false;
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - constructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(private matdialog: MatDialog) {
		super();
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - ngOnInit
	 **-------------------------------------------------------------------------------------
	 */
	override ngOnInit(): void {
		this.name = this.data.name;
		this.formData.conditionName = this.name;
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - onDelete
	 **-------------------------------------------------------------------------------------
	 */
	onDelete() {
		this.destroy(false);
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME -  getDropPositionsForStep
	 **-------------------------------------------------------------------------------------
	 */
	override getDropPositionsForStep(): NgFlowchart.DropPosition[] {
		return ['RIGHT'];
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - onEdit
	 **-------------------------------------------------------------------------------------
	 */
	onEdit() {
		const dialogRef = this.matdialog.open(EditConditionalComponent, {
			data: this.formData,

			width: '100vw',
			minHeight: '25vh',
		});
		let sub = dialogRef.beforeClosed().subscribe(data => {
			if (data) {
				this.formData = data;
				this.name = data.conditionName;
				this.data = data;
				this.data.conditionName = data.conditionName;
			}
			if (!this.isDirty) {
				this.addChild(
					{
						template: WorkflowActionComponent,
						type: 'action',
						data: {
							rules: [...this.formData.conditions],
						},
					},
					{
						sibling: true,
					}
				);
			}

			this.isDirty = true;
			sub.unsubscribe();
		});
	}
}
