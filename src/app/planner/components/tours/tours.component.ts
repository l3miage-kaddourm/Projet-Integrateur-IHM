import { Component, OnInit } from '@angular/core';
import { PlannerDataService } from '../../../services/planner-data.service';


@Component({
	selector: 'app-tours',
	templateUrl: './tours.component.html',
	styleUrl: './tours.component.css',
})
export class ToursComponent implements OnInit {

	data: any;
	constructor(private dataService: PlannerDataService) { }

	ngOnInit() {
		this.dataService.getDataTest().subscribe({
			next: (data) => {
				this.data = data[2];
			},
			error: (error) => console.error('There was an error!', error)
		});
	}
}
