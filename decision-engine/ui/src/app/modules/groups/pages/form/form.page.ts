import { DataService } from 'src/app/shared/services/data.service';

import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'page-advertister-form',
	templateUrl: './form.page.html',
})
export class FormPage implements OnInit {
	public form: FormGroup;
	public data: any;
	public buyers: any[] = this.dataService.get('buyers');
	public buyerGroups: any[] = this.dataService.get('buyerGroups');
	public isEdit: boolean = false;
	get f() {
		return this.form.controls;
	}
	get responseModel() {
		return this.form.controls['responseModel'] as FormArray;
	}
	get responseModelFormGroups() {
		return this.responseModel.controls as FormGroup[];
	}
	public priorities = new Array(10).fill(0).map((x, i) => `Priority ${i + 1}`);
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - contructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(
		private readonly fb: FormBuilder,
		private readonly el: ElementRef,
		private readonly ac: ActivatedRoute,
		private readonly router: Router,
		private readonly dataService: DataService
	) {}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - ngOnInit
	 **-------------------------------------------------------------------------------------
	 */
	ngOnInit() {
		this.ac.paramMap.subscribe(map => {
			const id = +map.get('id');

			if (id) {
				this.data = this.buyerGroups.find(e => e.id === id);
				this.isEdit = true;
			}
		});
		this.createForm();
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - createForm
	 **-------------------------------------------------------------------------------------
	 */
	public createForm(): void {
		this.form = this.fb.group({
			id: [this.data?.id || new Date().getTime()],
			name: [this.data?.name, [Validators.required]],
			buyers: [this.data?.buyers || []],
		});
		console.log(this.buyers);
	}

	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - onSave
	 **-------------------------------------------------------------------------------------
	 */
	onSave() {
		if (this.form.valid) {
			const values = this.form.value;
			if (this.isEdit) {
				this.buyerGroups = this.buyerGroups.map(e => {
					if (e.id === values.id) {
						return {
							...values,
							id: new Date().getTime(),
						};
					}
					return e;
				});
			} else {
				this.buyerGroups.push({
					...values,
				});
			}
			this.dataService.set('buyerGroups', this.buyerGroups);
			this.router.navigateByUrl('/secure/groups');
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
	 ** METHOD NAME -
	 **-------------------------------------------------------------------------------------
	 */
	private scrollToFirstInvalidControl() {
		const firstInvalidControl: HTMLElement =
			this.el.nativeElement.querySelector('form .ng-invalid');

		firstInvalidControl.focus(); //without smooth behavior
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - cancel
	 **-------------------------------------------------------------------------------------
	 */
	public cancel() {
		this.router.navigateByUrl('/secure/groups');
	}
}
