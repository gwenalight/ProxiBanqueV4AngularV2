import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-account-show',
    templateUrl: './account-show.component.html',
    styleUrls: ['./account-show.component.css']
})
export class AccountShowComponent implements OnInit {

    id = this.activatedRoute.snapshot.params['id'];
    accountDetails: any = {};

    constructor(private service: AccountService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.service.getAccount(this.id).subscribe((data: {}) => {
            console.log(data);
            this.accountDetails = data;
        });
    }


}
