
export interface LocationReference {
  name: string;
  url: string;
}

/**
 * Representa un personaje de Rick and Morty.
 */
export interface Character {

  // Identificador único del personaje
  id: number;

  // Nombre del personaje
  name: string;

  // Estado: Alive, Dead o unknown
  status: string;

  // Especie del personaje
  species: string;

  // Tipo o subespecie
  type: string;

  // Género del personaje
  gender: string;

  // Lugar de origen
  origin: LocationReference;

  // Última ubicación conocida
  location: LocationReference;

  // URL de la imagen
  image: string;

  // URLs de los episodios en los que aparece
  episode: string[];

  // URL del recurso
  url: string;

  // Fecha de creación del registro
  created: string;
}