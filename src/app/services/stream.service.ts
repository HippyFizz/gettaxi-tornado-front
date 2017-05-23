import {Injectable} from '@angular/core';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import {WebSocketService} from './serve-socket.service';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/catch';
export interface Message {
  status: number;
  username: string;
  role: string;
  credentials: string;
}

@Injectable()
export class StreamService {
  public messages: Subject<object>;

  constructor(wsService: WebSocketService) {

    this.messages = <Subject<Message>>wsService.connect(environment.tornado_socket + '/users/websocket')
      .map((response: MessageEvent): Message => {
        let data = JSON.parse(response.data);
        return data;
      });
  }
}
