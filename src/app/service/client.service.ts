import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Client } from '../model/client';

@Injectable({
    providedIn: 'root'
})

export class ClientService {

    // endpoint = 'http://localhost:3000';
    endpoint = 'http://localhost:8080/myapp';

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }



    getClients(): Observable<Client[]> {
        return this.http.get<Client[]>(this.endpoint + '/clients', this.httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    getClient(id): Observable<Client> {
        return this.http.get<Client>(this.endpoint + '/clients/' + id)
            .pipe(
                catchError(this.handleError)
            )
    }

    createClient(client): Observable<Client> {
        return this.http.post<Client>(this.endpoint + '/clients', JSON.stringify(client), this.httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    updateClient(client): Observable<Client> {
        return this.http.put<Client>(this.endpoint + '/clients/', JSON.stringify(client), this.httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    deleteClient(id) {
        return this.http.delete<Client>(this.endpoint + '/clients/' + id, this.httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }

}