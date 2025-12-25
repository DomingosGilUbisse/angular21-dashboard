import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-4">
      <div class="flex flex-wrap gap-3">
        <!-- Primary Badge -->
        <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900/20 dark:text-blue-300">
          Novo
        </span>

        <!-- Success Badge -->
        <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900/20 dark:text-green-300">
          Ativo
        </span>

        <!-- Large Badge -->
        <span class="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full dark:bg-blue-900/20 dark:text-blue-300">
          Em Destaque
        </span>

        <!-- Warning Badge -->
        <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-yellow-900/20 dark:text-yellow-300">
          Em Análise
        </span>

        <!-- Error Badge -->
        <span class="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900/20 dark:text-red-300">
          Inativo
        </span>
      </div>
    </div>
  `
})
export class BadgeShowcaseComponent {}
