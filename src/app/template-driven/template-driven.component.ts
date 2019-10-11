import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-template-driven",
  template: `
    <form #f="ngForm" (submit)="submit(f)">
      <div>
        <label>
          Username:
          <input type="text" name="username" ngModel required />
        </label>
      </div>

      <div ngModelGroup="passwords">
        <div>
          <label>
            Password:
            <input type="text" name="password" ngModel />
          </label>
        </div>

        <div>
          <label>
            Confirm Password:
            <input type="text" name="pConfirm" ngModel />
          </label>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  `,
  styles: []
})
export class TemplateDrivenComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  submit(form) {
    console.log(form.value, form.valid);
  }
}
