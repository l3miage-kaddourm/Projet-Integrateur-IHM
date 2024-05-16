export interface BoxInfo {
	title: string;
	count: number;
	icon: string;
}

export interface Tournne {
	trigramme: string,
	"prenom": string,
	"nom": string,
	"photo": null,
	"telephone": string,
	"emploi": string,
	"email": null,
	"entrepot": null,
	"tournee": {
		"reference": string,
		"etat": string,
		"lettre": string,
		"montant": number,
		"distanceAparcourir": number,
		"livraison": null

	}
}

export interface Tour {
	id: number;
	name: string;
	detailsVisible: boolean;
	info: {
		distance: string | null;
		startTime: string | null;
		endTime: string | null;
		duration: string | null;
		truckID: string | null;
		deliveryPersonnel: string[];
		deliveries: Delivery[];
	};
}

export interface Delivery {
	id: string;
	address: string;
	status: string;
}