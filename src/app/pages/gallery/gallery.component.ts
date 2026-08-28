import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/ui/icon.component';
import { VisualTileComponent } from '../../shared/ui/visual-tile.component';
import { PRODUCT_CATEGORIES } from '../../core/data/products.data';

interface GalleryTile {
  title: string;
  category: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent, VisualTileComponent],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  filters = ['All', ...PRODUCT_CATEGORIES.map((c) => c.shortName)];
  active = signal('All');

  private tiles: GalleryTile[] = PRODUCT_CATEGORIES.flatMap((cat) =>
    cat.items.slice(0, 3).map((item) => ({
      title: item.name,
      category: cat.shortName,
      icon: cat.icon,
      color: cat.color,
    }))
  );

  filtered = computed(() => {
    const f = this.active();
    if (f === 'All') return this.tiles;
    return this.tiles.filter((t) => t.category === f);
  });

  setFilter(f: string) {
    this.active.set(f);
  }
}
