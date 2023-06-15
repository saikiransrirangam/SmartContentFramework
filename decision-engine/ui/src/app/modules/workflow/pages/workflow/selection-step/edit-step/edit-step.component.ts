import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { StandardStepData } from '../selection-step.component';

export type ConfigData = {
	name: string;
	description?: string;
	type: 'text' | 'number' | 'checkbox';
	value?: any;
};

@Component({
	selector: 'app-edit-step',
	templateUrl: './edit-step.component.html',
	styleUrls: ['./edit-step.component.scss'],
})
export class EditStepComponent implements OnInit {
	public form: FormGroup;
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - constructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: StandardStepData,
		private dialogref: MatDialogRef<EditStepComponent>,
		private readonly fb: FormBuilder
	) {}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - ngOnInit
	 **-------------------------------------------------------------------------------------
	 */
	ngOnInit(): void {
		this.form = this.fb.group({
			selectionValue: [this.data.name],
		});
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - onSave
	 **-------------------------------------------------------------------------------------
	 */
	onSave() {
		console.log(this.form.value);
		this.dialogref.close({
			...this.form.value,
		});
	}
}
