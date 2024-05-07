import { Injectable } from '@angular/core';
import { GeoApiGouvAddressService, GeoApiGouvAddressResponse } from '@placeme/ngx-geo-api-gouv-address';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class GeoapiService {

	constructor(private geoApiGouvAddressService: GeoApiGouvAddressService) { }

	getAddress(query: string): Observable<GeoApiGouvAddressResponse> {
		return this.geoApiGouvAddressService.query({ q: query });
	}

	getCoordinates(query: string): Observable<{ latitude: number, longitude: number }> {
		return this.geoApiGouvAddressService.query({ q: query }).pipe(
			map(response => {
				const feature = response.features[0];
				const coordinates = (feature.geometry as { type: 'Point', coordinates: [number, number] }).coordinates;
				return {
					latitude: coordinates[1],
					longitude: coordinates[0]
				};
			})
		);
	}

	calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
		const toRadian = (angle: number) => (Math.PI / 180) * angle;
		const radius = 6371;

		const dLat = toRadian(lat2 - lat1);
		const dLon = toRadian(lon2 - lon1);

		const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(toRadian(lat1)) * Math.cos(toRadian(lat2)) *
			Math.sin(dLon / 2) * Math.sin(dLon / 2);
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		return radius * c;
	}
}
