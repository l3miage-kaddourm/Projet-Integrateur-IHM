import { Component, EventEmitter, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { PlannerDataService } from '../../../services/planner-data.service';
import { GeoapiService } from '../../../services/geoapi.service';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { map, from } from 'rxjs';
import { RoService } from '../../../services/ro.service';

@Component({
	selector: 'app-tours',
	templateUrl: './tours.component.html',
	styleUrls: ['./tours.component.css']
})
export class ToursComponent {
	@Output() onToursChanged: EventEmitter<any> = new EventEmitter();

	depotAdresse: string = "11 avenue de kimberley 38130 échirolles"

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
					{ id: 'DEL001', address: '123 Avenue de la République, 75011 Paris', status: 'Planifiée' },
					{ id: 'DEL002', address: '56 Rue de la Pompe, 75116 Paris', status: 'Planifiée' },
					{ id: 'DEL003', address: '4 Place de la Concorde, 75008 Paris', status: 'Planifiée' }
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
					{ id: 'DEL004', address: '88 Rue du Faubourg Saint-Antoine, 75012 Paris', status: 'Planifiée' }
				]
			}
		},
	];

	constructor(private dataService: PlannerDataService, private geoApiService: GeoapiService, private roService: RoService) { }

	getAdress() {
		let addresses = [this.depotAdresse];

		this.tours.forEach(tour => {
			tour.info.deliveries.forEach(delivery => {
				addresses.push(delivery.address);
			});
		});

		return addresses;
	}

	calculateDifferenceBetweenAddresses() {
		const addresses = this.getAdress();
		let requests = [];

		for (let i = 0; i < addresses.length; i++) {
			for (let j = 0; j < addresses.length; j++) {
				let request = forkJoin({
					coords1: this.geoApiService.getCoordinates(addresses[i]),
					coords2: this.geoApiService.getCoordinates(addresses[j])
				}).pipe(
					map(({ coords1, coords2 }) => this.geoApiService.calculateDistance(
						coords1.latitude, coords1.longitude,
						coords2.latitude, coords2.longitude
					))
				);
				requests.push(request);
			}
		}

		from(requests).pipe(
			map(obs => forkJoin(obs))
		).subscribe({
			next: (distances) => {
				console.log('All distances:', distances);
			},
			error: (error) => {
				console.error("Error calculating distances:", error);
			}
		});
	}

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

	optimizeButton() {
		this.calculateDifferenceBetweenAddresses();
	}


	someFunctionThatNeedsProcessing() {
		const listOflists: any[][] = [[1, 2], [3, 4]];

		this.roService.processData(listOflists).subscribe({
			next: (result) => {
				console.log('Processed data from server:', result);
			},
			error: (error) => {
				console.error('Failed to process data:', error);
			}
		})
	}


	// updateBackend() {
	//     this.dataService.updateTours(this.tours).subscribe({
	//         next: (response) => console.log('Update successful', response),
	//         error: (error) => console.error('Update failed', error)
	//     });
	// }
}