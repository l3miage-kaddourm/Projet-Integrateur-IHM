import { Component } from '@angular/core';
import { DeliveryPerson } from '../../models/delivery-person.model';
import { PlannerDataService } from '../../../services/planner-data.service';

@Component({
	selector: 'app-delivery-person',
	templateUrl: './delivery-person.component.html',
	styleUrl: './delivery-person.component.css'
})
export class DeliveryPersonComponent {
	deliveryPerson: DeliveryPerson[] = [];
	showAll: boolean = false;
	email = "";

	constructor(private dataService: PlannerDataService) { }

	ngOnInit(): void {

		this.dataService.getDeliveryPersons().subscribe({
			next: (data) => {
				this.deliveryPerson = data;
			},
			error: (error) => {
				console.error('There was an error in getDeliveryPersons!', error);
			}
		});
	}

	toggleShowAll(): void {

		this.showAll = !this.showAll;
	}
}
