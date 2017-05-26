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
    let data = JSON.stringify({
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
    let token = res.headers.get('Authorization');
    return token || {};
  }

  private handleError(error: Response | any) {
    let body = error.json() || '';
    let err = body.error || body;
    let errMsg = JSON.stringify({
        status_code: error.status,
        status_message: err
      })
    return Observable.throw(errMsg);
  }

  constructor(private http: HttpClient) {
  }

}
