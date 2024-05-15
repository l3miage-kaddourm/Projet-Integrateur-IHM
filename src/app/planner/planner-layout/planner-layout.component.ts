import { Component, OnInit, ViewChild } from '@angular/core';
import { PlannerDataService } from '../../services/planner-data.service';
import { ToursComponent } from '../components/tours/tours.component';
import { SimpleOrders } from '../models/order.model';

@Component({
	selector: 'app-planner-layout',
	templateUrl: './planner-layout.component.html',
	styleUrl: './planner-layout.component.css'
})
export class PlannerLayoutComponent {
	data: any;

	constructor(private dataService: PlannerDataService) { }


	ngOnInit() {
		this.dataService.getData().subscribe({
			next: (data) => {
				this.data = data[0];
			},
			error: (error) => console.error('There was an error!', error)
		});
	}
}
