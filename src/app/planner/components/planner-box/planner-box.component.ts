import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-planner-box',
	templateUrl: './planner-box.component.html',
	styleUrl: './planner-box.component.css'
})
export class PlannerBoxComponent {
	@Input() title: string = '';
	@Input() count: number | string = '';
	@Input() icon: string = '';
}
