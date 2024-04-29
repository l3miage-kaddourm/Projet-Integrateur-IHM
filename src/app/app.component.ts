import { Component, OnInit } from '@angular/core';
import { PlannerDataService } from './services/planner-data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
	title = 'delivary';
	constructor(private dataService: PlannerDataService) { }

	ngOnInit() {
		console.log("============ START ==============");
		this.dataService.getData().subscribe({
			next: (data) => this.dataService = data,
			error: (error) => console.error('There was an error!', error)
		});
		console.log("============ END ==============");
	}
}
