import { Component, OnInit } from '@angular/core';
import { EmployeeTourDataService } from '../services/livreur.service';
import { EmployeeTour } from '../planner/models/livreur';

@Component({
	selector: 'app-delivery-perso',
	templateUrl: './delivery-person-page.component.html',
	styleUrl: './delivery-person-page.component.css'
})
export class DeliveryPersonPageComponent implements OnInit {

	employeeTour: EmployeeTour | undefined;

	constructor(private employeeTourDataService: EmployeeTourDataService) { }

	ngOnInit() {
		this.employeeTourDataService.getEmployeeTourData().subscribe(data => {
			this.employeeTour = data;
			console.log('EmployeeTour data:', this.employeeTour);
		});
	}
}
