import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../model/account';
import { AccountService } from '../service/account.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { Client } from '../model/client';

@Component({
    selector: 'app-account-create',
    templateUrl: './account-create.component.html',
    styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

    @Input()
    accountDetails = new Account();

    idclient = this.activatedRoute.snapshot.params['id'];

    constructor(
        public service: AccountService,
        private activatedRoute: ActivatedRoute,
        public router: Router
    ) {

    }

    ngOnInit() { }

    addAccount() {
        this.accountDetails.idclient = this.idclient;
        this.service.createAccount(this.accountDetails).subscribe(() => {
            this.router.navigate(['/accounts-list', this.idclient]);
        });
    }

    goBack() {
        this.accountDetails.idclient = this.idclient;
        this.router.navigate(['/accounts-list', this.idclient]);
    }

}
