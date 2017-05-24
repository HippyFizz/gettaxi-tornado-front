import {Injectable} from '@angular/core';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import {WebSocketService} from './serve-socket.service';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/catch';

export interface Message {
  timestamp: any;
  token: any;
  event: any;
  data: any;
}

@Injectable()
export class StreamService {
  public messages: Subject<Message>;

  constructor(wsService: WebSocketService) {
    this.messages = <Subject<Message>>wsService.connect(environment.tornado_socket + '/users/websocket')
      .map((response: MessageEvent): Message => {
        let data = JSON.parse(response.data);
        return {
          timestamp: Date.now(),
          token: localStorage.getItem('auth_token'),
          event: 'new data from server',
          data: data.message
        };
      })
      .retryWhen((errors) => {
        console.log(errors);
        return errors.delay(200);
      });
  }
}
