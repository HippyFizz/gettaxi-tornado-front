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
export class UserStreamService {

  public messages: Subject<Message>;

  constructor(public wsService: WebSocketService) {
  }

  joinSocket() {
    this.messages = <Subject<Message>>this.wsService.connect(environment.tornado_socket + '/users/websocket')
      .map((response: MessageEvent): Message => {
        let data = JSON.parse(response.data);
        return {
          timestamp: Date.now(),
          token: data.token,
          event: data.event,
          data: data.message
        };
      })
  }
}
