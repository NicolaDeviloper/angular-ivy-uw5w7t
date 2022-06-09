import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h1>🛺</h1>
    <button mat-raised-button color="accent" routerLink="/login">
      Clicca qui per Autenticarti
    </button>
`,
  styles: [
    `
      h1 {
        font-size: 5rem;
        margin-bottom: 10px;
      }
      :host {
        text-align: center;
        display: block;
      }
    `,
  ],
})
export class HelloComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
