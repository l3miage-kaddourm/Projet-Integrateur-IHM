import { Component, OnInit } from '@angular/core';
import { PlannerDataService } from '../../services/planner-data.service';

@Component({
	selector: 'app-planner-layout',
	templateUrl: './planner-layout.component.html',
	styleUrl: './planner-layout.component.css'
})
export class PlannerLayoutComponent implements OnInit {
	data: any;

	constructor(private dataService: PlannerDataService) { }

	ngOnInit() {
		this.dataService.getData().subscribe({
			next: (data) => {
				console.log("Data received:", data);  // Check what data is received
				this.data = data;
			},
			error: (error) => console.error('!!!!!!!!!!!!!!!There was an error!', error)
		});
	}
}
