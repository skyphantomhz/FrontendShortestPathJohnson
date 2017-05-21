import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { FloydWarshall } from '../_model/FloydWarshall';


@Injectable()
export class FloydWarshallService {
    private api = 'http://localhost:8080/ShortestPathMVCRESTful';
    // private api = 'http://localhost:8080/shop-restful-service';

    constructor(public http: Http) {}

    post(item: FloydWarshall): Observable<FloydWarshall> {
        let body = JSON.stringify({
            numberofvertices: item.numberofvertices,
            adjacencymatrix: item.adjacencymatrix
        });
        let headers = new Headers({'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.api + '/floyd',body, options).map( (response: Response) => { return response.json()});
    }
}
