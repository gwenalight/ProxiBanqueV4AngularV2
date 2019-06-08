import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../model/account';
import { AccountService } from '../service/account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountListComponent } from '../account-list/account-list.component';
// import { Client } from '../model/client';

@Component({
    selector: 'app-account-create',
    templateUrl: './account-create.component.html',
    styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

    @Input()
    accountDetails = new Account();
    alc: AccountListComponent;
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
        this.service.createAccount(this.accountDetails).subscribe((data: {}) => {
            this.router.navigate(['/accounts-list', this.idclient]);
        });
    }

}
