import {Http, RequestOptions, ConnectionBackend, RequestOptionsArgs, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Headers} from '@angular/http'

@Injectable()
export class HttpClient extends Http {
  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    defaultOptions.headers.append('Access-Control-Allow-Origin', '*');
    let token = localStorage.getItem('auth_token');
    if (token) {
      defaultOptions.headers.append('Authorization', token);
    }
    super(backend, defaultOptions);
  }

  _setCustomHeaders(options?: RequestOptionsArgs):RequestOptionsArgs{
    if(!options) {
      options = new RequestOptions({});
    }
    if(localStorage.getItem("auth_token")) {
      if (!options.headers) {
        options.headers = new Headers();
      }
      options.headers.set("Authorization", localStorage.getItem("auth_token"))
    }
    return options;
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    options = this._setCustomHeaders(options);
    return super.get(url, options)
  }

  post(url: string, data?: any, options?: RequestOptionsArgs): Observable<Response> {
    options = this._setCustomHeaders(options);
    return super.post(url, data, options)
  }

  put(url: string, data?: any, options?: RequestOptionsArgs): Observable<Response> {
    options = this._setCustomHeaders(options);
    return super.put(url, data, options)
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    options = this._setCustomHeaders(options);
    return super.delete(url, options)
  }

  patch(url: string, data?: any, options?: RequestOptionsArgs): Observable<Response> {
    options = this._setCustomHeaders(options);
    return super.patch(url, data, options)
  }

  head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    options = this._setCustomHeaders(options);
    return super.head(url, options)
  }

  options(url: string, options?: RequestOptionsArgs): Observable<Response> {
    options = this._setCustomHeaders(options);
    return super.options(url, options)
  }
}
