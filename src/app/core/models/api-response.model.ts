/**
 * Información de paginación de la API.
 */
export interface ApiInfo {

  // Cantidad total de resultados
  count: number;

  // Cantidad total de páginas
  pages: number;

  // URL de la siguiente página
  next: string | null;

  // URL de la página anterior
  prev: string | null;
}

/**
 * Respuesta genérica de la API.
 *
 * T representa el tipo de dato que recibiremos.
 */
export interface ApiResponse<T> {

  // Información de paginación
  info: ApiInfo;

  // Lista de resultados
  results: T[];
}