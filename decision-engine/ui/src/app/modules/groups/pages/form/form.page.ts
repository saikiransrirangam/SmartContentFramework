import { BUYER_GROUPS } from 'src/app/shared/database/buyer-groups';
import { BUYERS } from 'src/app/shared/database/buyers';

import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'page-advertister-form',
	templateUrl: './form.page.html',
})
export class FormPage implements OnInit {
	public form: FormGroup
	public data: any
	public buyers: any[] = BUYERS
	get f() {
		return this.form.controls
	}
	get responseModel() {
		return this.form.controls['responseModel'] as FormArray
	}
	get responseModelFormGroups() {
		return this.responseModel.controls as FormGroup[]
	}
	public priorities = new Array(10).fill(0).map((x, i) => `Priority ${i + 1}`)
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - contructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(
		private readonly fb: FormBuilder,
		private el: ElementRef,
		private readonly ac: ActivatedRoute,
		private readonly router: Router
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
				this.data = BUYER_GROUPS.find(e => e.id === id)
			}
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
		result = result.fill(0).map(() => Math.floor(Math.random() * 10))
		this.form = this.fb.group({
			name: [this.data.name, [Validators.required]],
			buyers: [result],
		})
	}

	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - onSave
	 **-------------------------------------------------------------------------------------
	 */
	onSave() {
		console.log(this.form.value)
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
	 ** METHOD NAME - cancel
	 **-------------------------------------------------------------------------------------
	 */
	public cancel() {
		this.router.navigateByUrl('/secure/buyers')
	}
}
