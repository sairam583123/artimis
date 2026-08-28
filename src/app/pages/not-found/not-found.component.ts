import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/ui/icon.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink, IconComponent],
  template: `
    <section class="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <div class="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-brand-700">
        <app-icon name="pin" klass="h-10 w-10"></app-icon>
      </div>
      <h1 class="font-display text-4xl font-extrabold text-brand-900">404</h1>
      <p class="mt-2 text-lg font-semibold text-brand-800">Page not found</p>
      <p class="mt-3 text-slate-500">The page you're looking for may have been moved or no longer exists.</p>
      <a routerLink="/" class="btn-primary mt-8">Back to Home</a>
    </section>
  `,
})
export class NotFoundComponent {}
