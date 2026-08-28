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
  qualityPillars = [
    { icon: 'durable', title: 'Durability', text: 'Built to handle everyday wear without cracking or fading.' },
    { icon: 'valve', title: 'Smooth Operation', text: 'Precision internals for consistent, effortless performance.' },
    { icon: 'check', title: 'Easy Installation', text: 'Designed to fit standard plumbing setups without hassle.' },
    { icon: 'long-life', title: 'Long-Lasting Performance', text: 'Engineered to keep performing well beyond everyday use.' },
  ];

  productRange = [
    { icon: 'faucet', name: 'PTMT Taps & Faucets' },
    { icon: 'valve', name: 'Angle Valves & Ball Valves' },
    { icon: 'pipe', name: 'Connection Pipes' },
    { icon: 'shower', name: 'Showers' },
    { icon: 'faucet', name: 'Health Faucets' },
    { icon: 'pipe', name: 'Waste Pipes' },
    { icon: 'faucet', name: 'Sink & Pillar Cocks' },
    { icon: 'accessory', name: 'Bathroom Accessories' },
    { icon: 'valve', name: 'Plumbing Fittings & Accessories' },
  ];

  promise = [
    { icon: 'shield', title: 'Quality that lasts.' },
    { icon: 'award', title: 'Design that fits.' },
    { icon: 'check', title: 'Performance you can trust.' },
  ];
}
