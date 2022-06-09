import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Credentials } from './models';

@Component({
  selector: 'app-sign-in',
  template: `
    Sign In
  `,
  styles: [],
})
export class SignInComponent {
  isPasswordVisible = false;
  @Input() disabled = false;
  @Output() signIn = new EventEmitter<Credentials>();

  toggleVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
