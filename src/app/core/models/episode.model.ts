/**
 * Representa un episodio de Rick and Morty.
 */
export interface Episode {

  // Identificador único
  id: number;

  // Nombre del episodio
  name: string;

  // Fecha de emisión
  air_date: string;

  // Código del episodio. Ejemplo: S01E01
  episode: string;

  // URLs de los personajes que aparecen
  characters: string[];

  // URL del recurso
  url: string;

  // Fecha de creación del registro
  created: string;
}