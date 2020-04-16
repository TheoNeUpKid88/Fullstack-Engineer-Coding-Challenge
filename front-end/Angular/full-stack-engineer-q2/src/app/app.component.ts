import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'full-stack-engineer-q2';
  formGroup: FormGroup;

  constructor(public formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.initForm();
    this.resetForm();
  }
  get userName(): any {
    return this.formGroup.get('Username');
  }
  get Email(): any {
    return this.formGroup.get('Email');
  }
  get Password(): any {
    return this.formGroup.get('Password');
  }
  get cmPassword(): any {
    return this.formGroup.get('cmPassword');
  }

  private cmpEntry(control: AbstractControl) {
    return control.value ? control.value !== this.cmPassword.value : false;
  }

  protected initForm(): FormGroup {
    return this.formGroup = this.formBuilder.group({
      Username: new FormControl('', Validators.compose([Validators.required,
      Validators.maxLength(15), Validators.minLength(5)])),
      Email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      Password: new FormControl('', Validators.compose([Validators.required,
      Validators.minLength(5), Validators.maxLength(5), this.cmpEntry.bind(this)])),
      cmPassword: new FormControl('', Validators.compose([Validators.required,
      Validators.minLength(5), Validators.maxLength(5), this.cmpEntry.bind(this)]))
    });
  }

  public onFormSubmit(): void {
    if (this.formGroup.invalid) {
      return;
    }
    console.log('this.formGroup.invalid', this.formGroup.value);
  }
  public resetForm(): void {
    return this.formGroup.reset();
  }
}
