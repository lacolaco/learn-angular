import { User } from './user-model';

export class UserService {

    list(): User[] {
        return [
            { name: 'ダース・モール' },
            { name: 'ドゥークー伯爵' },
            { name: 'グリーバス将軍' },
            { name: 'ダース・ベイダー' },
        ];
    }
}

export class UserService2 {

    list(): User[] {
        return [
            { name: 'マスター・ヨーダ' },
            { name: 'マスター・ウィンドゥ' },
            { name: 'オビ=ワン・ケノービ' },
        ];
    }
}