import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { JohnsonsAlgorithm } from '../_model/johnsonsAlgorithm';

@Injectable()
export class johnsonsAlgorithmService {
    private api = 'http://localhost:8080/FindPathAlgorithm';
    // private api = 'http://localhost:8080/shop-restful-service';

    constructor(public http: Http) {}

    post(item: JohnsonsAlgorithm): Observable<JohnsonsAlgorithm> {
        let body = JSON.stringify({
            numberofvertices: item.numberofvertices,
            adjacencymatrix: item.adjacencymatrix
        });
        let headers = new Headers({'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.api + '/johnson',body, options).map( (response: Response) => { return response.json()});
    }
}
