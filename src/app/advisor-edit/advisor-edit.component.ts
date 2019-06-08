import { Component, OnInit } from '@angular/core';
import { AdvisorService } from '../service/advisor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Advisor } from '../model/advisor';

@Component({
    selector: 'app-advisor-edit',
    templateUrl: './advisor-edit.component.html',
    styleUrls: ['./advisor-edit.component.css']
})
export class AdvisorEditComponent implements OnInit {

    id = this.activatedRoute.snapshot.params['id'];
    advisorDetails: any = {};

    constructor(private service: AdvisorService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.advisorDetails = new Advisor();

    }

    ngOnInit() {
        this.service.getAdvisor(this.id).subscribe((data: {}) => {
            this.advisorDetails = data;
        })
    }

    updateAdvisor() {
        if (window.confirm('Voulez-vous modifier ces informations ?')) {
            this.service.updateAdvisor(this.advisorDetails).subscribe(data => {
                this.router.navigate(['/advisors-list']) //this.advisorsDetails.idmanager
            })
        }
    }
}   