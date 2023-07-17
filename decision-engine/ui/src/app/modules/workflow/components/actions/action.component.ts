import { NgFlowchart, NgFlowchartStepComponent } from 'src/app/shared/components/flowchart';
import { DataService } from 'src/app/shared/services/data.service';

import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ConditionalComponent } from '../conditional/conditional.component';
import { WorkflowEndComponent } from '../end/end.component';
import { TriggerSettingsComponent } from '../trigger/trigger-settings/trigger-settings.component';
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
	public actionsDisabled: boolean = true;
	public buyerGroups: string = '';
	public flowEnded: boolean = false;

	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - constructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(
		private fb: UntypedFormBuilder,
		private matdialog: MatDialog,
		private readonly dataService: DataService
	) {
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
			this.data.showJSONInput = true;
			this.formData = this.data;
			this.buyerGroups = this.dataService
				.get('buyerGroups')
				.filter(e => this.data.buyerGroups.includes(e.id))
				.map(e => e.name)
				.join(', ');
		}
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
				this.data.createTime = new Date().getTime();
				this.actionsDisabled = false;
				this.buyerGroups = this.dataService
					.get('buyerGroups')
					.filter(e => data.buyerGroups.includes(e.id))
					.map(e => e.name)
					.join(', ');
			}

			sub.unsubscribe();
		});
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
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - addCondition
	 **-------------------------------------------------------------------------------------
	 */
	public addCondition() {
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
	 ** METHOD NAME - endTraunch
	 **-------------------------------------------------------------------------------------
	 */
	public endTraunch(): void {
		this.addChild(
			{
				template: WorkflowEndComponent,
				type: 'end',
				data: {},
			},
			{
				sibling: true,
			}
		);
		this.flowEnded = true;
	}
}
