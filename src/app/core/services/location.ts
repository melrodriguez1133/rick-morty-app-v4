import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

// Environment
import { environment } from '../../../environments/environment';

// Models
import { Location } from '../models/location.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  // URL del recurso de ubicaciones
  private readonly apiUrl = `${environment.apiUrl}/location`;

  constructor(private http: HttpClient) {}

  /**
   * Obtiene todas las ubicaciones de una página.
   *
   * @param page Número de página.
   * @returns Respuesta paginada de ubicaciones.
   */
  getAllLocations(
    page: number = 1
  ): Observable<ApiResponse<Location>> {

    return this.http.get<ApiResponse<Location>>(
      this.apiUrl,
      {
        params: { page }
      }
    );
  }

  /**
   * Obtiene una ubicación específica.
   *
   * @param id Identificador de la ubicación.
   * @returns Una ubicación.
   */
  getLocationById(id: number): Observable<Location> {

    return this.http.get<Location>(
      `${this.apiUrl}/${id}`
    );
  }

  /**
   * Obtiene múltiples ubicaciones por sus IDs.
   *
   * @param ids Arreglo de identificadores.
   * @returns Arreglo de ubicaciones.
   */
  getMultipleLocations(
    ids: number[]
  ): Observable<Location[]> {

    if (ids.length === 0) {
      return of([]);
    }

    return this.http.get<Location | Location[]>(
      `${this.apiUrl}/${ids.join(',')}`
    ).pipe(

      map(response =>
        Array.isArray(response) ? response : [response]
      )

    );
  }

  /**
   * Filtra ubicaciones según diferentes criterios.
   *
   * @param filters Filtros opcionales.
   * @param page Número de página.
   * @returns Respuesta paginada de ubicaciones.
   */
  filterLocations(
    filters: {
      name?: string;
      type?: string;
      dimension?: string;
    },
    page: number = 1
  ): Observable<ApiResponse<Location>> {

    let params = new HttpParams()
      .set('page', page);

    if (filters.name) {
      params = params.set('name', filters.name);
    }

    if (filters.type) {
      params = params.set('type', filters.type);
    }

    if (filters.dimension) {
      params = params.set('dimension', filters.dimension);
    }

    return this.http.get<ApiResponse<Location>>(
      this.apiUrl,
      { params }
    );
  }
}