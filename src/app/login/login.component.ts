import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthService } from '../auth.service';
import { Credentials, Mode, Status } from './models';

@Component({
  selector: 'app-login',
  template: `
    <mat-card>
      <nav mat-tab-nav-bar mat-align-tabs="center">
        <a
          mat-tab-link
          (click)="mode$.next('signin')"
          [active]="(mode$ | async) === 'signin'"
        >
          Login
        </a>
        <a
          mat-tab-link
          (click)="mode$.next('signup')"
          [active]="(mode$ | async) === 'signup'"
        >
          Register
        </a>
      </nav>

      <app-sign-in
        *ngIf="(mode$ | async) === 'signin'"
        (signIn)="test($event)"
        [disabled]="(status$ | async) === 'pending'"
      ></app-sign-in>

      <app-sign-up
        *ngIf="(mode$ | async) === 'signup'"
        (signUp)="test($event)"

        [disabled]="(status$ | async) === 'pending'"
      ></app-sign-up>

     
  <mat-card-content>
        <app-status [status]="status$ | async"></app-status>
      </mat-card-content>
 
 
 </mat-card>
  `,
  styles: [
    `
      app-sign-in,
      app-sign-up,
      mat-card-content {
        display: block;
        padding-left: 1rem;
        padding-right: 1rem;
        margin-top: 1rem;
      }
      mat-card {
        margin: 2rem auto;
        max-width: 400px;
        padding-left: 0;
        padding-right: 0;
      }
    `,
  ],
})
export class LoginComponent implements OnInit, OnDestroy {
  // States
  public status$ = new BehaviorSubject<Status>('initial');
  public mode$ = new BehaviorSubject<Mode>('signin');
  // Events
  public signIn$ = new Subject<Credentials>();
  public signUp$ = new Subject<Credentials>();
  private destroy$ = new Subject<void>();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }

  ngOnInit() {}

  test(x) {
    console.log(x);
  }
}
