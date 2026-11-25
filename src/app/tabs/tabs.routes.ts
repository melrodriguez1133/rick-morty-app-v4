import type { Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,

    children: [

      // Página de inicio
      {
        path: 'home',
        loadComponent: () =>
          import('../feature/home/home.page')
            .then((m) => m.HomePage),
      },

      // Página de personajes
      {
        path: 'characters',
        loadComponent: () =>
          import('../feature/characters/characters.page')
            .then((m) => m.CharactersPage),
      },

      // Página de ubicaciones
      {
        path: 'locations',
        loadComponent: () =>
          import('../feature/locations/locations.page')
            .then((m) => m.LocationsPage),
      },

      // Página de episodios
      {
        path: 'episodes',
        loadComponent: () =>
          import('../feature/episodes/episodes.page')
            .then((m) => m.EpisodesPage),
      },

      // Página de favoritos
      {
        path: 'favorites',
        loadComponent: () =>
          import('../feature/favorites/favorites.page')
            .then((m) => m.FavoritesPage),
      },

      // Página de perfil
      {
        path: 'profile',
        loadComponent: () =>
          import('../feature/profile/profile.page')
            .then((m) => m.ProfilePage),
      },

      // Redirección por defecto dentro de Tabs
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },

    ],
  },

  // Redirección inicial de la aplicación
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];