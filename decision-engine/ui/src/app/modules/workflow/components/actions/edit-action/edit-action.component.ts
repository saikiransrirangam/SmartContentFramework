import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export type ConfigData = {
	name: string;
	description?: string;
	type: 'text' | 'number' | 'checkbox';
	value?: any;
};

@Component({
	selector: 'app-edit-action',
	templateUrl: './edit-action.component.html',
	styleUrls: ['./edit-action.component.scss'],
})
export class EditActionComponent implements OnInit {
	public form: FormGroup;
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - constructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		private dialogref: MatDialogRef<EditActionComponent>,
		private readonly fb: FormBuilder
	) {}

	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - ngOnInit
	 **-------------------------------------------------------------------------------------
	 */
	ngOnInit(): void {
		this.form = this.fb.group({
			method: [],
			endpoint: [],
		});
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - onSave
	 **-------------------------------------------------------------------------------------
	 */
	onSave() {
		this.dialogref.close({
			...this.form.value,
		});
	}
}
