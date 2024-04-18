import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';

@Component({
	selector: 'app-orders',
	templateUrl: './orders.component.html',
	styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
	orders: Order[] = [];
	showAll: boolean = false;

	ngOnInit(): void {
		
		this.orders = [    // ... Generate mock orders
			...Array.from({ length: 20 }, (_, i) => ({
				orderNum: `ORD${i + 1}`,
				date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
				clientName: `Client ${i + 1}`,
				email: `client${i + 1}@example.com`,
				address: `1234 Elm Street ${i + 1}`,
				city: `City ${i + 1}`,
				postalCode: `1000${i}`.slice(-5)
			}))];
	}

	toggleShowAll(): void {
		console.log("test");
		this.showAll = !this.showAll;
	}
}	