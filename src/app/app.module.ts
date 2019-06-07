import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientListComponent } from './client-list/client-list.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientShowComponent } from './client-show/client-show.component';
import { ClientEditComponent } from './client-edit/client-edit.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdvisorCreateComponent } from './advisor-create/advisor-create.component';
import { AdvisorEditComponent } from './advisor-edit/advisor-edit.component';
import { AdvisorListComponent } from './advisor-list/advisor-list.component';
import { AdvisorShowComponent } from './advisor-show/advisor-show.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountShowComponent } from './account-show/account-show.component';

@NgModule({
    declarations: [
        AppComponent,
        ClientListComponent,
        ClientCreateComponent,
        ClientShowComponent,
        ClientEditComponent,
        LoginComponent,
        AdvisorCreateComponent,
        AdvisorEditComponent,
        AdvisorListComponent,
        AdvisorShowComponent,
        AccountCreateComponent,
        AccountEditComponent,
        AccountListComponent,
        AccountShowComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
