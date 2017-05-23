import {Http, RequestOptions, ConnectionBackend} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class HttpClient extends Http {
  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    defaultOptions.headers.append('Access-Control-Allow-Origin', '*');
    const token = localStorage.getItem('auth_token');
    if (token) {
      defaultOptions.headers.append('Authorization', token);
    }
    super(backend, defaultOptions);
  }
}
