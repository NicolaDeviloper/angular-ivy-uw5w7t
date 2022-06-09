import { Component, EventEmitter, Input, Output } from '@angular/core';

// Register
@Component({
  selector: 'app-sign-up',
  template: `
    Sign Up
  `,
  styles: [''],
})
export class SignUpComponent {
  @Input() disabled = false;
  @Output() signup = new EventEmitter<Credential>();
}
