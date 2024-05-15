import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageMappingService {
    imageMapping: { [key: string]: string } = {
        'Lit double chanis': 'assets/photos_site/lit_double_chanis.png',
        'Table tagis': 'assets/photos_site/table_tagis.png',
        'Commode compatis': 'assets/photos_site/commode_compatis.png',
        'Table basse feris': 'assets/photos_site/table_basse_feris.png',
        'Canapé cainis' : 'assets/photos_site/canape_cainis.png',
        'Table bassis' : 'assets/photos_site/table_bassis.png',
        'Canapé vert canapis': 'assets/photos_site/canape_vert_canapis.png',
        'Fauteuil rotis' : 'assets/photos_site/fauteuil_rotis.png',
        'Lampadaire lapis' : 'assets/photos_site/lampadaire_lapis.png',
        'Table banis' : 'assets/photos_site/table_banis.png',
        'Etagère métalis' : 'assets/photos_site/etagere_metalis.png',
        'Chaise gingis' : 'assets/photos_site/chaise_gingis.png',
        'Chaise turbis' : 'assets/photos_site/chaise_turbis.png',
        'Commode comis' : 'assets/photos_site/commode_comis.png',
        'Chaise pogis' : 'assets/photos_site/chaise_pogis.png',
        'Meuble à chaussure chosis' : 'assets/photos_site/meuble_a_chaussures_chosis.png',
        'Meuble sallis' : 'assets/photos_site/meuble_sallis.png',
        'Commode beguis' : 'assets/photos_site/commode_beguis.png',
        'Vase luminis' : 'assets/photos_site/vase_luminis.png',
        'Fauteuil rose ikabis' : 'assets/photos_site/fauteuil_rose_ikabis.png',
        'Tables basses kikis' : 'assets/photos_site/tables_basses_kikis.png',
        'Fauteuil gris peritis' : 'assets/photos_site/fauteuil_gris_peritis.png'
      };

  getImage(productTitle: string): string {
    return this.imageMapping[productTitle] || 'assets/photos_site/default.png'; // default image if not found
  }
}
