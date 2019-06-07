import { Component, OnInit, Input } from '@angular/core';
import { Advisor } from '../model/advisor';
import { AdvisorService } from '../service/advisor.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-advisor-create',
    templateUrl: './advisor-create.component.html',
    styleUrls: ['./advisor-create.component.css']
})
export class AdvisorCreateComponent implements OnInit {

    @Input()
    advisorDetails = new Advisor();


    constructor(
        public service: AdvisorService,
        public router: Router
    ) {

    }

    ngOnInit() { }

    addAdvisor() {
        this.service.createAdvisor(this.advisorDetails).subscribe((data: {}) => {
            this.router.navigate(['/advisors-list']);
        });
    }

}
