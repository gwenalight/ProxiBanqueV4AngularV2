import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../service/client.service';

@Component({
    selector: 'app-client-show',
    templateUrl: './client-show.component.html',
    styleUrls: ['./client-show.component.css'],
    providers: [ClientService]
})
export class ClientShowComponent implements OnInit {


    id = this.activatedRoute.snapshot.params['id'];
    clientDetails: any = {};


    constructor(private service: ClientService,
        private activatedRoute: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        this.service.getClient(this.id).subscribe((data: {}) => {
            console.log(data);
            this.clientDetails = data;
        });
    }

    gotoList() {
        this.router.navigate(['/clients-list', this.clientDetails.idavisor]);
        return false;
    }

}
