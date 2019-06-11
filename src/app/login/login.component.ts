import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvisorService } from '../service/advisor.service';
import { ManagerService } from '../service/manager.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    updateOnManager: boolean;
    updateOnAdvisor: boolean;
    advisorDetails: any = {};
    managerDetails: any = {};



    constructor(public serviceadvisor: AdvisorService, private servicemanager: ManagerService, private activatedRoute: ActivatedRoute,
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

    advisorConnection(loginadvisor: HTMLInputElement, passwordadvisor: HTMLInputElement, ) {


        this.serviceadvisor.getAdvisorByLogin(loginadvisor.value).subscribe((data: {}) => {
            console.log(data);
            this.advisorDetails = data;
            this.passwordverification(passwordadvisor);
        });

        console.log(loginadvisor.value);

    }

    passwordverification(passwordverification: any) {

        if (this.advisorDetails.password === passwordverification.value) {

            console.log("marche");

            this.router.navigate(['/clients-list/', this.advisorDetails.id]);
        }
        else {
            this.router.navigate(['/login']);
            console.log("retour");
        }
    }




    managerConnection(loginmanager: HTMLInputElement, passwordmanager: HTMLInputElement) {


        this.servicemanager.getManagerByLogin(loginmanager.value).subscribe((data: {}) => {
            console.log(data);
            this.managerDetails = data;
            this.passwordverificationmanager(passwordmanager);
        });

        console.log(loginmanager.value);

    }

    passwordverificationmanager(passwordverification: any) {

        if (this.managerDetails.password === passwordverification.value) {

            console.log("marche");

            this.router.navigate(['/advisors-list/', this.managerDetails.id]);
        }
        else {
            this.router.navigate(['/login']);
            console.log("retour");
        }



    }

}

