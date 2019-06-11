import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../service/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../model/client';
import { ClientService } from '../service/client.service';

@Component({
    selector: 'app-account-list',
    templateUrl: './account-list.component.html',
    styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

    identre = this.activatedRoute.snapshot.params['id'];

    account: any = [];

    clientDetails = this.serviceclient.getClient(this.identre);
    
    

    constructor(
        private service: AccountService, private serviceclient: ClientService, private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.loadAccounts(this.identre);
      
    }

    loadAccounts(id) {
        return this.service.getAccountById(id).subscribe((data: {}) => {
            console.log(data);
            this.account = data;
        });
    }

    deleteAccount(id: number) {
        if (window.confirm('Voulez-vous supprimer ce compte?')) {
            this.service.deleteAccount(id).subscribe(data => {
                this.loadAccounts(this.identre)
            })
        }
    }

    goBack() {
        
        console.log(this.clientDetails);
        this.router.navigate(['/client-show', this.identre]);
    }
}
