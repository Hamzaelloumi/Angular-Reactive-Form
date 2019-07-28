import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { zidCodeValidator, passwordValidator } from './validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required , Validators.minLength(4)]],
      lastName: '',
      email: ['', [Validators.required , Validators.email]],
      password: '',
      confirmPassword: ['', passwordValidator],
      address: '',
      city: '' ,
      state: '',
      zip: ['', zidCodeValidator],

    });
    //FIXED THE ISSUE WHEN I CHANGE PASSWORD VALUE
    this.form.controls.password.valueChanges
    .subscribe(
      x => this.form.controls.confirmPassword.updateValueAndValidity()
    );
  }

  onSubmit() {
      this.form.markAsTouched();

  }
  ngOnInit() {
  }

}
