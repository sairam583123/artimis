import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/ui/icon.component';
import { VisualTileComponent } from '../../shared/ui/visual-tile.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CommonModule, IconComponent, VisualTileComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  values = [
    { icon: 'shield', title: 'Quality First', text: 'Every product is tested for pressure tolerance, finish durability and long-term reliability before it ships.' },
    { icon: 'droplet', title: 'Water-Wise Design', text: 'Flush and flow technologies engineered to reduce water consumption without compromising performance.' },
    { icon: 'award', title: 'Craft & Consistency', text: 'Decades of manufacturing experience baked into every casting, plating and polishing step.' },
    { icon: 'truck', title: 'Reliable Supply', text: 'A dealer network and inventory system built to keep your project on schedule.' },
  ];

  timeline = [
    { year: '2004', text: 'Started as a small brass component workshop supplying local plumbing contractors.' },
    { year: '2010', text: 'Expanded into full faucet manufacturing with our first in-house chrome plating line.' },
    { year: '2015', text: 'Launched our sanitaryware division with anti-germ glazing technology.' },
    { year: '2020', text: 'Crossed 1,000 dealer touchpoints across India with a dedicated logistics network.' },
    { year: '2025', text: 'Introduced tornado-flush WCs and water-saving aerator technology across our tap range.' },
  ];
}
