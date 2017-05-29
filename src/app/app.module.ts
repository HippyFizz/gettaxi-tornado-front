import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule, JsonpModule, RequestOptions, XHRBackend} from '@angular/http';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {UserManagmentComponent} from './user-managment/user-managment.component';
import {RidesManagmentComponent} from './rides-managment/rides-managment.component';
import {CompaniesManagmentComponent} from './companies-managment/companies-managment.component';
import {HttpClient} from './classes/http-client';
import {WebSocketService} from './services/serve-socket.service';
import {ReactiveFormsModule} from '@angular/forms';
import { UsersPipe } from './pipes/users.pipe';
import { CompaniesPipe } from './pipes/companies.pipe';
import { RidesPipe } from './pipes/rides.pipe';

export function httpFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
  return new HttpClient(backend, defaultOptions);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserManagmentComponent,
    RidesManagmentComponent,
    CompaniesManagmentComponent,
    UsersPipe,
    CompaniesPipe,
    RidesPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: HttpClient,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    },
    WebSocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
