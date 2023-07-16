import { NzModalService } from 'ng-zorro-antd/modal';
import { BUYER_GROUPS } from 'src/app/shared/database/buyer-groups';

import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { data } from '../../data';

@Component({
	selector: 'page-buyer-form',
	templateUrl: './form.page.html',
})
export class FormPage implements OnInit {
	public form: FormGroup
	public data: any
	get f() {
		return this.form.controls
	}
	get responseModel() {
		return this.form.controls['responseModel'] as FormArray
	}
	get responseModelFormGroups() {
		return this.responseModel.controls as FormGroup[]
	}
	public buyers = BUYER_GROUPS
	public isSpinning: boolean = false
	isVisibleTop = true
	isVisibleMiddle = false

	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - contructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(
		private readonly fb: FormBuilder,
		private el: ElementRef,
		private readonly ac: ActivatedRoute,
		private readonly router: Router,
		private modal: NzModalService
	) {}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - ngOnInit
	 **-------------------------------------------------------------------------------------
	 */
	ngOnInit() {
		this.ac.paramMap.subscribe(map => {
			const id = +map.get('id')

			if (id) {
				this.data = data.find(e => e.id === id)
			}
			console.log(this.data)
		})
		this.createForm()
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - createForm
	 **-------------------------------------------------------------------------------------
	 */
	public createForm(): void {
		let result = new Array(Math.floor(Math.random() * 10))
		result = result.fill(0).map(() => `Buyer Group ${Math.floor(Math.random() * 10)}`)
		this.form = this.fb.group({
			name: [this.data?.name, [Validators.required]],
			buyerGroup: [result],
			contractPice: [`0.${Math.floor(Math.random() * 100)}`, [Validators.required]],
			webhookUrl: [this.data?.webhookUrl, [Validators.required]],
			webhookMethod: [this.data?.webhookMethod, [Validators.required]],
			webhookTimeout: [this.data?.webhookTimeout, [Validators.required]],
			headerName: [this.data?.headerName, []],
			headerValue: [this.data?.headerValue, []],
			requestBody: [this.data?.requestBody, []],
			httpAuthUsername: [this.data?.httpAuthUsername, []],
			httpAuthPassword: [this.data?.httpAuthPassword, []],
			responseModel: new FormArray([]),
		})
		if (this.data?.responseModel?.length) {
			this.data.responseModel.forEach(e => {
				this.add(e)
			})
		} else {
			this.add()
		}
	}

	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - onSave
	 **-------------------------------------------------------------------------------------
	 */
	onSave() {
		if (this.form.valid) {
		} else {
			Object.values(this.form.controls).forEach(control => {
				if (control.invalid) {
					control.markAsDirty()
					control.updateValueAndValidity({ onlySelf: true })
				}
			})
			this.scrollToFirstInvalidControl()
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
				dataType: [values.dataType, []],
				propertyName: [values.propertyName, []],
			})
		)
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME -
	 **-------------------------------------------------------------------------------------
	 */
	private scrollToFirstInvalidControl() {
		const firstInvalidControl: HTMLElement =
			this.el.nativeElement.querySelector('form .ng-invalid')

		firstInvalidControl.focus() //without smooth behavior
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - addField
	 **-------------------------------------------------------------------------------------
	 */
	public addField($event) {}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - cancel
	 **-------------------------------------------------------------------------------------
	 */
	public cancel() {
		this.router.navigateByUrl('/secure/buyers')
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - testAPI
	 **-------------------------------------------------------------------------------------
	 */
	public testAPI() {
		this.isSpinning = true
		setTimeout(() => {
			this.isSpinning = false
			this.modal.error({
				nzTitle: 'API Connection Failed',
				nzContent:
					'The API connection failed, please modify your configuration and try again',
				nzOkText: 'OK',
			})
		}, 3000)
	}
}
