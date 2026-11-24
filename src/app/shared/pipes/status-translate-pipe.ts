
import { Pipe, PipeTransform } from '@angular/core';


export enum CharacterStatus {

  Alive = 'Alive',

  Dead = 'Dead',

  Unknown = 'unknown'

}


@Pipe({
  name: 'statusTranslate',
  standalone: true
})
export class StatusTranslatePipe implements PipeTransform {

  transform(status: string): string {

    switch (status) {

      case CharacterStatus.Alive:
        return 'Vivo';

      case CharacterStatus.Dead:
        return 'Muerto';

      case CharacterStatus.Unknown:
        return 'Desconocido';

      default:
        return status;
    }

  }

}
