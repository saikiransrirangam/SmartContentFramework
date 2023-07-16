import { NgFlowchart, NgFlowchartStepComponent } from 'src/app/shared/components/flowchart';
import { BUYER_GROUPS } from 'src/app/shared/database/buyer-groups';

import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ConditionalComponent } from '../conditional/conditional.component';
import { TriggerSettingsComponent } from '../trigger/trigger-settings/trigger-settings.component';
import { EditActionComponent } from './edit-action/edit-action.component';

@Component({
	selector: 'workflow-action',
	templateUrl: './action.component.html',
	styleUrls: ['./action.component.scss'],
})
export class WorkflowActionComponent extends NgFlowchartStepComponent {
	public validateForm!: UntypedFormGroup
	public readonly routeData = {
		name: 'HTTP_ACTION',
		config: [{}],
	}
	public idx = 0
	name: string
	formData: any = {}
	isDirty: boolean = false
	action: string = ''
	endpoint: string = ''
	public actionsDisabled: boolean = true
	public groups: string = ''

	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - constructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(private fb: UntypedFormBuilder, private matdialog: MatDialog) {
		super()
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - ngOnInit
	 **-------------------------------------------------------------------------------------
	 */
	override ngOnInit(): void {
		if (this.data?.createTime) {
			this.isDirty = true
			this.actionsDisabled = false
			this.data.showJSONInput = true
			this.formData = this.data
			this.groups = BUYER_GROUPS.filter(e => this.data.groups.includes(e.id))
				.map(e => e.name)
				.join(', ')
		}
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - onDelete
	 **-------------------------------------------------------------------------------------
	 */
	onDelete() {
		this.destroy(true)
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - getDropPositionsForStep
	 **-------------------------------------------------------------------------------------
	 */
	override getDropPositionsForStep(): NgFlowchart.DropPosition[] {
		return ['RIGHT']
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - onAdd
	 **-------------------------------------------------------------------------------------
	 */
	onAdd(title) {
		this.idx = this.idx + 1
		let route = {
			...this.routeData,
			name: `Condition ${this.idx}`,
		}

		this.addChild(
			{
				template: ConditionalComponent,
				type: 'conditional',
				data: route,
			},
			{
				sibling: true,
			}
		)
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
		})
		let sub = dialogRef.beforeClosed().subscribe(data => {
			if (data) {
				this.formData = data
				this.action = data.method
				this.endpoint = data.endpoint
				this.data = data
				console.log(data)
				this.groups = BUYER_GROUPS.filter(e => data.buyerGroups.includes(e.id))
					.map(e => e.name)
					.join(', ')
			}

			sub.unsubscribe()
		})
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
		})
		let sub = dialogRef.beforeClosed().subscribe(({ data, success }) => {
			if (success) {
				this.data = data
				this.actionsDisabled = false
			}
			sub.unsubscribe()
		})
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - addCondition
	 **-------------------------------------------------------------------------------------
	 */
	public addCondition() {}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - endTraunch
	 **-------------------------------------------------------------------------------------
	 */
	public endTraunch(): void {}
}
