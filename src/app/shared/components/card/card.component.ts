import { Component, Input, TemplateRef, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" [ngClass]="customClass">
      <!-- Card Header -->
      <div *ngIf="showHeader" class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-3">
          <div *ngIf="icon" class="flex-shrink-0">
            <i [class]="icon" [ngClass]="iconClass"></i>
          </div>
          <div>
            <h3 *ngIf="title" class="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {{ title }}
            </h3>
            <p *ngIf="subtitle" class="text-sm text-gray-500 dark:text-gray-400">
              {{ subtitle }}
            </p>
          </div>
        </div>

        <!-- Header Actions -->
        <div *ngIf="headerActions" class="flex items-center space-x-2">
          <ng-container *ngTemplateOutlet="headerActions"></ng-container>
        </div>
      </div>

      <!-- Card Content -->
      <div class="card-content">
        <ng-content></ng-content>
      </div>

      <!-- Card Footer -->
      <div *ngIf="showFooter" class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <ng-content select="[card-footer]"></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .card {
      transition: all 0.3s ease;
    }

    .card:hover {
      transform: translateY(-2px);
    }

    .card-content {
      flex: 1;
    }
  `]
})
export class CardComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() icon?: string;
  @Input() iconClass: string = '';
  @Input() customClass: string = '';
  @Input() showHeader: boolean = true;
  @Input() showFooter: boolean = false;

  @ContentChild('headerActions') headerActions?: TemplateRef<any>;
}
