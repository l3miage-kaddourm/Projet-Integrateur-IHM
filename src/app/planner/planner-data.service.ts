// src/app/planner/services/planner-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BoxInfo } from './models/box-info.model';

@Injectable({
	providedIn: 'root'
})
export class PlannerDataService {
	private apiUrl = 'http://yourbackend/api/boxes'; // URL to your backend

	// constructor(private http: HttpClient) { }
	constructor() { }

	//   getBoxInfo(): Observable<BoxInfo[]> {
	//     return this.http.get<BoxInfo[]>(this.apiUrl);
	//   }

	getBoxInfo(): Observable<BoxInfo[]> {
		const localData: BoxInfo[] = [
		  { title: 'Orders', count: 16, icon: 'assets/icons/order.png'},
		  { title: 'Box', count: 24, icon: 'assets/icons/box.png'},
		  { title: 'Delivery Person', count: 12, icon: 'assets/icons/delivery.png',},
		  { title: 'Truck', count: 4, icon: 'assets/icons/truck.png',},
		];
	
		return of(localData); // Simulate an asynchronous Observable
	  }
}