import { Routes } from '@angular/router';

import { authGuard } from './core/auth/auth.guard';
import { adminGuard } from './core/auth/admin.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(
        (m) => m.HomeComponent
      )
  },

  {
    path: 'portfolio',
    loadComponent: () =>
      import(
        './features/portfolio/portfolio-list/portfolio-list.component'
      ).then((m) => m.PortfolioListComponent)
  },

  {
    path: 'portfolio/:slug',
    loadComponent: () =>
      import(
        './features/portfolio/portfolio-detail/portfolio-detail.component'
      ).then((m) => m.PortfolioDetailComponent)
  },

  {
    path: 'services',
    loadComponent: () =>
      import(
        './features/services/services-list/services-list.component'
      ).then((m) => m.ServicesListComponent)
  },

  {
    path: 'services/:slug',
    loadComponent: () =>
      import(
        './features/services/service-detail/service-detail.component'
      ).then((m) => m.ServiceDetailComponent)
  },

  {
    path: 'booking',
    loadComponent: () =>
      import(
        './features/booking/booking-form/booking-form.component'
      ).then((m) => m.BookingFormComponent)
  },

  {
    path: 'blog',
    loadComponent: () =>
      import('./features/blog/blog-list/blog-list.component').then(
        (m) => m.BlogListComponent
      )
  },

  {
    path: 'blog/:slug',
    loadComponent: () =>
      import('./features/blog/blog-detail/blog-detail.component').then(
        (m) => m.BlogDetailComponent
      )
  },

  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about.component').then(
        (m) => m.AboutComponent
      )
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then(
        (m) => m.ContactComponent
      )
  },

  

  {
    path: '**',
    redirectTo: ''
  }
];