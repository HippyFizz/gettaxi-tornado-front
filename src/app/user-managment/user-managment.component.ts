import {Component, OnInit, OnDestroy} from '@angular/core';
import {User} from '../classes/user';
import {Subscription} from 'rxjs/Subscription';
import {environment} from '../../environments/environment';
import {StreamService} from '../services/stream.service';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css'],
  providers: [StreamService]
})
export class UserManagmentComponent implements OnInit, OnDestroy {
  users: User[] = Array();
  detailed: User = null;

  showDetails = function(user): void {
    this.detailed = user;
  }

  saveDetails = function(user): void {
    console.log(user);
    this.detailed = null;
  };

  constructor(private socket: StreamService) {
    socket.messages.subscribe(msg => {
      if (msg['users'] && msg['users'].length > 0) {
        for (let i = 0; i < msg['users'].length; i++) {
          let exist = false;
          const tmp_user = new User(
            msg['users'][i]['status'],
            msg['users'][i]['username'],
            msg['users'][i]['role'],
            msg['users'][i]['credentials']
          );
          for (let j = 0; j < this.users.length; j++) {
            if (this.users[j].username === tmp_user.username) {
              exist = true;
              if (this.users[j].status !== tmp_user.status
                || this.users[j].role !== tmp_user.role
                || this.users[j].credentials !== tmp_user.credentials) {
                this.users[j] = tmp_user;
              }
            }
          }
          if (!exist) {
            this.users.push(tmp_user);
          }
        }
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
