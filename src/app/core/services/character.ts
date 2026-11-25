import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

// Environment
import { environment } from '../../../environments/environment';

// Models
import { Character } from '../models/character.model';
import { ApiResponse } from '../models/api-response.model';

// Enums
import { CharacterStatus } from '../enums/character-status';
import { CharacterGender } from '../enums/character-gender';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  // Construimos la URL del recurso
  private readonly apiUrl = `${environment.apiUrl}/character`;

  // Inyectamos HttpClient
  constructor(private http: HttpClient) {}

  /**
   * Obtiene todos los personajes de una página.
   *
   * @param page Número de página.
   * @returns Respuesta paginada de personajes.
   */
  getAllCharacters(
    page: number = 1
  ): Observable<ApiResponse<Character>> {

    return this.http.get<ApiResponse<Character>>(
      this.apiUrl,
      {
        params: { page }
      }
    );
  }

  /**
   * Obtiene un personaje específico.
   *
   * @param id Identificador del personaje.
   * @returns Un personaje.
   */
  getCharacterById(id: number): Observable<Character> {

    return this.http.get<Character>(
      `${this.apiUrl}/${id}`
    );
  }

  /**
   * Obtiene múltiples personajes por sus IDs.
   *
   * @param ids Arreglo de identificadores.
   * @returns Arreglo de personajes.
   */
  getMultipleCharacters(
    ids: number[]
  ): Observable<Character[]> {

    // Si no tenemos IDs, devolvemos un arreglo vacío
    if (ids.length === 0) {
      return of([]);
    }

    return this.http.get<Character | Character[]>(
      `${this.apiUrl}/${ids.join(',')}`
    ).pipe(

      // Garantizamos que siempre devuelva un arreglo
      map(response =>
        Array.isArray(response) ? response : [response]
      )

    );
  }

  /**
   * Filtra personajes según diferentes criterios.
   *
   * Todos los filtros son opcionales.
   *
   * @param filters Filtros de búsqueda.
   * @param page Número de página.
   * @returns Respuesta paginada de personajes.
   */
  filterCharacters(
    filters: {
      name?: string;
      status?: CharacterStatus;
      species?: string;
      type?: string;
      gender?: CharacterGender;
    },
    page: number = 1
  ): Observable<ApiResponse<Character>> {

    // Creamos los parámetros de la petición
    let params = new HttpParams()
      .set('page', page);

    // Agregamos únicamente los filtros recibidos
    if (filters.name) {
      params = params.set('name', filters.name);
    }

    if (filters.status) {
      params = params.set('status', filters.status);
    }

    if (filters.species) {
      params = params.set('species', filters.species);
    }

    if (filters.type) {
      params = params.set('type', filters.type);
    }

    if (filters.gender) {
      params = params.set('gender', filters.gender);
    }

    // Realizamos la petición GET
    return this.http.get<ApiResponse<Character>>(
      this.apiUrl,
      { params }
    );
  }
}