export interface Adresse {
	adresse: string;
	codePostal: string;
	ville: string;
}

export interface Position {
	laltitude: number;
	longitude: number;
}

export interface Client {
	email: string;
	prenom: string;
	nom: string;
	montantTotal: number | null;
	adresse: Adresse;
	position: Position;
	etat: string | null;
}

export interface Produit {
	reference: string;
	photo: string;
	titre: string;
	description: string;
	prix: number;
	optionMontage: boolean;
}

export interface LignesProduits {
	id: string;
	quantite: number;
	montant: number | null;
	optionMontage: boolean;
	produit: Produit;
}

export interface Commande {
	reference: string;
	etat: string;
	dateDeCreation: string;
	note: string | null;
	commentaire: string | null;
	montant: number;
	tddTheorique: number | null;
	tdmTheorique: number | null;
	dateDeLivraisonEffective: string | null;
	dureeDeLivraison: number | null;
	livraison: Livraison;
	client: Client;
	lignesProduits: LignesProduits[];
}

export interface Livraison {
	reference: string | null;
	etat: string;
	montant: number;
	distanceAparcourir: number;
	tdpAlAller: number;
	tdpTheorique: number;
	tdmTheorique: number;
	heureDeLivraison: string | null;
	heureDeLivraisonEffective: string;
	tdmEffectif: number;
	commande: Commande[];
}

export interface Tournee {
	// camion: any;
	reference: string | null;
	etat: string | null;
	lettre: string | null;
	montant: number | null;
	distanceAparcourir: number | null;
	livraison: Livraison[];
}

export interface EmployeeTour {
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
