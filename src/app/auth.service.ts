import { Injectable } from '@angular/core';
import { Observable, of, switchMap, timer } from 'rxjs';
import { Credentials } from './login/models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  signIn(credentials: Credentials): Observable<boolean> {
    const success = Math.random() > 0.5;
    const response = success ? of(true) : of(true);
    return timer(2000).pipe(switchMap(() => response));
  }

  signUp(credentials: Credentials): Observable<boolean> {
    const success = Math.random() > 0.5;
    const response = success ? of(true) : of(true);
    return timer(2000).pipe(switchMap(() => response));
  }
}
