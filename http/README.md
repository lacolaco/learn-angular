## Http

```ts
bootstrap(MyApp, [
  HTTP_PROVIDERS, // Httpのインスタンスを取得するためのプロバイダ群
  DataService
])
```

```ts
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';

@Injectable()
export class DataService {

    constructor(private http: Http) {
    }   

    getData(options: RequestOptionsArgs = {}): Promise<any> {

        const headers = new Headers();
        headers.set('X-My-Header', 'Pokemon Go');

        options.headers = headers;

        return this.http.get('/data.jso', options)
            .toPromise()
            .then(response => response.json());
    }
}
```

```ts
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

```
