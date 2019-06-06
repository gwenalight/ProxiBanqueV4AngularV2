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

@NgModule({
    declarations: [
        AppComponent,
        ClientListComponent,
        ClientCreateComponent,
        ClientShowComponent,
        ClientEditComponent,
        LoginComponent,
        AdvisorCreateComponent
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
