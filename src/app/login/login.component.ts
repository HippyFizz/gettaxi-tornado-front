import {Component, OnDestroy} from '@angular/core';
import {Http, Response} from '@angular/http';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import {Subscription} from 'rxjs/Subscription';

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

  constructor(private loginService: LoginService,  private router: Router) {
  }

  login(): void {
    this.subscription = this.loginService.loginUser(this.username, this.password).subscribe(user_token => {
      if (user_token) {
        localStorage.setItem('auth_token', user_token);
        this.router.navigate(['home']);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
