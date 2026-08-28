import { Component, Input } from '@angular/core';
import { IconComponent } from './icon.component';

@Component({
  selector: 'app-visual-tile',
  standalone: true,
  imports: [IconComponent],
  template: `
    <div
      class="relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br {{ colorClass }}"
      [style.aspect-ratio]="ratio"
    >
      <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 20% 20%, white 0, transparent 40%), radial-gradient(circle at 80% 80%, white 0, transparent 35%);"></div>
      <div class="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/10"></div>
      <div class="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-black/10"></div>
      <app-icon [name]="icon" klass="relative z-10 text-white drop-shadow" [style.width.px]="iconSize" [style.height.px]="iconSize"></app-icon>
    </div>
  `,
})
export class VisualTileComponent {
  @Input() icon = 'faucet';
  @Input() colorClass = 'from-brand-600 to-brand-800';
  @Input() ratio = '4/3';
  @Input() iconSize = 56;
}
