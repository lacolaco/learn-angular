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

        return this.http.get('/data.json', options)
            .toPromise()
            .then(response => response.json());
    }
}