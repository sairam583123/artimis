import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/ui/icon.component';
import { PRODUCT_CATEGORIES } from '../../core/data/products.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule, IconComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  year = new Date().getFullYear();
  categories = PRODUCT_CATEGORIES.slice(0, 5);
}
