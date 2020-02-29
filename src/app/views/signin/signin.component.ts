import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  public submitForm() {
    if (this.signInForm.valid) {

    } else {
    }
  }

  public formIsEmpty() {
    return this.signInForm.get('email').pristine || this.signInForm.get('password').pristine;
  }

  public emailIsValid() {
    return this.signInForm.get('email').dirty && !this.signInForm.get('email').errors;
  }
}
