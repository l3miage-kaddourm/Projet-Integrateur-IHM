import { Component, EventEmitter, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { PlannerDataService } from '../../../services/planner-data.service';
import { GeoapiService } from '../../../services/geoapi.service';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { map, from, Observable } from 'rxjs';
import { RoService } from '../../../services/ro.service';

@Component({
	selector: 'app-tours',
	templateUrl: './tours.component.html',
	styleUrls: ['./tours.component.css']
})
export class ToursComponent {

	@Output() onToursChanged: EventEmitter<any> = new EventEmitter();

	depotAdresse: string = "11 avenue de kimberley 38130 échirolles"

	serverResponse: any;
	isOpen = false

	allDeliveryPersonnel = ['Alice', 'Bob', 'Charlie', 'Dave'];
	availableDeliveryPersonnel = [...this.allDeliveryPersonnel];

	showPersonnelSelection: { [tourId: number]: boolean } = {};

	constructor(
		private dataService: PlannerDataService,
		private geoApiService: GeoapiService,
		private roService: RoService) { }


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
				truckID: 'T001', deliveryPersonnel: ['Alice', 'Bob'],
				deliveries: [
					{ id: 'DEL001', address: "150 Av. Gabriel Péri, 38400 Saint-Martin-d'Hères, France", status: 'Planifiée' },
					{ id: 'DEL002', address: '75 Rue des Javaux, 38320 Eybens, France', status: 'Planifiée' },
					{ id: 'DEL003', address: 'Grand Place, 38100 Grenoble, France', status: 'Planifiée' }
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
				deliveryPersonnel: ['Charlie'],
				deliveries: [
					{ id: 'DEL004', address: '55 Cr Jean Jaurès, 38130 Échirolles, France', status: 'Planifiée' }
				]
			}
		},
	];

	ngOnInit() {
		this.updateAvailableDeliveryPersonnel();
	}

	/* ==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*== */
	/*      Start Handle CheckBox List of Delivery Personnel    */
	/* ==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*== */

	/**
	 * Update the list of available delivery personnel.
	 */
	updateAvailableDeliveryPersonnel() {
		const assignedPersonnel = this.tours.flatMap(tour => tour.info.deliveryPersonnel);
		this.availableDeliveryPersonnel = this.allDeliveryPersonnel.filter(person => !assignedPersonnel.includes(person));
	}

	/**
	 * Add a delivery person to a tour.
	 * 
	 * @param tourId  - The ID of the tour.
	 * @param personName - The name of the delivery person.
	 * 
	 */
	addDeliveryPerson(tourId: number, personName: string) {
		const tour = this.tours.find(t => t.id === tourId);
		if (tour) {
			tour.info.deliveryPersonnel.push(personName);
			this.updateAvailableDeliveryPersonnel();
		}
	}

	/**
	 * Add a delivery person to a tour from an event.
	 * 
	 * @param tourId - The ID of the tour.
	 * @param event - The event containing the selected person.
	 * 
   */
	addDeliveryPersonFromEvent(tourId: number, event: Event) {
		const selectElement = event.target as HTMLSelectElement;
		const personName = selectElement.value;
		this.addDeliveryPerson(tourId, personName);
	}

	/**
	 * Remove a delivery person from a tour.
	 * 
	 * @param tourId - The ID of the tour.
	 * @param personName - The name of the delivery person.
	 * 
   */
	removeDeliveryPerson(tourId: number, personName: string) {
		const tour = this.tours.find(t => t.id === tourId);
		if (tour) {
			tour.info.deliveryPersonnel = tour.info.deliveryPersonnel.filter(person => person !== personName);
			this.updateAvailableDeliveryPersonnel();
		}
	}

	/**
	 * Handle changes in the checkbox for delivery personnel selection.
	 * 
	 * @param tourId - The ID of the tour.
	 * @param personName - The name of the delivery person.
	 * @param event - The event containing the checkbox state.
	 * 
   */
	handleCheckboxChange(tourId: number, personName: string, event: Event) {
		const checkbox = event.target as HTMLInputElement;
		if (checkbox.checked) {
			this.addDeliveryPerson(tourId, personName);
		} else {
			this.removeDeliveryPerson(tourId, personName);
		}
	}
	/* ==*==*==*==*==*==*==*==* End Handle CheckBox List ==*==*==*==*==*==*==*==*==*==*== */

	sendDistanceMatrix(distanceMatrix: number[][]) {
		console.log(distanceMatrix);
		const payload = {
			matrix: distanceMatrix,
			k: 3,
			start: 0
		};

		this.roService.postData(payload).subscribe({
			next: (result) => {
				console.log('Processed data from server:', result);
				this.serverResponse = result;
				// this.updateTours();
			},
			error: (error) => {
				console.error('Failed to process data:', error);
			}
		});
	}

	calculateDifferenceBetweenAddresses() {
		this.getAdress().subscribe(addresses => {
			const distanceMatrix: number[][] = [];
			const requests: Observable<number>[][] = [];

			for (let i = 0; i < addresses.length; i++) {
				distanceMatrix[i] = [];
				requests[i] = [];
				for (let j = 0; j < addresses.length; j++) {
					const request = forkJoin({
						coords1: this.geoApiService.getCoordinates(addresses[i]),
						coords2: this.geoApiService.getCoordinates(addresses[j])
					}).pipe(
						map(({ coords1, coords2 }) => this.geoApiService.calculateDistance(
							coords1.latitude, coords1.longitude,
							coords2.latitude, coords2.longitude
						))
					);
					requests[i][j] = request;
				}
			}

			forkJoin(requests.flat()).subscribe({
				next: (distances) => {
					let index = 0;
					for (let i = 0; i < addresses.length; i++) {
						for (let j = 0; j < addresses.length; j++) {
							distanceMatrix[i][j] = Number.parseFloat(distances[index++].toFixed(1));
						}
					}
					this.sendDistanceMatrix(distanceMatrix);
					console.log(distanceMatrix);
				},
				error: (error) => {
					console.error("Error calculating distances:", error);
				}
			});
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

	updateTours() {
		const { tournees, longTournees } = this.serverResponse;

		const mapIndicesToAddresses = (indices: number[], tours: any[]): any[] => {
			return indices.slice(1).map(index => {
				const tourIndex = Math.floor((index - 1) / 3);
				const deliveryIndex = (index - 1) % 3;
				return tours[tourIndex].info.deliveries[deliveryIndex];
			});
		};

		let updatedTours = this.tours.map((tour, index) => {
			if (index < tournees.length) {
				return {
					...tour,
					info: {
						...tour.info,
						distance: `${longTournees[index].toFixed(1)}km`,
						deliveries: mapIndicesToAddresses(tournees[index], this.tours)
					}
				};
			}
			return tour;
		});
		for (let i = this.tours.length; i < tournees.length; i++) {
			updatedTours.push({
				id: i + 1,
				name: `Tour ${String(i + 1).padStart(2, '0')}`,
				detailsVisible: false,
				info: {
					distance: `${longTournees[i]}km`,
					startTime: 'N/A',
					endTime: 'N/A',
					duration: 'N/A',
					truckID: `T00${i + 1}`,
					deliveries: mapIndicesToAddresses(tournees[i], this.tours),
					deliveryPersonnel: []
				}
			});
		}

		// Remove extra tours if there are fewer in the server response
		if (updatedTours.length > tournees.length) {
			updatedTours.length = tournees.length;
		}

		this.tours = updatedTours;
	}
	optimizeButton() {

		this.calculateDifferenceBetweenAddresses();
	}

	show() {
		this.isOpen === true ? this.isOpen = false : this.isOpen = true;
	}


	getAdress(): Observable<string[]> {
		return new Observable(observer => {
			let addresses = [this.depotAdresse];

			this.dataService.getClientsAddresses().subscribe(clientAddresses => {
				addresses.push(...clientAddresses.slice(0, 5));
				console.log('Client Addresses:', addresses);
				observer.next(addresses);
				observer.complete();
			});
		});
	}

}