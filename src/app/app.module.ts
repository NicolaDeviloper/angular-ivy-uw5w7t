import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.module';
import { MenuComponent } from './menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', component: HelloComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, HelloComponent, MenuComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
