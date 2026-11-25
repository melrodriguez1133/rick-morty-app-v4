import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonSpinner,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
 } from '@ionic/angular';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CharacterService } from '../../core/services/character';
import { Character } from '../../core/models/character.model';
import { ApiResponse } from '../../core/models/api-response.model';
import { ErrorHandlerService } from '../../core/services/error-handler';

import { catchError, timeout, tap } from 'rxjs';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonSpinner,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    HeaderComponent
  ],
})
export class CharactersPage implements OnInit {

   // Lista donde almacenaremos los personajes
  characters: Character[] = [];

  // Indica si estamos cargando información
  isLoading: boolean = false;

  // Almacena un mensaje de error
  errorMessage: string = '';

  // Inyección de dependencias
  constructor(
    private characterService: CharacterService,
    private errorHandler: ErrorHandlerService
  ) {}

  // Se ejecuta cuando se inicializa la página
  ngOnInit(): void {
    this.loadCharacters();
  }

  // Método encargado de obtener los personajes
loadCharacters(): void {

  this.isLoading = true;
  this.errorMessage = '';

  this.characterService.getAllCharacters().subscribe({

    next: (response) => {

      console.log('Datos recibidos:', response);

      this.characters = response.results;
      this.isLoading = false;

    },

    error: (error) => {

      console.error('ERROR EN LA VISTA:', error);

      this.errorMessage = error.message;
      this.isLoading = false;

    }

  });
}
}
