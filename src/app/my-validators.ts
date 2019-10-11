import { AbstractControl } from "@angular/forms";

export class MyValidators {
  static validateUrl(control: AbstractControl) {
    if (!control.value.startsWith("https") || !control.value.includes(".io")) {
      return { validUrl: true };
    }
    return null;
  }
}
