import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [type]="type"
      [disabled]="disabled || loading"
      [class]="buttonClass"
      (click)="onClick($event)"
      class="focus-visible"
    >
      <!-- Loading Spinner -->
      <svg
        *ngIf="loading"
        class="animate-spin -ml-1 mr-2 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>

      <!-- Icon -->
      <i *ngIf="icon && !loading" [class]="icon" class="mr-2"></i>

      <!-- Text -->
      <span><ng-content></ng-content></span>

      <!-- Right Icon -->
      <i *ngIf="rightIcon" [class]="rightIcon" class="ml-2"></i>
    </button>
  `,
  styles: [`
    button {
      transition: all 0.2s ease-in-out;
      position: relative;
      overflow: hidden;
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none !important;
    }

    button:not(:disabled):hover {
      transform: translateY(-1px);
    }

    button:not(:disabled):active {
      transform: translateY(0);
    }

    .btn-primary {
      @apply bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg shadow-sm hover:shadow-md;
    }

    .btn-secondary {
      @apply bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg shadow-sm hover:shadow-md;
    }

    .btn-danger {
      @apply bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-sm hover:shadow-md;
    }

    .btn-ghost {
      @apply bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg;
    }

    .btn-sm {
      @apply px-3 py-1.5 text-sm;
    }

    .btn-md {
      @apply px-4 py-2 text-sm;
    }

    .btn-lg {
      @apply px-6 py-3 text-base;
    }
  `]
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;
  @Input() icon?: string;
  @Input() rightIcon?: string;
  @Input() fullWidth: boolean = false;
  @Input() customClass: string = '';

  @Output() clicked = new EventEmitter<Event>();

  get buttonClass(): string {
    const baseClasses = `btn-${this.variant} btn-${this.size}`;
    const widthClass = this.fullWidth ? 'w-full' : '';
    const loadingClass = this.loading ? 'cursor-wait' : '';
    const disabledClass = this.disabled ? 'cursor-not-allowed' : '';

    return `${baseClasses} ${widthClass} ${loadingClass} ${disabledClass} ${this.customClass}`.trim();
  }

  onClick(event: Event): void {
    if (!this.loading && !this.disabled) {
      this.clicked.emit(event);
    }
  }
}
