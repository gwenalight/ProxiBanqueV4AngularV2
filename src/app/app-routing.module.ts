import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientShowComponent } from './client-show/client-show.component';
import { LoginComponent } from './login/login.component';
import { AdvisorCreateComponent } from './advisor-create/advisor-create.component';
import { AdvisorListComponent } from './advisor-list/advisor-list.component';
import { AdvisorEditComponent } from './advisor-edit/advisor-edit.component';
import { AdvisorShowComponent } from './advisor-show/advisor-show.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { AccountShowComponent } from './account-show/account-show.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'create-client', component: ClientCreateComponent },
    { path: 'clients-list', component: ClientListComponent },
    { path: 'clients-list/:id', component: ClientListComponent },
    { path: 'client-edit/:id', component: ClientEditComponent },
    { path: 'client-show/:id', component: ClientShowComponent },
    { path: 'login', component: LoginComponent },
    { path: 'create-advisor', component: AdvisorCreateComponent },
    { path: 'advisors-list', component: AdvisorListComponent },
    { path: 'advisor-edit/:id', component: AdvisorEditComponent },
    { path: 'advisor-show/:id', component: AdvisorShowComponent },
    { path: 'create-account/', component: AccountCreateComponent },
    { path: 'create-account/:id', component: AccountCreateComponent },
    { path: 'accounts-list', component: AccountListComponent },
    { path: 'accounts-list/:id', component: AccountListComponent },
    { path: 'account-edit/:id', component: AccountEditComponent },
    { path: 'account-show/:id', component: AccountShowComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
