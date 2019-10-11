import { Component } from "@angular/core";
import { MyValidators } from "./my-validators";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-root",
  template: `
    <app-reactive-forms></app-reactive-forms>
  `,
  styles: []
})
export class AppComponent {
  // form: FormGroup = new FormGroup({
  //   username: new FormControl(),
  //   passwords: new FormGroup({
  //     password: new FormControl(),
  //     pConfirm: new FormControl()
  //   })
  // });

  form: FormGroup = this.fb.group({
    username: [null, [Validators.required, Validators.minLength(5)]],
    passwords: this.fb.group({
      password: null,
      pConfirm: null
    }),
    url: ["", MyValidators.validateUrl]
  });

  constructor(private fb: FormBuilder) {}

  submit() {
    console.log(this.form.value, this.form.valid);
  }
}
