import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';
import { PlannerDataService } from '../../../services/planner-data.service';

@Component({
	selector: 'app-orders',
	templateUrl: './orders.component.html',
	styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
	orders: Order[] = [];
	showAll: boolean = false;
	constructor(private dataService: PlannerDataService) { }

	ngOnInit(): void {
		this.dataService.getOrders().subscribe({
			next: (data) => {
				this.orders = data;
				console.log(this.orders);
			},
			error: (error) => {
				console.error('There was an error!', error);
			}
		});
	}

	expandedOrderId: string | null = null;


	toggleOrderDetails(orderNum: string): void {
		this.expandedOrderId = this.expandedOrderId === orderNum ? null : orderNum;
	}

	toggleShowAll(): void {
		this.showAll = !this.showAll;
	}

}	