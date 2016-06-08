import { Component } from '@angular/core';

import { UserListComponent } from './user-list/user-list';
import { UserService } from './user-service';

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
    UserService
  ]
})
export class SeedApp {
}
