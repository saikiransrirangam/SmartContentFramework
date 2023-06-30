import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export type ConfigData = {
	name: string;
	description?: string;
	type: 'text' | 'number' | 'checkbox';
	value?: any;
};

@Component({
	selector: 'app-trigger-settings',
	templateUrl: './trigger-settings.component.html',
	styleUrls: ['./trigger-settings.component.scss'],
})
export class TriggerSettingsComponent implements OnInit {
	public form: FormGroup;
	get f() {
		return this.form.controls;
	}
	get responseModel() {
		return this.form.controls['responseModel'] as FormArray;
	}
	get responseModelFormGroups() {
		return this.responseModel.controls as FormGroup[];
	}
	showMessage = false;
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - constructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		private dialogref: MatDialogRef<TriggerSettingsComponent>,
		private readonly fb: FormBuilder,
		private el: ElementRef
	) {}

	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - ngOnInit
	 **-------------------------------------------------------------------------------------
	 */
	ngOnInit(): void {
		this.form = this.fb.group({
			webhookUrl: [this.data?.webhookUrl, [Validators.required]],
			webhookMethod: [this.data?.webhookMethod, [Validators.required]],
			webhookTimeout: [this.data?.webhookTimeout, [Validators.required]],
			headerName: [this.data?.headerName, []],
			headerValue: [this.data?.headerValue, []],
			requestBody: [this.data?.requestBody, []],
			httpAuthUsername: [this.data?.httpAuthUsername, []],
			httpAuthPassword: [this.data?.httpAuthPassword, []],
			responseModel: new FormArray([]),
		});
		if (this.data?.responseModel?.length) {
			this.data.responseModel.forEach(e => {
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
		if (this.form.valid) {
			this.dialogref.close({
				...this.form.value,
			});
		} else {
			Object.values(this.form.controls).forEach(control => {
				if (control.invalid) {
					control.markAsDirty();
					control.updateValueAndValidity({ onlySelf: true });
				}
			});
			this.scrollToFirstInvalidControl();
		}
	}

	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - add
	 **-------------------------------------------------------------------------------------
	 */
	public add(values: any = {}) {
		this.responseModel.push(
			this.fb.group({
				dataType: ['', []],
				propertyName: ['', []],
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
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - addField
	 **-------------------------------------------------------------------------------------
	 */
	public addField($event) {}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME -
	 **-------------------------------------------------------------------------------------
	 */
	private scrollToFirstInvalidControl() {
		const firstInvalidControl: HTMLElement =
			this.el.nativeElement.querySelector('form .ng-invalid');

		firstInvalidControl.focus(); //without smooth behavior
	}
}
