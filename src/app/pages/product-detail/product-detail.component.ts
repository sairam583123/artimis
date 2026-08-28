import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { IconComponent } from '../../shared/ui/icon.component';
import { VisualTileComponent } from '../../shared/ui/visual-tile.component';
import { getCategoryBySlug, PRODUCT_CATEGORIES } from '../../core/data/products.data';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink, CommonModule, IconComponent, VisualTileComponent],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  allCategories = PRODUCT_CATEGORIES;

  category = toSignal(
    this.route.paramMap.pipe(map((params) => getCategoryBySlug(params.get('slug') ?? '')))
  );

  otherCategories() {
    const current = this.category();
    return this.allCategories.filter((c) => c.slug !== current?.slug).slice(0, 3);
  }

  goToProducts() {
    this.router.navigate(['/products']);
  }
}
