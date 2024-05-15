import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PlannerDataService } from '../../../services/planner-data.service';
import { Order, SimpleOrders } from '../../models/order.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { SharedService } from '../../../services/shared.service';
import { Router } from '@angular/router';


@Component({
	selector: 'app-create-tour',
	templateUrl: './create-tour.component.html',
	styleUrl: './create-tour.component.css'
})

export class CreateTourComponent implements OnInit {

	@Output() onValidate: EventEmitter<SimpleOrders[]> = new EventEmitter();

	orders: SimpleOrders[] = [];
	droppedOrders: SimpleOrders[] = [];
	pendingOrders: SimpleOrders[] = [];

	showAllOrders: boolean = false;


	constructor(private plannerDataService: PlannerDataService, private sharedService: SharedService, private router: Router) { }


	ngOnInit(): void {
		this.loadOrders();
	}

	toggleShowAllOrders(): void {
		this.showAllOrders = !this.showAllOrders;
	}

	loadOrders(): void {
		this.plannerDataService.getOrders().subscribe((data: Order[]) => {
			this.orders = data.map(order => ({
				reference: order.reference,
				adresse: this.formatAddress(order),
				etat: order.etat
			}));
			this.pendingOrders = this.orders.filter(order => order.etat === 'ouverte');
		}, error => {
			console.error('Error fetching orders:', error);
		});
	}

	formatAddress(order: Order): string {
		const { adresse, codePostal, ville } = order.client.adresse;
		return `${adresse} ${codePostal} ${ville}`;
	}

	drop(event: CdkDragDrop<SimpleOrders[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
		}
	}

	validate(): void {
		this.sharedService.updateDroppedOrders(this.droppedOrders);
		console.log("Dropped orders validated:", this.droppedOrders); // Debugging line
		this.router.navigate(['/tour']);
	}
}
