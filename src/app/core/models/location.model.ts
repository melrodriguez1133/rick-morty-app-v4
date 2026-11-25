/**
 * Representa una ubicación del universo
 * de Rick and Morty.
 */
export interface Location {

  // Identificador único
  id: number;

  // Nombre de la ubicación
  name: string;

  // Tipo de ubicación
  type: string;

  // Dimensión a la que pertenece
  dimension: string;

  // URLs de los personajes residentes
  residents: string[];

  // URL del recurso
  url: string;

  // Fecha de creación del registro
  created: string;
}