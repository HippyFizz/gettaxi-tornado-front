import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {User} from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  token: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.token = localStorage.getItem('auth_token');
    if (!this.token) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['home']);
    }
  }
}
