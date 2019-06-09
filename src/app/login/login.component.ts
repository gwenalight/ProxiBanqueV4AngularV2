import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvisorService } from '../service/advisor.service';
import { Advisor } from '../model/Advisor';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    updateOnManager: boolean;
    updateOnAdvisor: boolean;
    advisorDetails: any = {};


    constructor(public serviceadvisor: AdvisorService, private activatedRoute: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
    }

    goToManager() {
        this.updateOnManager = true;
        this.updateOnAdvisor = false;
        // this.router.navigate(['/advisors-list']);
    }

    goToAdvisor() {
        this.updateOnAdvisor = true;
        this.updateOnManager = false;
        // this.router.navigate(['/clients-list']);
    }

    // advisorConnection(loginadvisor: HTMLInputElement, passwordadvisor: HTMLInputElement, ) {
    //     if ((loginadvisor.value === 'advisor1') && (passwordadvisor.value === 'advisor1')) {
    //         this.router.navigate(['/clients-list/', this.advisorDetails.id = 13]);
    //     } else {
    //         this.router.navigate(['/login']);
    //     }

    // }

}