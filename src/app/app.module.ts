import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule, RequestOptions, XHRBackend} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {UserManagmentComponent} from './user-managment/user-managment.component';
import {RidesManagmentComponent} from './rides-managment/rides-managment.component';
import {CompaniesManagmentComponent} from './companies-managment/companies-managment.component';
import { HttpClient } from './classes/http-client';

const appRoutes: Routes = [
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
    component: AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserManagmentComponent,
    RidesManagmentComponent,
    CompaniesManagmentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: HttpClient,
      useFactory: (backend: XHRBackend, options: RequestOptions) => {
        return new HttpClient(backend, options);
      },
      deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
