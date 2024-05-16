import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SimpleOrders } from '../planner/models/order.model';

@Injectable({
	providedIn: 'root'
})
export class SharedService {
	private ordersSource = new BehaviorSubject<SimpleOrders[]>([]);
	currentOrders = this.ordersSource.asObservable();

	updateOrders(orders: SimpleOrders[]): void {
		this.ordersSource.next(orders);
	}
}

