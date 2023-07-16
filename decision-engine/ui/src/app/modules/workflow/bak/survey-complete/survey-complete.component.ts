import { NgFlowchart, NgFlowchartStepComponent } from 'src/app/shared/components/flowchart';

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ConfigData, EditPageComponent } from './edit-page/edit-page.component';

export type StandardStepData = {
	name: string;
	title: String;
	description: String;
	icon: string;
	color: string;
	config: Array<ConfigData>;
};

@Component({
	selector: 'app-survey-complete',
	templateUrl: './survey-complete.component.html',
})
export class SurveyCompleteComponent extends NgFlowchartStepComponent {
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
		return [];
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - onEdit
	 **-------------------------------------------------------------------------------------
	 */
	onEdit() {
		const dialogRef = this.matdialog.open(EditPageComponent, {
			data: this.data,
			width: '500px',
		});
		let sub = dialogRef.beforeClosed().subscribe(data => {
			if (data) {
				this.data = {
					...this.data,
					...data,
				};
			}

			sub.unsubscribe();
		});
	}
}
