import { NgFlowchart, NgFlowchartStepComponent } from 'src/app/shared/components/flowchart';

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ConfigData, EditStepComponent } from './edit-step/edit-step.component';

export type StandardStepData = {
	name: string;
	icon: string;
	color: string;
	config: Array<ConfigData>;
};

@Component({
	selector: 'app-selection-step',
	templateUrl: './selection-step.component.html',
	styleUrls: ['./selection-step.component.scss'],
})
export class SelectionStepComponent extends NgFlowchartStepComponent {
	name: string;
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
		const dialogRef = this.matdialog.open(EditStepComponent, {
			data: this.data,
			width: '500px',
		});
		let sub = dialogRef.beforeClosed().subscribe(data => {
			if (data) {
				this.name = data.selectionValue;
			}

			sub.unsubscribe();
		});
	}
}
