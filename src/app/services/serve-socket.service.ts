import {Subject, Observable, Subscription, Observer} from 'rxjs/Rx';
import {WebSocketSubject} from 'rxjs/observable/dom/WebSocketSubject';
import { ReconnectingWebSocket } from 'ng2-reconnecting-websocket/reconnecting-websocket';

import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';


@Injectable()
export class WebSocketService {
  private subject: Subject<MessageEvent>;

  public connect(url): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
    }

    return this.subject;
  }

  private create(url): Subject<MessageEvent> {
    const ws = new ReconnectingWebSocket(url);
    const observable = Observable.create((obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      ws.onopen = evt => {
        ws.send(JSON.stringify({token: localStorage.getItem('auth_token'), event: 'connected'}));
      };

      return ws.close.bind(ws);
    }).share();

    const observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      },
    };
    return Subject.create(observer, observable);
  }
}


