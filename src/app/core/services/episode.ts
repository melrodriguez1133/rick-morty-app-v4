import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

// Environment
import { environment } from '../../../environments/environment';

// Models
import { Episode } from '../models/episode.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  // URL del recurso de episodios
  private readonly apiUrl = `${environment.apiUrl}/episode`;

  constructor(private http: HttpClient) {}

  /**
   * Obtiene todos los episodios de una página.
   *
   * @param page Número de página.
   * @returns Respuesta paginada de episodios.
   */
  getAllEpisodes(
    page: number = 1
  ): Observable<ApiResponse<Episode>> {

    return this.http.get<ApiResponse<Episode>>(
      this.apiUrl,
      {
        params: { page }
      }
    );
  }

  /**
   * Obtiene un episodio específico.
   *
   * @param id Identificador del episodio.
   * @returns Un episodio.
   */
  getEpisodeById(id: number): Observable<Episode> {

    return this.http.get<Episode>(
      `${this.apiUrl}/${id}`
    );
  }

  /**
   * Obtiene múltiples episodios por sus IDs.
   *
   * @param ids Arreglo de identificadores.
   * @returns Arreglo de episodios.
   */
  getMultipleEpisodes(
    ids: number[]
  ): Observable<Episode[]> {

    if (ids.length === 0) {
      return of([]);
    }

    return this.http.get<Episode | Episode[]>(
      `${this.apiUrl}/${ids.join(',')}`
    ).pipe(

      map(response =>
        Array.isArray(response) ? response : [response]
      )

    );
  }

  /**
   * Filtra episodios por nombre o código.
   *
   * @param filters Filtros opcionales.
   * @param page Número de página.
   * @returns Respuesta paginada de episodios.
   */
  filterEpisodes(
    filters: {
      name?: string;
      episode?: string;
    },
    page: number = 1
  ): Observable<ApiResponse<Episode>> {

    let params = new HttpParams()
      .set('page', page);

    if (filters.name) {
      params = params.set('name', filters.name);
    }

    if (filters.episode) {
      params = params.set('episode', filters.episode);
    }

    return this.http.get<ApiResponse<Episode>>(
      this.apiUrl,
      { params }
    );
  }
}