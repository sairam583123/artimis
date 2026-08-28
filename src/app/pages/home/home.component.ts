import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/ui/icon.component';
import { VisualTileComponent } from '../../shared/ui/visual-tile.component';
import { PRODUCT_CATEGORIES } from '../../core/data/products.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, IconComponent, VisualTileComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  categories = PRODUCT_CATEGORIES;

  stats = [
    { value: '20+', label: 'Years of Craftsmanship' },
    { value: '500+', label: 'Product Variants' },
    { value: '1200+', label: 'Dealers Nationwide' },
    { value: '10L+', label: 'Happy Households' },
  ];

  whyUs = [
    { icon: 'droplet', title: 'Solid Brass Build', text: 'Every tap is machined from high-grade brass for corrosion resistance and lasting shine.' },
    { icon: 'shield', title: 'Anti-Germ Glazing', text: 'Sanitaryware finished with anti-germ glaze keeps surfaces hygienic between cleans.' },
    { icon: 'check', title: 'Leak-Free Testing', text: 'Every batch undergoes pressure and cycle testing before it leaves our facility.' },
    { icon: 'truck', title: 'Pan-India Delivery', text: 'A dealer and distributor network that reaches builders and homeowners nationwide.' },
  ];

  testimonials = [
    { name: 'Rakesh Mehta', role: 'Site Contractor, Pune', text: 'The finish quality on the brass faucets held up perfectly even after two years of daily use on-site.' },
    { name: 'Ananya Rao', role: 'Interior Architect, Hyderabad', text: 'Their rimless WC range gave my clients a premium look without stretching the project budget.' },
    { name: 'Suresh Nair', role: 'Retailer, Kochi', text: 'Consistent stock availability and fast replacements make this brand easy to recommend to customers.' },
  ];
}
