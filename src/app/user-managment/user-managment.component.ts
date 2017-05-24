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

  showDetails(user) {
    this.detailed = user;
  };

  saveDetails(user): void {
    let message = {
      timestamp: Date.now(),
      token: localStorage.getItem('auth_token'),
      event: 'edit user',
      data: JSON.stringify(user)
    };
    console.log(message);
    this.socket.messages.next(message);
    this.detailed = null;
  };

  constructor(private socket: StreamService) {
    socket.messages.subscribe(msg => {
        if (msg.data.length > 0) {
          for (let i = 0; i < msg.data.length; i++) {
            let exist = false;
            const tmp_user = new User(
              msg.data[i]['status'],
              msg.data[i]['username'],
              msg.data[i]['role'],
              msg.data[i]['credentials']
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
      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
