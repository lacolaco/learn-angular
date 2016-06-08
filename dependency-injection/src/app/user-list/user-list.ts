import { Component } from '@angular/core';

import { UserService } from '../user-service';

@Component({
    selector: 'user-list',
    template: `
    <ul>
        <li *ngFor="let user of users">{{ user.name }}</li>
    </ul>  
    `
})
export class UserListComponent {
    users = [];

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.users = this.userService.list();
    }
}