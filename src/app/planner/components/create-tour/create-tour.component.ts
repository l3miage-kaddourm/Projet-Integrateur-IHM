import { Component, OnInit } from '@angular/core';
import { PlannerDataService } from '../../../services/planner-data.service';
import { Order } from '../../models/order.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
	selector: 'app-create-tour',
	templateUrl: './create-tour.component.html',
	styleUrl: './create-tour.component.css'
})

export class CreateTourComponent implements OnInit {
	orders: Order[] = [];
	pendingOrders: Order[] = [];
	showAllOrders: boolean = false;

	droppedOrders: any[] = [];


	constructor(private plannerDataService: PlannerDataService) { }


	ngOnInit(): void {
		this.loadOrders();
	}

	toggleShowAllOrders(): void {
		this.showAllOrders = !this.showAllOrders;
	}

	loadOrders(): void {
		this.plannerDataService.getOrders().subscribe((data: Order[]) => {
			this.orders = data;
			this.pendingOrders = this.orders.filter(order => order.etat === 'ouvert');
		}, error => {
			console.error('Error fetching orders:', error);
		});
	}

	formatAddress(order: Order): string {
		const { adresse, codePostal, ville } = order.client.adresse;
		return `${adresse} ${codePostal} ${ville}`;
	}


	drop(event: CdkDragDrop<Order[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(
				event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex
			);
		}
	}


}
