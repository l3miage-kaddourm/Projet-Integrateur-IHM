import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SimpleOrders } from '../planner/models/order.model';

@Injectable({
	providedIn: 'root'
})
export class SharedService {
	private droppedOrdersSource = new BehaviorSubject<SimpleOrders[]>([]);
	currentDroppedOrders = this.droppedOrdersSource.asObservable();

	updateDroppedOrders(orders: SimpleOrders[]) {
		this.droppedOrdersSource.next(orders);
	}
}