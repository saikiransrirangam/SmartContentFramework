import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export type ConfigData = {
	name: string;
	description?: string;
	type: 'text' | 'number' | 'checkbox';
	value?: any;
};

@Component({
	selector: 'app-edit-conditional',
	templateUrl: './edit-conditional.component.html',
	styleUrls: ['./edit-conditional.component.scss'],
})
export class EditConditionalComponent implements OnInit {
	public form: FormGroup;
	get f() {
		return this.form.controls;
	}
	get conditions() {
		return this.form.controls['conditions'] as FormArray;
	}
	get conditionsFormGroups() {
		return this.conditions.controls as FormGroup[];
	}
	showMessage = false;
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - constructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		private dialogref: MatDialogRef<EditConditionalComponent>,
		private readonly fb: FormBuilder
	) {}

	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - ngOnInit
	 **-------------------------------------------------------------------------------------
	 */
	ngOnInit(): void {
		this.form = this.fb.group({
			conditionName: [this.data.conditionName],
			conditions: new FormArray([]),
		});
		if (this.data?.conditions?.length) {
			this.data.conditions.forEach(e => {
				this.add(e);
			});
		} else {
			this.add();
		}
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

	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - add
	 **-------------------------------------------------------------------------------------
	 */
	public add(values: any = {}) {
		this.conditions.push(
			this.fb.group({
				dataAttribute: [values.dataAttribute],
				operator: [values.operator],
				value: [values.value],
				action: [values.action],
			})
		);
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - action
	 **-------------------------------------------------------------------------------------
	 */
	public action($event): void {
		if ($event.target.value == 'action') {
			this.showMessage = true;
			return;
		}
		this.add();
	}
}
