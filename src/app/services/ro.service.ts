import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RoService {

	private apiUrl = '/api'; 

	constructor(private http: HttpClient) { }

	getData(): Observable<any> {
		return this.http.get<any>(`${this.apiUrl}`);
	}

	postData(data: any): Observable<any> {
		return this.http.post<any>(`${this.apiUrl}/planner/planif`, data);
	}
}