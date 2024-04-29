import { Component } from '@angular/core';
import { DeliveryPerson } from '../../models/delivery-person.model';

@Component({
  selector: 'app-delivery-person',
  templateUrl: './delivery-person.component.html',
  styleUrl: './delivery-person.component.css'
})
export class DeliveryPersonComponent {
	deliveryPerson: DeliveryPerson[] = [];
	showAll: boolean = false;

	ngOnInit(): void {

		this.deliveryPerson = [
			...Array.from({ length: 20 }, (_, i) => ({
				id: `#${i + 1}`,
				firstName: `Name ${i + 1}`,
				lastName: `Last ${i + 1}`,
				email: `client${i + 1}@example.com`,
				phoneNumber: `07 52 41 52 2${i + 1}`,
				profil: `assets/icons/bussiness-man.png`,
			}))];
	}

	toggleShowAll(): void {
		console.log("test");
		this.showAll = !this.showAll;
	}
}
