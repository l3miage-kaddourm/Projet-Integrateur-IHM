export interface Livraison {
	reference: string;
	etat: string;
	montant: number;
	distanceAparcourir: number;
	tdpAlAller: number;
	tdpTheorique: number;
	tdmTheorique: number;
	heureDeLivraison: string | null;
	heureDeLivraisonEffective: string;
	tdmEffectif: number;
}

export interface Tournee {
	camion: any;
	reference: string;
	etat: string;
	lettre: string;
	montant: number;
	distanceAparcourir: number;
	livraison: Livraison[];
}

export interface EmployeeTour {
	date: any;
	etat: any;
	tournees: any;
	trigramme: string;
	prenom: string;
	nom: string;
	photo: string | null;
	telephone: string;
	emploi: string;
	email: string | null;
	entrepot: string | null;
	tournee: Tournee;
}

