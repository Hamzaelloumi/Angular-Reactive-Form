import { AbstractControl } from '@angular/forms';
import { isError } from 'util';

export function zidCodeValidator(control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {
    const regex = new RegExp('^[0-9]{6}$');
    if (regex.test(control.value)) {
      return  {isError: true};
    }
  }
  return null;
}


export function passwordValidator(control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {

    const confirmPasswordValue = control.value;
    const passwordControl = control.root.get('password'); // To Get The value of password in
    if(passwordControl) {
      const passwordValue = passwordControl.value;
      if (passwordValue !== confirmPasswordValue || passwordValue === '') {
        return {
          isError: true
        };
      }
    }
  }
  return null;

}
