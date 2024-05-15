import { Component, OnInit } from '@angular/core';
import { BoxInfo } from '../../models/box-info.model';
import { PlannerDataService } from '../../../services/planner-data.service';
import { DeliveryPerson } from '../../models/delivery-person.model';
import { Observable } from 'rxjs';
import { Order } from '../../models/order.model';

@Component({
	selector: 'app-planner-dashboard',
	templateUrl: './planner-dashboard.component.html',
	styleUrl: './planner-dashboard.component.css'
})
export class PlannerDashboardComponent implements OnInit {
	boxes: BoxInfo[] = [];

	constructor(private plannerDataService: PlannerDataService) { }
	deliveryPersons: DeliveryPerson[] = [];
	deliveryPersonCount: number = 0;

	orders: Order[] = [];
	orderCount: number = 0;
	totalProductsCount: number = 0;
	openOrders: Order[] = [];
	openOrderCount: number = 0;
	plannedOrdersCount: number = 0;
	inDeliveryOrdersCount: number = 0;
	deliveredOrdersCount: number = 0;


	ngOnInit(): void {
		this.loadDeliveryPersons();
		this.loadOrders();

		this.boxes = [
			{ title: 'Orders', count: this.orderCount, icon: 'assets/icons/order.png' },
			{ title: 'Products Count', count: this.totalProductsCount, icon: 'assets/icons/box.png' },
			{ title: 'Delivery Persons', count: this.deliveryPersonCount, icon: 'assets/icons/delivery.png', },
			{ title: 'Trucks', count: 4, icon: 'assets/icons/truck.png', },
			{ title: 'Pending Orders', count: this.openOrderCount, icon: 'assets/icons/pending.png', },
			{ title: 'Planned Orders', count: this.plannedOrdersCount, icon: 'assets/icons/purchase-order.png', },
			{ title: 'In Delivery Orders', count: this.inDeliveryOrdersCount, icon: 'assets/icons/traveling.png', },
			{ title: 'Delivered Orders', count: this.deliveredOrdersCount, icon: 'assets/icons/check.png', },

		];
	}

	loadDeliveryPersons(): void {
		this.plannerDataService.getDeliveryPersons().subscribe((data: DeliveryPerson[]) => {
			this.deliveryPersons = data;
			this.deliveryPersonCount = data.length;
		}, error => {
			console.error('Error fetching delivery persons:', error);
		});
	}

	calculateTotalProducts(orders: Order[]): number {
		return orders.reduce((total, order) => total + order.lignesProduits.length, 0);
	}

	loadOrders(): void {
		this.plannerDataService.getOrders().subscribe((data: Order[]) => {
			this.orders = data;
			this.orderCount = data.length;
			this.totalProductsCount = this.calculateTotalProducts(data);
			this.openOrders = this.orders.filter(order => order.etat === 'ouverte');
			this.openOrderCount = this.openOrders.length;

			this.plannedOrdersCount = this.orders.filter(order => order.etat === 'planifiee').length;
			this.inDeliveryOrdersCount = this.orders.filter(order => order.etat === 'enLivraison').length;
			this.deliveredOrdersCount = this.orders.filter(order => order.etat === 'livrée').length;

			this.openOrderCount = this.openOrders.length;


		}, error => {
			console.error('Error fetching orders:', error);
		});
	}




}
