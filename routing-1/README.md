## Routing-1

- RouterConfig
  - /home
  - /sub
  - ''
  - '**'
- routerLink
- Router
  - navigate
  - navigateByUrl  
- children
  - /detail/:id
  - ActivatedRoute


```
import { bootstrap } from '@angular/platform-browser-dynamic';
import { MyApp } from './app/app.component';

import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';

bootstrap(MyApp, [
    provideRouter(APP_ROUTES)
]);
```

```
import { Component, OnInit } from '@angular/core';

import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
  <h1>Routing</h1>

  <a routerLink="/home">Home (ng2)</a>
  <a [routerLink]="['sub']">Sub (ng2)</a>

  <a routerLink="/detail/111">111</a>
  <a routerLink="/detail/222" [queryParams]="{key: 'hogehoge'}">222</a>

  <button (click)="goToSub()">Sub</button>

  <router-outlet></router-outlet>

  <router-outlet name="second"></router-outlet>
  `,
  directives: [ ROUTER_DIRECTIVES ]
})
export class MyApp implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToSub() {
    // this.router.navigateByUrl('/sub?key=fugaguga');
    this.router.navigate(['sub'], {
      queryParams: { key: 'y'},
      fragment: 'agawgw'
    });
  }
}
```

```
import { RouterConfig } from '@angular/router';

import { HomeComponent } from './home.component';
import { DetailRootComponent } from './detail-root.component';
import { DetailComponent } from './detail.component'; 

export const APP_ROUTES: RouterConfig = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'detail',
        outlet: 'second',
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: ':id',
                component: DetailComponent
            }
        ]
    },
    {
        path: '**', // 必ず一番最後
        redirectTo: '/home'
    }
];
```

```
import {Component} from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'detail-root',
    template: `
    <h2>Detail Root</h2>

    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class DetailRootComponent {

}
```

```
import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';

import { Subscription } from 'rxjs';

// /detail/111?key=value
@Component({
    selector: 'detail',
    template: `
    <h2>Detail</h2>

    {{id}}: {{key}}
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class DetailComponent implements OnInit, OnDestroy {

    id: string;
    key: string;

    private sub: Subscription; 

    constructor(private route: ActivatedRoute, private router: Router) {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
        });

        this.router.routerState.queryParams.subscribe(query => {
            this.key = query['key'];
        });
    }

    ngOnInit() {
        // this.id = this.route.snapshot.params['id'];
        // this.key = this.router.routerState.snapshot.queryParams['key'];
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
```

```
import {Component} from '@angular/core';

@Component({
    selector: 'home',
    template: `
    <h2>Home</h2>
    `
})
export class HomeComponent {

}
```