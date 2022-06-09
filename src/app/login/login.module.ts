import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in.component';
import { SignUpComponent } from './sign-up.component';
import { StatusComponent } from './status.component';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [
    CommonModule, 
    MaterialModule, 
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    StatusComponent,
  ],
})
export class LoginModule {}
