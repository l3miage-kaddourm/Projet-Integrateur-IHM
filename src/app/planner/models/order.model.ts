export interface Order {
	reference: string;
	etat: string;
	dateDeCreation: Date | string;
	note: string | null
	commentaire: string | null;
	montant: string
	tddTheorique: string | null,
	tdmTheorique: string | null,
	dateDeLivraisonEffective: string | null,
	dureeDeLivraison: string | null,
	livraison: string | null,

	client: {
		email: string,
		prenom: string,
		nom: string,
		montantTotal: null | number,
		adresse: {
			adresse: string,
			codePostal: string,
			ville: string
		},
		position: {
			laltitude: number,
			longitude: number
		},
		etat: string | null
	}
	lignesProduits: LignesProduits[];
}

export interface LignesProduits {
	id: string,
	quantite: number,
	montant: number | null
	optionMontage: boolean,
	produit: {
		reference: string,
		photo: string,
		titre: string,
		description: string | null,
		prix: number,
		optionMontage: boolean
	}
}
