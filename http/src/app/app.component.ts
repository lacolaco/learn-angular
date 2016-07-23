import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Http</h1>

  <p>{{ message }}</p>
  `
})
export class MyApp {

  message = "";
}
