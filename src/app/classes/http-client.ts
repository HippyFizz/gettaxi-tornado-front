import {Http, Response, RequestOptions, ConnectionBackend, RequestOptionsArgs} from '@angular/http';
import {Observable} from 'rxjs/Observable';

export class HttpClient extends Http {
  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    defaultOptions.headers.append('Access-Control-Allow-Origin', '*');
    const token = localStorage.getItem('auth_token');
    if (token) {
      defaultOptions.headers.append('Authorization', token);
    }
    super(backend, defaultOptions);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.get(url, options);
  };

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return super.post(url, body, options);
  };

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return super.put(url, body, options);
  };

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.delete(url, options);
  };

  patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return super.patch(url, body, options);
  };

  head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.head(url, options);
  };

  options(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.options(url, options);
  };

}
