import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {HttpClient} from '../classes/http-client';

@Injectable()
export class UserInfoService {
  getUserData(): Observable<object> {
    return this.http.get(
      environment.url + '/api/v1/users/current'
    ).map(this.extractData
    ).catch(this.handleError);

  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  constructor(private http: HttpClient) {
  }
}
