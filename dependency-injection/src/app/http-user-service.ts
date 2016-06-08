import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { User } from './user-model';

@Injectable()
export class HttpUserService {

    constructor(private http: Http) {

    }

    list(): Promise<User[]> {
        return this.http.get('data/users.json')
            .toPromise()
            .then(resp => {
                return resp.json() as User[];
            });
    }
}