import { Component } from '@angular/core';

import { UserListComponent } from '../user-list/user-list';
import { UserService, UserService2} from '../user-service';

@Component({
    selector: 'user-list-2',
    template: `
    <user-list></user-list>
    `,
    directives: [
        UserListComponent
    ],
    providers: [
        {
            provide: UserService,
            useClass: UserService2
        }
    ]
})
export class UserList2Component {
}