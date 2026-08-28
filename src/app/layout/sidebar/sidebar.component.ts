import { Component, Input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/ui/icon.component';
import { PRODUCT_CATEGORIES } from '../../core/data/products.data';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IconComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  isOpen = signal(false);
  productsOpen = signal(true);
  categories = PRODUCT_CATEGORIES;

  toggle() {
    this.isOpen.set(!this.isOpen());
  }

  close() {
    this.isOpen.set(false);
  }
}
