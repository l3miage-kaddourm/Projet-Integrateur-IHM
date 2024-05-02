import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BoxInfo } from '../planner/models/box-info.model';

@Injectable({
	providedIn: 'root'
})
export class PlannerDataService {
	// private apiUrl = 'http://localhost:8080/employes/livreurs';
	apiUrl = 'https://jsonplaceholder.typicode.com/posts';

	constructor(private http: HttpClient) { }

	getDataTest(): Observable<any> {
		return this.http.get(this.apiUrl);
	}

	getData(): Observable<any> {
		return this.http.get(this.apiUrl);
	}

	getBoxInfo(): Observable<BoxInfo[]> {
		const localData: BoxInfo[] = [
			{ title: 'Orders', count: 16, icon: 'assets/icons/order.png' },
			{ title: 'Box', count: 24, icon: 'assets/icons/box.png' },
			{ title: 'Delivery Person', count: 12, icon: 'assets/icons/delivery.png', },
			{ title: 'Truck', count: 4, icon: 'assets/icons/truck.png', },
		];

		return of(localData);
	}
}