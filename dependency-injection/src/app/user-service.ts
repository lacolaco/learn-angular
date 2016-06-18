import { Inject, OpaqueToken } from '@angular/core';
import { User } from './user-model';

export const MOCK_USERS_TOKEN = new OpaqueToken('mockUsers');

export class UserService {
    users: User[]

    constructor(@Inject(MOCK_USERS_TOKEN) users: User[]) {
        this.users = users;
    }
    
    list(): Promise<User[]> {
        return Promise.resolve(this.users);
    }
}

export class UserService2 {

    list(): Promise<User[]> {
        return Promise.resolve([
            { name: 'マスター・ヨーダ' },
            { name: 'マスター・ウィンドゥ' },
            { name: 'オビ=ワン・ケノービ' },
        ]);
    }
}