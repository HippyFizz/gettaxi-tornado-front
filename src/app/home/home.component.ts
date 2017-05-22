import {Component, OnInit} from '@angular/core';
import {UserInfoService} from '../services/user-info.service';
import {Router} from '@angular/router';
import { User } from '../classes/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [UserInfoService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;

  constructor(private getUserDataService: UserInfoService, private router: Router) {
  }

  getUserData(): void {
    this.getUserDataService.getUserData().subscribe(data => {
      this.user = new User(data['status'], data['username'], data['role'], data['credentials']);
    });
  }

  logOut(): void {
    localStorage.removeItem('auth_token');
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.getUserData();
  }

}
