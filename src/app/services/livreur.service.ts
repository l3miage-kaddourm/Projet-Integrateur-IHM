import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeTour } from '../planner/models/livreur';


@Injectable({
	providedIn: 'root'
})
export class EmployeeTourDataService  {
	private apiUrl = '/apibackend';

	constructor(private http: HttpClient) { }

	getEmployeeTourData(): Observable<EmployeeTour> {
		return this.http.get<EmployeeTour>(this.apiUrl);
	}
}