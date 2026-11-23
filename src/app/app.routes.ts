import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'characters',
    loadComponent: () => import('./feature/characters/characters.page').then((m) => m.CharactersPage),
  },
  {
    path: 'locations',
    loadComponent: () => import('./feature/locations/locations.page').then((m) => m.LocationsPage),
  },
  {
    path: 'episodes',
    loadComponent: () => import('./feature/episodes/episodes.page').then((m) => m.EpisodesPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./feature/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'favorites',
    loadComponent: () => import('./feature/favorites/favorites.page').then((m) => m.FavoritesPage),
  },
  {
    path: 'profile',
    loadComponent: () => import('./feature/profile/profile.page').then((m) => m.ProfilePage),
  },
];
