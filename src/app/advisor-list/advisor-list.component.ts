import { Component, OnInit } from '@angular/core';
import { AdvisorService } from '../service/advisor.service';
import { ManagerService } from '../service/manager.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-advisor-list',
    templateUrl: './advisor-list.component.html',
    styleUrls: ['./advisor-list.component.css']
})
export class AdvisorListComponent implements OnInit {

    advisor: any = [];
    idmanager = this.activatedRoute.snapshot.params['id'];

    constructor(
        public service: AdvisorService, private servicemanager: ManagerService,
        private activatedRoute: ActivatedRoute,
        private router: Router) { }



    ngOnInit() {
        this.loadAdvisors(this.idmanager)
        console.log(this.idmanager);
    }

    loadAdvisors(id: number) {
        return this.service.findAllAdvisorByIdManager(id).subscribe((data: {}) => {
            console.log(data);
            this.advisor = data;
        });

    }

    deleteAdvisor(id) {
        if (window.confirm('Voulez-vous supprimer ce conseiller?')) {
            this.service.deleteAdvisor(id).subscribe(data => {
                this.loadAdvisors(this.idmanager);
            })
        }
    }
}
