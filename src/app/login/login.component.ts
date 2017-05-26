import {Component, OnDestroy} from '@angular/core';
import {Http, Response} from '@angular/http';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import {Subscription} from 'rxjs/Subscription';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
})
export class LoginComponent implements OnDestroy {
  private subscription: Subscription;
  username: string;
  password: string;

  failLogin = '';

  LoginUserForm = new FormGroup ({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private loginService: LoginService,  private router: Router, private fb: FormBuilder) {
    this.createLoginForm();
  }

  createLoginForm() {
    this.LoginUserForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
    });
  }

  login(): void {
    this.subscription = this.loginService.loginUser(this.username, this.password).subscribe(user_token => {
      if (user_token) {
        localStorage.setItem('auth_token', user_token);
        this.router.navigate(['home']);
      }
    }, error => {
      let error_message = JSON.parse(error);
      switch (error_message.status_code) {
        case 403:
        console.log()
          if (error_message.status_message.message === 'No such username found') {
            this.failLogin = 'Such user is not registered.'
          } else if (error_message.status_message.message === 'Wrong password') {
            this.failLogin = 'Wrong credentials.'
          } else if (error_message.status_message.message === 'You must enter username and password') {
            this.failLogin = 'Username and password can\'t be empty.'
          }
          break
        case 500:
          this.failLogin = 'Internal server error, sorry.'
          break;
        default:
          this.failLogin = 'Server is under maintenance. \nPlease, try login later.'
          break;
      }
      console.log(error_message);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
