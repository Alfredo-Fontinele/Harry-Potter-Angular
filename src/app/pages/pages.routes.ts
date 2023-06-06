import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((page) => page.HomeComponent),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./details/details.component').then(
        (page) => page.DetailsComponent
      ),
  },
]
