import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - constructor
   **-------------------------------------------------------------------------------------
   */
  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router,
  ) {}
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - ngOnInit
   **-------------------------------------------------------------------------------------
   */
  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - get f
   **-------------------------------------------------------------------------------------
   */
  get f() {
    return this.form.controls;
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - togglePasswordTextType
   **-------------------------------------------------------------------------------------
   */
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - onSubmit
   **-------------------------------------------------------------------------------------
   */
  onSubmit() {
    this.submitted = true;
    const { email, password } = this.form.value;

    if (this.form.invalid) {
      return;
    }

    this._router.navigateByUrl('/secure');
  }
}
