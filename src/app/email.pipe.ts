import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(value: string | null, prenom: string, nom: string): string {
    if (value) {
      return value;
    }
    return `${prenom}.${nom}@example.com`.toLowerCase();
  }
}
