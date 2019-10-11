import { Component, OnInit } from "@angular/core";
import { MyValidators } from "../my-validators";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-reactive-forms",
  template: `
    <form [formGroup]="form" (submit)="submit()">
      <div>
        <label>
          Username:
          <input type="text" formControlName="username" />
        </label>
      </div>

      <div formGroupName="passwords">
        <div>
          <label>
            Password:
            <input type="password" formControlName="password" />
          </label>
        </div>
        <div>
          <label>
            Confirm Password:
            <input type="password" formControlName="pConfirm" />
          </label>
        </div>
      </div>

      <div>
        <label>
          Url:
          <input type="text" formControlName="url" />
        </label>
        <div
          *ngIf="
            form.get('url').errors &&
            form.get('url').dirty &&
            form.get('url').errors.validUrl
          "
        >
          Oops, only urls served over https and only from the .io top-level
          domain are accepted!
        </div>
      </div>

      <button type="submit" [disabled]="!form.valid">Submit</button>
    </form>
  `,
  styles: []
})
export class ReactiveFormsComponent implements OnInit {
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

  ngOnInit() {}

  submit() {
    console.log(this.form.value, this.form.valid);
  }
}
