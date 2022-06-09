import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `  
  <mat-toolbar>
  
    <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
      <mat-icon>menu</mat-icon>
    </button>
    
    <span>
    <a mat-raised-button routerLink="/" title="{{ name + ' versione ' + version }}">La mia prima Angular App
    </a>
    </span>

    <span class="example-spacer"></span>
    <button mat-icon-button class="example-icon favorite-icon" aria-label="heart icon">
      <mat-icon>favorite</mat-icon>
    </button>
    
    <button mat-icon-button class="example-icon" aria-label="share icon">
      <mat-icon>share</mat-icon>
    </button>

</mat-toolbar>`,
  styles: [
    `
    .example-spacer {
      flex: 1 1 auto;
    }
  `,
  ],
})
export class MenuComponent {
  name: string = 'Angular ';
  version: number = Number(VERSION.major);
}
