import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {HttpClient} from '../classes/http-client';
import {User} from '../classes/user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';

@Injectable()
export class LoginService {
  loginUser(log, pass): Observable<string> {
    const data = JSON.stringify({
      'username': log,
      'password': pass,
    });
    return this.http.post(
      environment.url + '/api/v1/auth',
      data
    ).map(this.extractData
    ).catch(this.handleError);
  }

  private extractData(res: Response) {
    const token = res.headers.get('Authorization');
    return token || {};
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
