import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/ui/icon.component';
import { VisualTileComponent } from '../../shared/ui/visual-tile.component';
import { PRODUCT_CATEGORIES } from '../../core/data/products.data';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, CommonModule, IconComponent, VisualTileComponent],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  allCategories = PRODUCT_CATEGORIES;
  search = signal('');

  filtered = computed(() => {
    const q = this.search().trim().toLowerCase();
    if (!q) return this.allCategories;
    return this.allCategories.filter(
      (c) => c.name.toLowerCase().includes(q) || c.tagline.toLowerCase().includes(q)
    );
  });

  onSearch(value: string) {
    this.search.set(value);
  }
}
