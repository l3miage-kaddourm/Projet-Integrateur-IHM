import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RoService {

	// private apiUrl = 'http://localhost:8080/employes/livreurs';
	apiUrl = 'https://jsonplaceholder.typicode.com/posts';

	constructor(private http: HttpClient) { }

	processData(data: any[][]): Observable<any[][]> {
		return this.http.post<any[][]>(this.apiUrl, data);
	}


}
