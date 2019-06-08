import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manager } from '../model/manager';

//import { catchError } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})
export class ManagerService {

    // endpoint = 'http://localhost:3000';
    endpoint = 'http://localhost:8080/myapp';

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    getManager(id): Observable<Manager> {
        return this.http.get<Manager>(this.endpoint + '/managers' + id);
    }

    getManagers(): Observable<Manager[]> {
        return this.http.get<Manager[]>(this.endpoint + '/managers', this.httpOptions);
    }
    createManager(manager): Observable<Manager> {
        return this.http.post<Manager>(this.endpoint + '/managers', JSON.stringify(manager), this.httpOptions);
    }
    updateManager(manager): Observable<Manager> {
        return this.http.put<Manager>(this.endpoint + '/managers', JSON.stringify(manager), this.httpOptions);
    }
    deleteManager(id): Observable<Manager> {
        return this.http.delete<Manager>(this.endpoint + '/managers' + id);
    }
}