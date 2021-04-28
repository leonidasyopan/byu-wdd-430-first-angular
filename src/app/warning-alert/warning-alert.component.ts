import { Component } from '@angular/core'

@Component({
  selector: 'app-warning-alert',
  template: `
  <p>This is a warning, watch out!
  `,
  styles: [
    `
    p {
      padding: 15px 20px;
      color: red;
      background-color: pink;
      border: 1px solid red;
      font-weight: bold;
    }
    `
  ]
})

export class WarningAlertComponent {

}
