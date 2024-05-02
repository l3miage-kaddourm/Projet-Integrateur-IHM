import { Component, EventEmitter, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { PlannerDataService } from '../../../services/planner-data.service';

@Component({
	selector: 'app-tours',
	templateUrl: './tours.component.html',
	styleUrls: ['./tours.component.css']
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
					{ id: 'DEL004', address: '12 Rue de Alfred, 38100 Grenoble', status: 'Planifiée' }
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
		// Emit the changes to the parent component
		this.onToursChanged.emit(this.tours);
		// Or call your service to update the backend
		// this.updateBackend();
	}

	// updateBackend() {
	//     this.dataService.updateTours(this.tours).subscribe({
	//         next: (response) => console.log('Update successful', response),
	//         error: (error) => console.error('Update failed', error)
	//     });
	// }
}