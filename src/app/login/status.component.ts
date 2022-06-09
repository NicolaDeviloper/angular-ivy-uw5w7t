import { Component, Input } from '@angular/core';
import { Status } from './models';

@Component({
  selector: 'app-status',
  template: `
    <div class="status-box" [ngSwitch]="status">
      <mat-spinner *ngSwitchCase="'pending'" [diameter]="20"></mat-spinner>
      <div *ngSwitchCase="'error'" class="status error">Error</div>
      <div *ngSwitchCase="'success'" class="status success">Success</div>
    </div>
  `,
  styles: [
    `
      .status-box {
        text-align: center;
        margin-top: 1rem;
      }
      .status {
        color: rgba(0, 0, 0, 0.5);
        border-radius: 6px;
        padding: 10px;
        font-size: 0.8rem;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
      }
      .error {
        background: orange;
      }
      .success {
        background: lightgreen;
      }
      mat-spinner {
        margin: auto;
      }
    `,
  ],
})
export class StatusComponent {
  @Input() status: Status = 'initial';
}
