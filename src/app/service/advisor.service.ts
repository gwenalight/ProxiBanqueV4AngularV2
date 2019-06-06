import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advisor } from '../model/Advisor';

@Injectable({
    providedIn: 'root'
})

export class AdvisorService {

    endpoint = 'http://localhost:3000';
    // endpoint = 'http://localhost:8080/myapp';

    constructor(private http: HttpClient) { }



    getAdvisors(): Observable<Advisor[]> {
        return this.http.get<Advisor[]>(this.endpoint + '/advisors')
    }

    getAdvisor(id): Observable<Advisor> {
        return this.http.get<Advisor>(this.endpoint + '/advisors/' + id)
    }

    createAdvisor(advisor): Observable<Advisor> {
        return this.http.post<Advisor>(this.endpoint + '/advisors', JSON.stringify(advisor))
    }

    updateAdvisor(id, advisor): Observable<Advisor> {
        return this.http.put<Advisor>(this.endpoint + '/advisors/' + id, JSON.stringify(advisor))
    }

    deleteAdvisor(id) {
        return this.http.delete<Advisor>(this.endpoint + '/advisors/' + id)
    }


}