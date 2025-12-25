import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  styles: [
    `svg{display:block;vertical-align:middle}`
  ],
  template: `
    <ng-container [ngSwitch]="normalized">
      <svg *ngSwitchCase="'dashboard'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" stroke-width="2"/>
        <rect x="13" y="3" width="8" height="5" rx="2" stroke="currentColor" stroke-width="2"/>
        <rect x="13" y="10" width="8" height="11" rx="2" stroke="currentColor" stroke-width="2"/>
        <rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" stroke-width="2"/>
      </svg>

      <svg *ngSwitchCase="'settings'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4 13a7.4 7.4 0 00.06-2l2.03-1.57-1.76-3.05-2.43.98a7.5 7.5 0 00-1.73-1l-.37-2.6h-3.52l-.37 2.6c-.62.24-1.2.56-1.73 1l-2.43-.98-1.76 3.05L4.54 11a7.4 7.4 0 00.06 2l-2.03 1.57 1.76 3.05 2.43-.98c.53.43 1.11.76 1.73 1l.37 2.6h3.52l.37-2.6c.62-.24 1.2-.56 1.73-1l2.43.98 1.76-3.05L19.4 13z" stroke="currentColor" stroke-width="2"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
      </svg>

      <svg *ngSwitchCase="'file-text'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" stroke-width="2"/>
        <path d="M14 2v6h6" stroke="currentColor" stroke-width="2"/>
        <path d="M16 13H8M16 17H8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>

      <svg *ngSwitchCase="'bar-chart-3'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <rect x="6" y="10" width="3" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
        <rect x="11" y="6" width="3" height="11" rx="1" stroke="currentColor" stroke-width="2"/>
        <rect x="16" y="12" width="3" height="5" rx="1" stroke="currentColor" stroke-width="2"/>
      </svg>

      <svg *ngSwitchCase="'trending-up'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 17l6-6 4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 7v6h-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <svg *ngSwitchCase="'users'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
        <path d="M2 21a7 7 0 0114 0" stroke="currentColor" stroke-width="2"/>
        <circle cx="17" cy="9" r="3" stroke="currentColor" stroke-width="2"/>
        <path d="M14 21h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>

      <svg *ngSwitchCase="'grid'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="7" height="7" rx="2" stroke="currentColor" stroke-width="2"/>
        <rect x="14" y="3" width="7" height="7" rx="2" stroke="currentColor" stroke-width="2"/>
        <rect x="3" y="14" width="7" height="7" rx="2" stroke="currentColor" stroke-width="2"/>
        <rect x="14" y="14" width="7" height="7" rx="2" stroke="currentColor" stroke-width="2"/>
      </svg>

      <svg *ngSwitchCase="'monitor'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2"/>
        <path d="M8 21h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>

      <svg *ngSwitchCase="'layers'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l9 5-9 5-9-5 9-5z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        <path d="M3 12l9 5 9-5" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        <path d="M3 17l9 5 9-5" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      </svg>

      <svg *ngSwitchCase="'sparkles'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z" transform="translate(4 2)" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      </svg>

      <svg *ngSwitchCase="'activity'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12h-4l-3 7-6-14-3 7H2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <svg *ngSwitchCase="'eye'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
      </svg>

      <svg *ngSwitchCase="'shopping-bag'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2l-2 5v13a2 2 0 002 2h12a2 2 0 002-2V7l-2-5H6z" stroke="currentColor" stroke-width="2"/>
        <path d="M9 7a3 3 0 006 0" stroke="currentColor" stroke-width="2"/>
      </svg>

      <svg *ngSwitchCase="'shopping-cart'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="20" r="2" stroke="currentColor" stroke-width="2"/>
        <circle cx="17" cy="20" r="2" stroke="currentColor" stroke-width="2"/>
        <path d="M5 6h2l1 9h10l2-7H7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <svg *ngSwitchCase="'calendar'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" stroke-width="2"/>
        <path d="M8 2v4M16 2v4M3 10h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>

      <svg *ngSwitchCase="'user'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2"/>
        <path d="M4 22a8 8 0 0116 0" stroke="currentColor" stroke-width="2"/>
      </svg>

      <svg *ngSwitchCase="'bot'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="7" width="16" height="10" rx="3" stroke="currentColor" stroke-width="2"/>
        <circle cx="9" cy="12" r="1.5" stroke="currentColor" stroke-width="2"/>
        <circle cx="15" cy="12" r="1.5" stroke="currentColor" stroke-width="2"/>
        <path d="M12 4v3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <rect x="8" y="17" width="8" height="3" rx="1.5" stroke="currentColor" stroke-width="2"/>
      </svg>

      <svg *ngSwitchCase="'image'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
        <circle cx="8" cy="9" r="2" stroke="currentColor" stroke-width="2"/>
        <path d="M21 17l-6-6-4 4-3-3-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <svg *ngSwitchCase="'code'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 16l-4-4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 16l4-4-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <svg *ngSwitchCase="'video'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="14" height="14" rx="2" stroke="currentColor" stroke-width="2"/>
        <path d="M21 8v8l-4-2.5V10.5L21 8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      </svg>

      <svg *ngSwitchCase="'circle'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2"/>
      </svg>

      <svg *ngSwitchCase="'circle-dot'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2"/>
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
      </svg>

      <svg *ngSwitchCase="'cube'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l8 4-8 4-8-4 8-4z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        <path d="M4 6v8l8 4 8-4V6" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      </svg>

      <svg *ngSwitchCase="'clipboard'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="5" width="12" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
        <rect x="9" y="2" width="6" height="4" rx="1" stroke="currentColor" stroke-width="2"/>
      </svg>

      <svg *ngSwitchCase="'edit'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 21h4l11-11-4-4L4 17v4z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      </svg>

      <svg *ngSwitchCase="'chevron-right'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <svg *ngSwitchCase="'chevron-left'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <svg *ngSwitchCase="'chevron-down'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <svg *ngSwitchCase="'chevron-up'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 15l-6-6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <svg *ngSwitchCase="'log-out'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" stroke="currentColor" stroke-width="2"/>
        <path d="M16 17l5-5-5-5M21 12H9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>

      <svg *ngSwitchDefault [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
      </svg>
    </ng-container>
  `
})
export class IconComponent {
  @Input() name: string = '';
  @Input() size: number = 20;

  get normalized(): string {
    const n = (this.name || '').toLowerCase();
    if (n.includes('layout-dashboard') || n.includes('dashboard')) return 'dashboard';
    if (n.includes('settings')) return 'settings';
    if (n.includes('file-text') || n.includes('file')) return 'file-text';
    if (n.includes('bar-chart')) return 'bar-chart-3';
    if (n.includes('trending-up') || n.includes('trend')) return 'trending-up';
    if (n.includes('users')) return 'users';
    if (n.includes('user')) return 'user';
    if (n.includes('grid')) return 'grid';
    if (n.includes('monitor') || n.includes('screen')) return 'monitor';
    if (n.includes('layers')) return 'layers';
    if (n.includes('sparkles') || n.includes('magic') || n.includes('wand-2')) return 'sparkles';
    if (n.includes('activity')) return 'activity';
    if (n.includes('shopping-bag') || n.includes('bag')) return 'shopping-bag';
    if (n.includes('shopping-cart') || n.includes('cart')) return 'shopping-cart';
    if (n.includes('calendar')) return 'calendar';
    if (n.includes('bot') || n.includes('robot')) return 'bot';
    if (n.includes('image') || n.includes('photo')) return 'image';
    if (n.includes('code')) return 'code';
    if (n.includes('video')) return 'video';
    if (n === 'circle' || n.includes('radio')) return 'circle';
    if (n.includes('circle-dot')) return 'circle-dot';
    if (n.includes('cube')) return 'cube';
    if (n.includes('clipboard')) return 'clipboard';
    if (n.includes('edit') || n.includes('pencil')) return 'edit';
    if (n.includes('chevron-right')) return 'chevron-right';
    if (n.includes('chevron-left')) return 'chevron-left';
    if (n.includes('chevron-down')) return 'chevron-down';
    if (n.includes('log-out') || n.includes('logout')) return 'log-out';
    return n;
  }
}
