import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { UserListComponent } from './user-list/user-list';
import { UserService, MOCK_USERS_TOKEN } from './user-service';
import { HttpUserService } from './http-user-service';

@Component({
  selector: 'seed-app',
  directives: [
    UserListComponent
  ],
  template: `
  <h3>UserList</h3>
  <user-list></user-list>
  `,
  providers: [
    HTTP_PROVIDERS, 
    {
      provide: MOCK_USERS_TOKEN,
      useValue: [
        { name: 'モックユーザーです' }
      ]
    },
    UserService,
  ]
})
export class SeedApp {
}
