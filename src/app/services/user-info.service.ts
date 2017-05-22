import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {Settings} from '../configuration/options';

@Injectable()
export class UserInfoService {

  constructor(private http: Http) {
  }

  getUserData(): Observable<object> {
    const settings = new Settings();
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Authorization', localStorage.getItem('auth_token'));
    return this.http.get(
      settings.url + '/api/v1/users/',
      {
        headers: headers
      }
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
}
