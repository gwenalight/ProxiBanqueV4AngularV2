import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientShowComponent } from './client-show/client-show.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'create-client', component: ClientCreateComponent },
    { path: 'clients-list', component: ClientListComponent },
    { path: 'client-edit/:id', component: ClientEditComponent },
    { path: 'client-show/:id', component: ClientShowComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
