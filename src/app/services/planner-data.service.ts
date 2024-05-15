import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
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


	private formatAddress(adresse: { adresse: string, codePostal: string, ville: string }): string {
		return `${adresse.adresse}, ${adresse.codePostal} ${adresse.ville}`;
	}

	// getClientsAdresses(): Observable<string[]> {
	// 	return this.getOrders().pipe(
	// 		map(orders => orders.map(order => this.formatAddress(order.client.adresse)))
	// 	);
	// }

	getClientsAddresses(): Observable<string[]> {
		return this.getOrders().pipe(
			map(orders => orders.map(order => this.formatAddress(order.client.adresse)))
		);
	}


	getDeliveryPersonnelInfo() { }

	getEntrepotAdress() { }

	// updateBackend() {
	//     this.dataService.updateTours(this.tours).subscribe({
	//         next: (response) => console.log('Update successful', response),
	//         error: (error) => console.error('Update failed', error)
	//     });
	// }
}