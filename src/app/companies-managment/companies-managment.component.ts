import {Component, OnInit, OnDestroy} from '@angular/core';
import {User} from '../classes/user';
import {Subscription} from 'rxjs/Subscription';
import {environment} from '../../environments/environment';
import {CompanyStreamService} from '../services/company-stream.service';
import {Router} from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-companies-managment',
  templateUrl: './companies-managment.component.html',
  styleUrls: ['./companies-managment.component.css'],
  providers: [CompanyStreamService]
})
export class CompaniesManagmentComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor(private socket: CompanyStreamService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
     this.socket.joinSocket();
     this.subscription = this.socket.messages.subscribe(msg => {
       console.log(msg);
     }, () => {
        this.subscription.unsubscribe();
        this.ngOnInit();
     }, () => {
        this.subscription.unsubscribe();
        this.ngOnInit();
     })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
