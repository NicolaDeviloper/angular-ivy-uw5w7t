import {
  Component,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Credentials } from './models';
import { equalFieldsValidator } from './utils/equal-fields.validator';
import { RegistrationErrorStateMatcher } from './utils/registration-error-state.matcher';

// Register
@Component({
  selector: 'app-sign-up',
  template: `
    <form [formGroup]="registrationForm" (ngSubmit)="submit()">
      <mat-form-field appearance="fill" floatLabel="always">
        <mat-label>Email</mat-label>
        <input formControlName="email" type="text" matInput />
        <mat-error *ngIf="registrationForm.get('email').hasError('email')">
          <strong>Email</strong> is invalid.
        </mat-error>
        <mat-error *ngIf="registrationForm.get('email').hasError('required')">
          <strong>Email</strong> is required.
        </mat-error>
      </mat-form-field>
      <mat-form-field appearance="fill" floatLabel="always">
        <mat-label>Password</mat-label>
        <input
          formControlName="password"
          matInput
          [type]="isPasswordVisible ? 'text' : 'password'"
        />
        <mat-error><strong>Password</strong> is required.</mat-error>
        <button
          type="button"
          mat-icon-button
          matSuffix
          (click)="toggleVisibility()"
          tabindex="-1"
        >
          <mat-icon *ngIf="isPasswordVisible">visibility</mat-icon>
          <mat-icon *ngIf="!isPasswordVisible">visibility_off</mat-icon>
        </button>
      </mat-form-field>
      <mat-form-field appearance="fill" floatLabel="always">
        <mat-label>Password repeat</mat-label>
        <input
          formControlName="passwordRepeat"
          matInput
          [type]="isPasswordVisible ? 'text' : 'password'"
          [errorStateMatcher]="matcher"
        />
        <mat-error
          *ngIf="
            registrationForm.get('passwordRepeat').hasError('required') &&
            !registrationForm.hasError('equalFields')
          "
        >
          <strong>Password</strong> is required.
        </mat-error>
        <mat-error *ngIf="registrationForm.hasError('equalFields')">
          <strong>Passwords</strong> don't match.
        </mat-error>
        <button
          type="button"
          mat-icon-button
          matSuffix
          (click)="toggleVisibility()"
          tabindex="-1"
        >
          <mat-icon *ngIf="isPasswordVisible">visibility</mat-icon>
          <mat-icon *ngIf="!isPasswordVisible">visibility_off</mat-icon>
        </button>
      </mat-form-field>
      <button
        mat-raised-button
        color="primary"
        class="btn-submit"
        [disabled]="disabled"
      >
        Sign up
      </button>
    </form>
  `,
  styles: [
    `
      mat-form-field {
        display: block;
        margin-bottom: 5px;
      }
      .btn-submit {
        width: 100%;
        margin: auto;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  @Input() disabled = false;
  @Output() signUp = new EventEmitter<Credentials>();

  isPasswordVisible = false;
  matcher = new RegistrationErrorStateMatcher();

  registrationForm = this.fb.group(
    {
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required],
    },
    {
      validator: equalFieldsValidator('password', 'passwordRepeat'),
    }
  );

  constructor(private fb: FormBuilder) {}

  toggleVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  submit(): void {
    if (this.registrationForm.valid) {
      console.log('Valid! Proceed');
      this.signUp.emit(this.registrationForm.value);
    }
  }
}
