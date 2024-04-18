import { Component } from '@angular/core';

@Component({
	selector: 'app-planner-header',
	templateUrl: './planner-header.component.html',
	styleUrl: './planner-header.component.css'
})
export class PlannerHeaderComponent {
	logout() {
		console.log("TEST");
	}

	name: string = "Ibrahim Alsabr"
}
