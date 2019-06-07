import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../model/Account';

@Injectable({
    providedIn: 'root'
})

export class AccountService {

    // endpoint = 'http://localhost:3000';
    endpoint = 'http://localhost:8080/myapp';

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    getAccounts(): Observable<Account[]> {
        return this.http.get<Account[]>(this.endpoint + '/accounts');
    }

    getAccount(id): Observable<Account> {
        return this.http.get<Account>(this.endpoint + '/accounts/' + id);
    }

    createAccount(account): Observable<Account> {
        return this.http.post<Account>(this.endpoint + '/accounts', account);
    }

    updateAccount(id, account): Observable<Account> {
        return this.http.put<Account>(this.endpoint + '/accounts/' + id, account);
    }

    deleteAccount(id) {
        return this.http.delete<Account>(this.endpoint + '/accounts/' + id)
    }


}