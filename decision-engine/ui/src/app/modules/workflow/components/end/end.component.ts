import { NgFlowchart, NgFlowchartStepComponent } from 'src/app/shared/components/flowchart';

import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
	selector: 'workflow-end',
	templateUrl: './end.component.html',
	styleUrls: ['./end.component.scss'],
})
export class WorkflowEndComponent extends NgFlowchartStepComponent {
	public validateForm!: UntypedFormGroup;
	public readonly routeData = {
		name: 'END_ACTION',
		config: [{}],
	};
	public idx = 0;
	name: string;
	formData: any = {};
	isDirty: boolean = false;
	action: string = '';
	endpoint: string = '';
	public actionsDisabled: boolean = true;

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
	override ngOnInit(): void {
		if (this.data?.createTime) {
			this.isDirty = true;
			this.actionsDisabled = false;
		}
		//if(this.)
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
		return ['RIGHT'];
	}
}
