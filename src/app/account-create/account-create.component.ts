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

    // @Input()
    // clientDetails = new Client();

    @Input()
    accountDetails = new Account();

    idClient = this.activatedRoute.snapshot.params['id'];

    constructor(
        public service: AccountService,
        private activatedRoute: ActivatedRoute,
        public router: Router
    ) {
        // this.clientDetails.account = new Account();
    }

    ngOnInit() { }

    addAccount() {
        this.service.createAccount(this.accountDetails).subscribe((data: {}) => {
            this.router.navigate(['/accounts-list/']);
        });
    }

}
