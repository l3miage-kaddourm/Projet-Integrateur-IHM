import { Component, OnInit } from '@angular/core';
import { BoxInfo } from '../../models/box-info.model';
import { PlannerDataService } from '../../../services/planner-data.service';

@Component({
	selector: 'app-planner-dashboard',
	templateUrl: './planner-dashboard.component.html',
	styleUrl: './planner-dashboard.component.css'
})
export class PlannerDashboardComponent implements OnInit {
	boxes: BoxInfo[] = [];

	constructor(private plannerDataService: PlannerDataService) { }

	ngOnInit(): void {
		this.plannerDataService.getBoxInfo().subscribe(
			(data: BoxInfo[]) => {
				this.boxes = data;
			},
			(error) => {
				console.error('Error fetching box data', error);
			}
		);
	}
}
