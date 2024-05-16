import { Component, OnInit } from '@angular/core';
import { EmployeeTourDataService } from '../services/livreur.service';
import { EmployeeTour } from '../planner/models/livreur';

@Component({
	selector: 'app-delivery-perso',
	templateUrl: './delivery-person-page.component.html',
	styleUrl: './delivery-person-page.component.css'
})
export class DeliveryPersonPageComponent implements OnInit {

	employeeTour: EmployeeTour = {
		"trigramme": "AAA",
		"prenom": "anais",
		"nom": "ANNA",
		"photo": null,
		"telephone": "0657813525",
		"emploi": "livreur",
		"email": null,
		"entrepot": null,
		"tournee": {
			"reference": "TESTEST",
			"etat": null,
			"lettre": null,
			"montant": null,
			"distanceAparcourir": null,
			"livraison": [
				{
					"reference": "LIVRAISON_001",
					"etat": "planifiee",
					"montant": 200.0,
					"distanceAparcourir": 25.0,
					"tdpAlAller": 3,
					"tdpTheorique": 4,
					"tdmTheorique": 6,
					"heureDeLivraison": null,
					"heureDeLivraisonEffective": "10:00:00",
					"tdmEffectif": 7,
					"commande": [
						{
							"reference": "c258",
							"etat": "livrée",
							"dateDeCreation": "2024-04-05T03:00:00",
							"note": null,
							"commentaire": null,
							"montant": 0.0,
							"tddTheorique": null,
							"tdmTheorique": null,
							"dateDeLivraisonEffective": null,
							"dureeDeLivraison": null,
							"livraison": {
								"reference": "LIVRAISON_001",
								"etat": "planifiee",
								"montant": 200.0,
								"distanceAparcourir": 25.0,
								"tdpAlAller": 3,
								"tdpTheorique": 4,
								"tdmTheorique": 6,
								"heureDeLivraison": null,
								"heureDeLivraisonEffective": "10:00:00",
								"tdmEffectif": 7,
								"commande": []
							},
							"client": {
								"email": "abois@lp.net",
								"prenom": "amanda",
								"nom": "BOIS",
								"montantTotal": null,
								"adresse": {
									"adresse": "10 Chemin du Foulet",
									"codePostal": "38800",
									"ville": "Champagnier"
								},
								"position": {
									"laltitude": 45.107609,
									"longitude": 5.723657
								},
								"etat": null
							},
							"lignesProduits": [
								{
									"id": "l258-12",
									"quantite": 2,
									"montant": null,
									"optionMontage": false,
									"produit": {
										"reference": "p12",
										"photo": "Selection_999(692).jpg",
										"titre": "Meuble à chaussure chosis",
										"description": "Ajoutez une touche de modernité à votre entrée avec ce meuble à chaussures en acier brossé au design contemporain. Ses lignes épurées et son fini métallique apportent une esthétique élégante et sophistiquée à votre espace. Ce meuble compact est parfait pour ranger jusqu'à quatre paires de chaussures, offrant ainsi une solution pratique et organisée pour votre foyer. Solide et résistant, il constitue un choix idéal pour créer un espace accueillant et ordonné dès que vous franchissez la porte d'entrée.",
										"prix": 70.0,
										"optionMontage": false
									}
								}
							]
						}
					]
				}
			]
		}
	};

	constructor(private employeeTourDataService: EmployeeTourDataService) {
		// this.employeeTour = exampleData;
	}

	ngOnInit() {
		// this.employeeTourDataService.getEmployeeTourData().subscribe(data => {
		// 	this.employeeTour = data;
		// 	console.log('EmployeeTour data:', this.employeeTour);
		// });
	}
}
