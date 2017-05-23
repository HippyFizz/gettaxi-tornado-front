import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AppComponent} from './app.component';

export const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'Heroes List'}
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  },
];
