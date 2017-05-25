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

  users = false;
  rides = false;
  companies = false;

  showUserManagment() {
    this.users = true;
    this.rides = false;
    this.companies = false;
  }

  showRidesManagment() {
    this.users = false;
    this.rides = true;
    this.companies = false;
  }

  showCompaniesManagment() {
    this.users = false;
    this.rides = false;
    this.companies = true;
  }

  constructor(private getUserDataService: UserInfoService, private router: Router) {
  }

  getUserData(): void {
    this.getUserDataService.getUserData().subscribe(data => {
      this.user = new User(data['status'], data['username'], data['role'], data['credentials']);
      if (!this.user.status)
        this.router.navigate(['/login'])
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
