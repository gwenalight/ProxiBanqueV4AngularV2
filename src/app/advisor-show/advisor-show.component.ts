import { Component, OnInit } from '@angular/core';
import { AdvisorService } from '../service/advisor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-advisor-show',
    templateUrl: './advisor-show.component.html',
    styleUrls: ['./advisor-show.component.css']
})
export class AdvisorShowComponent implements OnInit {

    id = this.activatedRoute.snapshot.params['id'];
    advisorDetails: any = {};

    constructor(private service: AdvisorService, private activatedRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.service.getAdvisor(this.id).subscribe((data: {}) => {
            this.advisorDetails = data;
        });
    }

    gotoList() {
        this.router.navigate(['/advisors-list']);
        return false;
    }

}
