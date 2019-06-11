import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from '../service/client.service';
import { Client } from '../model/client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-client-create',
    templateUrl: './client-create.component.html',
    styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

    @Input()
    clientDetails = new Client();

    idadvisor = this.activatedRoute.snapshot.params['id'];

    constructor(public service: ClientService, private activatedRoute: ActivatedRoute,
        public router: Router, ) {
    }

    createClient() {
        this.clientDetails.idavisor = this.idadvisor;
        console.log(this.clientDetails.idavisor);

        this.service.createClient(this.clientDetails).subscribe((data: {}) => {
            this.router.navigate(['/clients-list', this.idadvisor]);
        });
    }

    ngOnInit() {
    }

}
