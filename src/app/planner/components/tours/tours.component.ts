import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PlannerDataService } from '../../../services/planner-data.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Order } from '../../models/order.model';


@Component({
	selector: 'app-tours',
	templateUrl: './tours.component.html',
	styleUrl: './tours.component.css',
})
export class ToursComponent {

	@Output() onToursChanged: EventEmitter<any> = new EventEmitter();

	tours = [
		{
			id: 1,
			name: 'Tour 01',
			detailsVisible: false,
			info: {
				distance: '10km',
				startTime: '10h25',
				endTime: '14h25',
				duration: '4 Hours',
				truckID: 'T001',
				deliveries: [
					{ id: 'DEL001', address: '12 Rue de Paris, 38100 Grenoble', status: 'Planifiée' },
					{ id: 'DEL002', address: '12 Rue de Paris, 38100 Grenoble', status: 'Planifiée' },
					{ id: 'DEL003', address: '12 Rue de Paris, 38100 Grenoble', status: 'Planifiée' }
				]
			}
		},
		{
			id: 2,
			name: 'Tour 02',
			detailsVisible: false,
			info: {
				distance: '5km',
				startTime: '11h25',
				endTime: '12h25',
				duration: '1 Hours',
				truckID: 'T002',
				deliveries: [
					{ id: 'DEL002', address: '12 Rue de Paris, 38100 Grenoble', status: 'Planifiée' }
				]
			}
		},
	];

	constructor(private dataService: PlannerDataService) { }

	toggleTourDetails(tourId: number) {
		const tour = this.tours.find(t => t.id === tourId);
		if (tour) {
			tour.detailsVisible = !tour.detailsVisible;
		}
	}

	drop(event: CdkDragDrop<any[]>) {
		moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		this.signalChange();
	}

	signalChange() {
		this.onToursChanged.emit(this.tours);
	}
	
	handleToursChange(updatedTours) {
		console.log('Tours updated:', updatedTours);
		// Further actions based on updated tours
	}

}

