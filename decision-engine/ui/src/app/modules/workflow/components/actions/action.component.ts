import { NgFlowchart, NgFlowchartStepComponent } from 'src/app/shared/components/flowchart';

import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ConditionalComponent } from '../conditional/conditional.component';
import { EditActionComponent } from './edit-action/edit-action.component';

@Component({
	selector: 'workflow-action',
	templateUrl: './action.component.html',
	styleUrls: ['./action.component.scss'],
})
export class WorkflowActionComponent extends NgFlowchartStepComponent {
	public validateForm!: UntypedFormGroup;
	public readonly routeData = {
		name: 'HTTP_ACTION',
		config: [{}],
	};
	public idx = 0;
	name: string;
	formData: any = {};
	isDirty: boolean = false;
	action: string = '';
	endpoint: string = '';
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - constructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(private fb: UntypedFormBuilder, private matdialog: MatDialog) {
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
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - onEdit
	 **-------------------------------------------------------------------------------------
	 */
	onEdit() {
		const dialogRef = this.matdialog.open(EditActionComponent, {
			data: this.formData,

			width: '100vw',
			minHeight: '25vh',
		});
		let sub = dialogRef.beforeClosed().subscribe(data => {
			if (data) {
				this.formData = data;
				this.action = data.method;
				this.endpoint = data.endpoint;
				this.data = data;
			}

			sub.unsubscribe();
		});
	}
}
