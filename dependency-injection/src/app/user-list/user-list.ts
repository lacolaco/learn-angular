import { Component } from '@angular/core';

import { UserService } from '../user-service';

@Component({
    selector: 'user-list',
    template: `
    <ul>
        <li *ngFor="let user of users">{{ user.name }}</li>
    </ul>  
    `,
    providers: [
    ]
})
export class UserListComponent {
    users = [];
    userService: UserService;
    constructor(userService: UserService) {
        this.userService = userService;
    }

    ngOnInit() {
        this.userService.list()
            .then(users => {
                this.users = users;
            });
    }
}