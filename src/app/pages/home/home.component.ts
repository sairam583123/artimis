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
    { value: '10+', label: 'Years of Craftsmanship' },
    { value: '100+', label: 'Product Variants' },
    { value: '250+', label: 'Dealers Nationwide' },
    { value: '50k+', label: 'Happy Households' },
  ];

  whyUs = [
    { icon: 'durable', title: 'Durable', text: 'Reinforced engineering polymer body built to withstand daily wear without cracking or fading.' },
    { icon: 'long-life', title: 'Long Life', text: 'Engineered to outlast years of everyday use without losing finish or function.' },
    { icon: 'leak-free', title: 'Leak Free', text: 'Precision-fitted internals keep every connection sealed tight, batch after batch.' },
    { icon: 'drip-free', title: 'Drip Free', text: 'Ceramic disc technology shuts off cleanly, leaving no drips behind.' },
    { icon: 'droplet', title: 'Corrosion Free', text: 'Unaffected by hard water or rust, keeping fittings looking new for longer.' },
    { icon: 'polymer', title: 'Made of Engineering Polymer', text: 'Advanced polymer construction delivers metal-like strength at a fraction of the weight.' },
  ];

  testimonials = [
    { name: 'Rakesh Mehta', role: 'Site Contractor, Pune', text: 'The finish quality on the brass faucets held up perfectly even after two years of daily use on-site.' },
    { name: 'Ananya Rao', role: 'Interior Architect, Hyderabad', text: 'Their rimless WC range gave my clients a premium look without stretching the project budget.' },
    { name: 'Suresh Nair', role: 'Retailer, Kochi', text: 'Consistent stock availability and fast replacements make this brand easy to recommend to customers.' },
  ];
}
