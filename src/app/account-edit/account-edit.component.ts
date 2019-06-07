import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../model/account';

@Component({
    selector: 'app-account-edit',
    templateUrl: './account-edit.component.html',
    styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {

    id = this.activatedRoute.snapshot.params['id'];
    accountDetails: any = {};

    constructor(private service: AccountService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.accountDetails = new Account();

    }

    ngOnInit() {
        this.service.getAccount(this.id).subscribe((data: {}) => {
            this.accountDetails = data;
        })
    }

    updateAccount() {
        if (window.confirm('Voulez-vous modifier ces informations ?')) {
            this.service.updateAccount(this.id, this.accountDetails).subscribe(data => {
                this.router.navigate(['/accounts-list'])
            })
        }
    }
}
