import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { StandardStepData } from '../survey-complete.component';

export type ConfigData = {
	name: string;
	description?: string;
	type: 'text' | 'number' | 'checkbox';
	value?: any;
};

@Component({
	selector: 'app-page',
	templateUrl: './edit-page.component.html',
	styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit {
	public form: FormGroup;
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - constructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: StandardStepData,
		private dialogref: MatDialogRef<EditPageComponent>,
		private readonly fb: FormBuilder
	) {}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - ngOnInit
	 **-------------------------------------------------------------------------------------
	 */
	ngOnInit(): void {
		this.form = this.fb.group({
			title: [this.data.title],
			description: [this.data.description],
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
