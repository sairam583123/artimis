import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), title: 'PipeFlow Bath & Plumbing | Home' },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent), title: 'About Us | PipeFlow' },
  { path: 'products', loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent), title: 'Products | PipeFlow' },
  { path: 'products/:slug', loadComponent: () => import('./pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent), title: 'Product Category | PipeFlow' },
  { path: 'gallery', loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent), title: 'Gallery | PipeFlow' },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent), title: 'Contact Us | PipeFlow' },
  { path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent), title: 'Page Not Found | PipeFlow' },
];
