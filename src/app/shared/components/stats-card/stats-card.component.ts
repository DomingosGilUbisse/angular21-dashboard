import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card hover:shadow-lg transition-all duration-300">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <div class="flex items-center">
            <div class="p-2 rounded-lg" [ngClass]="iconBgClass">
              <i [class]="icon" class="text-lg" [ngClass]="iconClass"></i>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
                {{ title }}
              </p>
              <p class="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {{ formatValue(value) }}
              </p>
            </div>
          </div>
        </div>

        <!-- Trend Indicator -->
        <div *ngIf="trend !== undefined" class="text-right">
          <div class="flex items-center" [ngClass]="trend >= 0 ? 'text-green-600' : 'text-red-600'">
            <i [class]="trend >= 0 ? 'lucide-trending-up' : 'lucide-trending-down'" class="text-sm mr-1"></i>
            <span class="text-sm font-medium">
              {{ Math.abs(trend) }}%
            </span>
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {{ trendLabel }}
          </p>
        </div>
      </div>

      <!-- Progress Bar -->
      <div *ngIf="progress !== undefined" class="mt-4">
        <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
          <span>{{ progressLabel }}</span>
          <span>{{ progress }}%</span>
        </div>
        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            class="bg-primary-600 h-2 rounded-full transition-all duration-500"
            [style.width.%]="progress"
          ></div>
        </div>
      </div>

      <!-- Description -->
      <p *ngIf="description" class="mt-3 text-sm text-gray-500 dark:text-gray-400">
        {{ description }}
      </p>
    </div>
  `,
  styles: [`
    .card {
      transition: all 0.3s ease;
    }

    .card:hover {
      transform: translateY(-2px);
    }
  `]
})
export class StatsCardComponent {
  @Input() title: string = '';
  @Input() value: number | string = 0;
  @Input() icon: string = '';
  @Input() iconClass: string = '';
  @Input() iconBgClass: string = 'bg-primary-100 dark:bg-primary-900/20 text-primary-600';
  @Input() trend?: number; // Percentage change
  @Input() trendLabel: string = 'vs último mês';
  @Input() progress?: number; // Progress percentage (0-100)
  @Input() progressLabel: string = 'Progresso';
  @Input() description?: string;

  protected readonly Math = Math;

  formatValue(value: number | string): string {
    if (typeof value === 'string') {
      return value;
    }

    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M';
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K';
    }

    return value.toLocaleString();
  }
}
