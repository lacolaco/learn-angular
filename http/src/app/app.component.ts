import { Component } from '@angular/core';

import { Http, URLSearchParams, Headers, Response } from '@angular/http';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  template: `
  <h1>Http</h1>

  <p>{{ message }}</p>
  `
})
export class MyApp {

  message = "";

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    const params = new URLSearchParams();
    params.set('type', 'sudo');
    params.set('key', 'fizz buzz');

    // /data.json?type=sudo&key=fizz buzz
    this.dataService.getData({
      search: params,
    })
      .then(data => { 
        this.message = data.foo;
      })
      .catch(error => {
        if (error instanceof Response) {
          console.log(error.status);
        } else {
          console.error(error);
        }
      });
  }
}
