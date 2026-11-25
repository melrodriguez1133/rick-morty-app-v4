import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, TimeoutError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  handleError(error: unknown): Observable<never> {

    let message = 'Error desconocido';

    // Error por tiempo de espera
    if (error instanceof TimeoutError) {

      message = 'El servidor tardó demasiado en responder';

    }

    // Errores HTTP
    else if (error instanceof HttpErrorResponse) {

      switch (error.status) {

        case 0:
          message = 'Error de conexión, Internet o CORS';
          break;

        case 400:
          message = 'Solicitud incorrecta';
          break;

        case 401:
          message = 'Usuario no autorizado';
          break;

        case 403:
          message = 'Acceso denegado';
          break;

        case 404:
          message = 'Recurso no encontrado';
          break;

        case 429:
          message = 'Demasiadas solicitudes';
          break;

        case 500:
          message = 'Error interno del servidor';
          break;

        case 503:
          message = 'Servidor no disponible';
          break;

        default:
          message = `Error HTTP ${error.status}`;
      }

      console.group('ERROR HTTP');
      console.error('Código:', error.status);
      console.error('URL:', error.url);
      console.error('Mensaje:', error.message);
      console.error('Respuesta:', error.error);
      console.groupEnd();

    }

    // Otros errores de JavaScript
    else if (error instanceof Error) {

      message = error.message;

    }

    console.error('Mensaje personalizado:', message);
    console.error('Error original:', error);

    return throwError(() => new Error(message));
  }
}