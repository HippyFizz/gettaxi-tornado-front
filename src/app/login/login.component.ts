import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {LoginService} from '../services/login.service';

import {AppComponent} from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private loginService: LoginService) {
  }

  login(): void {
    this.loginService.loginUser(this.username, this.password).subscribe(function (user_token) {
      if (user_token) {
        localStorage.setItem('auth_token', user_token);
      }
    });
  }

  getToken(): string {
    return localStorage.getItem('auth_token');
  }

  ngOnInit() {
  }

}
