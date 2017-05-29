import {Component, OnInit, OnDestroy} from '@angular/core';
import {User} from '../classes/user';
import {Subscription} from 'rxjs/Subscription';
import {environment} from '../../environments/environment';
import {UserStreamService} from '../services/user-stream.service';
import {Router} from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css'],
  providers: [UserStreamService]
})
export class UserManagmentComponent implements OnInit, OnDestroy {
  editUserForm = new FormGroup ({
    password: new FormControl(),
    status: new FormControl(),
    username: new FormControl(),
    role: new FormControl(),
    credentials: new FormControl()
  });

  createUserForm = new FormGroup({
    password: new FormControl(),
    status: new FormControl(),
    username: new FormControl(),
    role: new FormControl(),
    credentials: new FormControl()
  })


  gotDataFromSocket = false;

  private subscription: Subscription;
  users: User[] = Array();
  detailed: User = null;
  detailed_before_changes: User = null;
  statuses = [
       {id: 11, name: "root_admin"},
       {id: 22, name: "admin_gett"},
       {id: 33, name: "manager_gett"},
       {id: 44, name: "dispatcher"},
       {id: 77, name: "super_user"},
     ];
  new_role = null;
  new_password = null;
  showPasswordChange = false;
  showNewPassword = false;
  username_exist = false;

  creatingNew = false;
  new_user: User = new User(true, '', '', '')

  checkIfUserModified() {
    if (this.detailed.role != this.detailed_before_changes.role
      || this.detailed.status != this.detailed_before_changes.status
      || this.detailed.credentials != this.detailed_before_changes.credentials
      || this.new_password) {
      return true;
    } else
      return false;
  }

  showEnteredPassword() {
      this.showNewPassword = true;
  }

  hideEnteredPassword() {
      this.showNewPassword = false;
  }

  show_hidePasswordChange() {
    this.showPasswordChange = !this.showPasswordChange;
  }

  showDetails(user) {
    this.detailed = user;
    this.detailed_before_changes = user;
    this.new_role = user.role
  };

  saveDetails(user): void {
    let message = {
      timestamp: Date.now(),
      token: localStorage.getItem('auth_token'),
      event: 'edit user',
      data: {changed_user: user, password: this.new_password}
    };
    console.log(message);
    for (let i = 0; i < this.users.length; i ++){
      if (this.users[i].username == user.username) {
        this.users.slice(i, i);
        break;
      }
    }
    this.socket.messages.next(message);
    this.setDefault();
  };

  createUser(user): void {
    let message = {
      timestamp: Date.now(),
      token: localStorage.getItem('auth_token'),
      event: 'user create',
      data: {created_user: user, password: this.new_password}
    };

    this.socket.messages.next(message);
    this.setDefault();
  }

  activateUser(user) {
    this.detailed.status = 1;
  }

  deactivateUser(user) {
    this.detailed.status = 0;
  }

  startCreatingNewUser() {
    this.creatingNew = !this.creatingNew;
  }

  checkIfUsernameExist(username) {
    let message = {
      timestamp: Date.now(),
      token: localStorage.getItem('auth_token'),
      event: 'username availability',
      data: {new_username: username}
    };
    this.socket.messages.next(message);
  }

  setDefault() {
    this.detailed = null;
    this.detailed_before_changes = null;
    this.creatingNew = false;
    this.new_user = new User(true, '', '', '');
    this.new_role = null;
    this.new_password = null;
    this.showPasswordChange = false;
    this.showNewPassword = false;

  }

  constructor(private socket: UserStreamService, private router: Router, private fb: FormBuilder) {
    this.createForms();
  }

  createForms() {
    this.editUserForm = this.fb.group({
      password: ['', [Validators.minLength(4), Validators.maxLength(24)]],
      status: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      role: ['', Validators.required],
      credentials: ['', Validators.required]
    });

    this.createUserForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      status: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      role: ['', Validators.required],
      credentials: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.socket.joinSocket();
    this.subscription = this.socket.messages.subscribe(msg => {
        if (msg.event === 'token expired') {
           localStorage.removeItem('auth_token');
           this.router.navigate(['/login']);
        } else if (msg.event === 'username availability') {
          if (msg.token)
            localStorage.setItem('auth_token', msg.token)
            this.username_exist = msg.data.username;
        } else if (msg.event === 'new users') {
           this.gotDataFromSocket = true;
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
      }, () => {
        this.gotDataFromSocket = false;
        this.subscription.unsubscribe();
        this.ngOnInit();
      }, () => {
        this.gotDataFromSocket = false;
        this.subscription.unsubscribe();
        this.ngOnInit();
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
