import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';

@Component({
    selector: 'app-client-list',
    templateUrl: './client-list.component.html',
    styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

    client: any = [];

    constructor(private service: ClientService) { }

    ngOnInit() {
        this.loadClients();
    }

    loadClients() {
        return this.service.getClients().subscribe((data: {}) => {
            console.log(data);
            this.client = data;
        });

    }

    getClient(id: number) {
        return this.service.getClient(id).subscribe((data: {}) => {
            console.log(data);
            this.client = data;
        });
    }

    deleteClient(id: number) {
        if (window.confirm('Voulez-vous supprimer ce client ?')) {
            this.service.deleteClient(id).subscribe(data => {
                this.loadClients()
            })
        }
    }
}