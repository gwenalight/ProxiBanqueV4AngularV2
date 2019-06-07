import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-account-list',
    templateUrl: './account-list.component.html',
    styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

    idclient = this.activatedRoute.snapshot.params['id'];

    account: any = [];

    constructor(
        public service: AccountService, private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.loadAccounts(this.idclient);
    }


    loadAccounts(idclient) {
        return this.service.getAccounts().subscribe((data: {}) => {
            console.log(data);
            this.account = data;
        })
    }

    deleteAccount(id: number) {
        if (window.confirm('Etes-vous sûr de vouloir supprimer ce compte?')) {
            this.service.deleteAccount(id).subscribe(data => {
                this.loadAccounts(this.idclient)
            })
        }
    }
}
