import { Component, OnInit, Input } from '@angular/core';
import { Advisor } from '../model/advisor';
import { AdvisorService } from '../service/advisor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-advisor-create',
    templateUrl: './advisor-create.component.html',
    styleUrls: ['./advisor-create.component.css']
})
export class AdvisorCreateComponent implements OnInit {

    @Input()
    advisorDetails = new Advisor();

    idman = this.activatedRoute.snapshot.params['id'];

    constructor(
        public service: AdvisorService,
        private activatedRoute: ActivatedRoute,
        public router: Router
    ) {

    }



    ngOnInit() {
    }

    addAdvisor() {
        this.advisorDetails.idmanager = this.idman;
        console.log(this.advisorDetails.idmanager);
        this.service.createAdvisor(this.advisorDetails).subscribe((data: {}) => {
            this.router.navigate(['/advisors-list', this.idman]);
        });
    }

}
