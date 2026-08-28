import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <svg [attr.viewBox]="'0 0 24 24'" [class]="klass" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <ng-container [ngSwitch]="name">
        <ng-container *ngSwitchCase="'faucet'">
          <path d="M4 9h8a4 4 0 0 1 4 4v1"/>
          <path d="M16 14h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1"/>
          <path d="M9 9V6a2 2 0 0 1 2-2h2"/>
          <path d="M9 16v3a2 2 0 0 0 2 2h1"/>
          <circle cx="4" cy="9" r="1.4"/>
        </ng-container>
        <ng-container *ngSwitchCase="'toilet'">
          <rect x="2" y="9" width="7" height="6" rx="1"/>
          <rect x="15" y="9" width="7" height="6" rx="1"/>
          <rect x="8" y="7" width="8" height="10" rx="1.5"/>
        </ng-container>
        <ng-container *ngSwitchCase="'shower'">
          <path d="M6 8a6 6 0 0 1 12 0"/>
          <path d="M4 8h16"/>
          <path d="M8 12v1M12 12v2M16 12v1M9 16v1M15 16v1M12 17v1"/>
        </ng-container>
        <ng-container *ngSwitchCase="'accessory'">
          <rect x="4" y="4" width="7" height="7" rx="1.5"/>
          <rect x="13" y="4" width="7" height="7" rx="1.5"/>
          <rect x="4" y="13" width="7" height="7" rx="1.5"/>
          <circle cx="16.5" cy="16.5" r="3.5"/>
        </ng-container>
        <ng-container *ngSwitchCase="'pipe'">
          <path d="M3 8h11a4 4 0 0 1 4 4v4"/>
          <path d="M15 12h6"/>
          <rect x="2" y="6" width="4" height="4" rx="0.5"/>
          <rect x="16" y="14" width="4" height="4" rx="0.5"/>
        </ng-container>
        <ng-container *ngSwitchCase="'grid'">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M7 3v18M11 3v18M15 3v18"/>
          <circle cx="12" cy="12" r="1"/>
        </ng-container>
        <ng-container *ngSwitchCase="'valve'">
          <circle cx="12" cy="12" r="4.5"/>
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2"/>
        </ng-container>
        <ng-container *ngSwitchCase="'menu'">
          <path d="M4 7h16M4 12h16M4 17h16"/>
        </ng-container>
        <ng-container *ngSwitchCase="'close'">
          <path d="M6 6l12 12M18 6L6 18"/>
        </ng-container>
        <ng-container *ngSwitchCase="'chevron-right'">
          <path d="M9 6l6 6-6 6"/>
        </ng-container>
        <ng-container *ngSwitchCase="'phone'">
          <path d="M5 4h3l2 5-2 1a11 11 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>
        </ng-container>
        <ng-container *ngSwitchCase="'mail'">
          <rect x="3" y="5" width="18" height="14" rx="2"/>
          <path d="M3 7l9 6 9-6"/>
        </ng-container>
        <ng-container *ngSwitchCase="'pin'">
          <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11z"/>
          <circle cx="12" cy="10" r="2.5"/>
        </ng-container>
        <ng-container *ngSwitchCase="'check'">
          <path d="M5 13l4 4L19 7"/>
        </ng-container>
        <ng-container *ngSwitchCase="'shield'">
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/>
          <path d="M9 12l2 2 4-4"/>
        </ng-container>
        <ng-container *ngSwitchCase="'droplet'">
          <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>
        </ng-container>
        <ng-container *ngSwitchCase="'award'">
          <circle cx="12" cy="8" r="5"/>
          <path d="M8.5 12.5L7 21l5-3 5 3-1.5-8.5"/>
        </ng-container>
        <ng-container *ngSwitchCase="'truck'">
          <rect x="2" y="7" width="12" height="9" rx="1"/>
          <path d="M14 10h4l3 3v3h-7z"/>
          <circle cx="6.5" cy="18" r="1.6"/>
          <circle cx="17" cy="18" r="1.6"/>
        </ng-container>
        <ng-container *ngSwitchCase="'star'">
          <path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1L6.6 19.3l1.3-6-4.6-4.1 6.1-.6z"/>
        </ng-container>
        <ng-container *ngSwitchCase="'arrow-right'">
          <path d="M5 12h14M13 6l6 6-6 6"/>
        </ng-container>
        <ng-container *ngSwitchCase="'quote'">
          <path d="M7 7h4v5a4 4 0 0 1-4 4v-2a2 2 0 0 0 2-2H7z"/>
          <path d="M15 7h4v5a4 4 0 0 1-4 4v-2a2 2 0 0 0 2-2h-2z"/>
        </ng-container>
        <ng-container *ngSwitchCase="'durable'">
          <rect x="2" y="9" width="3" height="6" rx="1"/>
          <rect x="19" y="9" width="3" height="6" rx="1"/>
          <rect x="6" y="10" width="2" height="4" rx="0.5"/>
          <rect x="16" y="10" width="2" height="4" rx="0.5"/>
          <path d="M8 12h8"/>
        </ng-container>
        <ng-container *ngSwitchCase="'long-life'">
          <path d="M7 4h10M7 20h10"/>
          <path d="M7 4c0 4 5 6 5 8s-5 4-5 8"/>
          <path d="M17 4c0 4-5 6-5 8s5 4 5 8"/>
        </ng-container>
        <ng-container *ngSwitchCase="'leak-free'">
          <path d="M4 8h8a3 3 0 0 1 3 3"/>
          <circle cx="4" cy="8" r="1.4"/>
          <path d="M13 13.5c0 1.5-1 2.7-1 2.7s-1-1.2-1-2.7a1 1 0 0 1 2 0z"/>
        </ng-container>
        <ng-container *ngSwitchCase="'drip-free'">
          <path d="M12 4s5 5.5 5 9a5 5 0 0 1-10 0c0-3.5 5-9 5-9z"/>
          <path d="M5 5l14 14"/>
        </ng-container>
        <ng-container *ngSwitchCase="'polymer'">
          <circle cx="12" cy="12" r="2"/>
          <circle cx="5" cy="6" r="1.5"/>
          <circle cx="19" cy="6" r="1.5"/>
          <circle cx="5" cy="18" r="1.5"/>
          <circle cx="19" cy="18" r="1.5"/>
          <path d="M12 12L5 6M12 12L19 6M12 12L5 18M12 12L19 18"/>
        </ng-container>
      </ng-container>
    </svg>
  `,
  imports: [CommonModule],
})
export class IconComponent {
  @Input() name = '';
  @Input() klass = 'w-6 h-6';
}
