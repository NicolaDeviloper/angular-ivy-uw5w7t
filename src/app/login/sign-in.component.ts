import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Credentials } from './models';

// Login
@Component({
  selector: 'app-sign-in',
  template: `
    <form #form="ngForm" (ngSubmit)="form.valid && signIn.emit(form.value)">
      <mat-form-field appearance="fill" floatLabel="always">
        <mat-label>Email</mat-label>
        <mat-icon
          matPrefix
          color="primary"
          style="vertical-align: middle; margin-right: 5px"
          >person</mat-icon
        >
        <input
          ngModel
          name="email"
          type="text"
          matInput
          email
          required
          #controllaEmail="ngModel"
        />
        <mat-error *ngIf="controllaEmail.hasError('email')">
          Per favore inserisci un email valida
        </mat-error>
      </mat-form-field>
      <mat-form-field appearance="fill" floatLabel="always">
        <mat-label>Password</mat-label>
        <mat-icon
          matPrefix
          color="primary"
          style="vertical-align: bottom; margin-right: 5px"
          >lock</mat-icon
        >
        <input
          ngModel
          name="password"
          matInput
          required
          [type]="isPasswordVisible ? 'text' : 'password'"
        />
        <button
          type="button"
          mat-icon-button
          matSuffix
          (click)="toggleVisibility()"
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
        Sign in
      </button>
    </form>
  `,
  styles: [
    `
      mat-form-field {
        display: block;
      }
      .btn-submit {
        width: 100%;
        margin: auto;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  isPasswordVisible = false;
  @Input() disabled = false;
  @Output() signIn = new EventEmitter<Credentials>();

  toggleVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
