import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    updateOnManager: boolean;
    updateOnAdvisor: boolean;

    constructor(private activatedRoute: ActivatedRoute,
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

}
