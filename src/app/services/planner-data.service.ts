import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BoxInfo } from '../planner/models/box-info.model';
import { DeliveryPerson } from '../planner/models/delivery-person.model';
import { Order } from '../planner/models/order.model';

@Injectable({
	providedIn: 'root'
})
export class PlannerDataService {
	private apiUrl = '/apibackend';

	constructor(private http: HttpClient) { }

	getData(): Observable<any> {
		return this.http.get(this.apiUrl);
	}

	getOrders(): Observable<Order[]> {
		return this.http.get<Order[]>(`${this.apiUrl}/commande/commandes`);
	}

	getDeliveryPersons() {
		return this.http.get<DeliveryPerson[]>(`${this.apiUrl}/employe/livreurs`);
	}



	getClientsAdresses() { }

	getDeliveryPersonnelInfo() { }

	getEntrepotAdress() { }

	// updateBackend() {
	//     this.dataService.updateTours(this.tours).subscribe({
	//         next: (response) => console.log('Update successful', response),
	//         error: (error) => console.error('Update failed', error)
	//     });
	// }
}