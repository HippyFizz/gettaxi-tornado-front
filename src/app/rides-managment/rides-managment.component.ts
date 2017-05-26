import {Component, OnInit, OnDestroy} from '@angular/core';
import {User} from '../classes/user';
import {Subscription} from 'rxjs/Subscription';
import {environment} from '../../environments/environment';
import {RideStreamService} from '../services/ride-stream.service';
import {Router} from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rides-managment',
  templateUrl: './rides-managment.component.html',
  styleUrls: ['./rides-managment.component.css'],
  providers: [RideStreamService]
})
export class RidesManagmentComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor(private socket: RideStreamService, private router: Router, private fb: FormBuilder) { }

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
