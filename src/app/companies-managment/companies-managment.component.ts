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
  companies: Object[] = new Array()
  no_companies_to_approve = false;
  gotDataFromSocket = false;
  checkingCompany: Object = null;
  checkingCompanyKeys = [];
  constructor(private socket: CompanyStreamService, private router: Router, private fb: FormBuilder) { }

  showCompany(company) {
    this.checkingCompany = company;
    Object.keys(company).forEach((key,index) => {
      this.checkingCompanyKeys.push(key)
    });
  }

  confirmCompany(company) {
    let message = {
      timestamp: Date.now(),
      token: localStorage.getItem('auth_token'),
      event: 'approve company',
      data: {company_id: company.id}
    };
    this.socket.messages.next(message);
    this.setDefault();
  }

  setDefault() {
    this.companies = [];
    this.checkingCompany = null;
    this.checkingCompanyKeys = [];
  }

  ngOnInit() {
     this.socket.joinSocket();
     this.subscription = this.socket.messages.subscribe(msg => {
       this.gotDataFromSocket = true;
       if (msg.data && msg.data.length > 0) {
         this.no_companies_to_approve = false;
         for (let i = 0; i < msg.data.length; i ++) {
           let keys = []
           Object.keys(msg.data[i]).forEach((key,index) => {
             keys.push(key)
            });
           let exist = false;
           for (let j = 0; j < this.companies.length; j++) {
                for (let j = 0; j < this.companies.length; j ++) {
                  if (this.companies[j]['id'] == msg.data[i]['id']) {
                    exist = true;
                    let changed = false;
                    for (let key of keys)
                      if (this.companies[j][key] !== msg.data[i][key])
                        changed = true

                    if (changed)
                      this.companies[j] = msg.data[i];
                  }
                }
              }
            if (!exist) {
              this.companies.push(msg.data[i]);
            }
         }
         console.log(this.companies);
       } else if (msg.data && msg.data.length == 0) {
         this.no_companies_to_approve = true;
       }
     }, () => {
        this.gotDataFromSocket = false;
        this.subscription.unsubscribe();
        this.ngOnInit();
     }, () => {
        this.gotDataFromSocket = false;
        this.subscription.unsubscribe();
        this.ngOnInit();
     })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
