import { NgFlowchart, NgFlowchartStepComponent } from 'src/app/shared/components/flowchart';

import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ConditionalComponent } from '../conditional/conditional.component';
import { TriggerSettingsComponent } from './trigger-settings/trigger-settings.component';

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
			this.actionsDisabled = false;
		}
		//this.onSettingsModalTrigger();
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
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - onAdd
	 **-------------------------------------------------------------------------------------
	 */
	onAdd() {
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
	onSettingsModalTrigger() {
		const dialogRef = this.matdialog.open(TriggerSettingsComponent, {
			panelClass: 'fullscreen-dialog',
			data: this.data,
		});
		let sub = dialogRef.beforeClosed().subscribe(({ data, success }) => {
			if (success) {
				this.data = data;
				this.actionsDisabled = false;
			}
			sub.unsubscribe();
		});
	}
}
