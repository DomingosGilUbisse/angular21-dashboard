import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Basic Card -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Card Básico</h3>
          <p class="text-gray-600 dark:text-gray-400 mt-2">Este é um card simples com borda e sombra suave.</p>
        </div>

        <!-- Hover Card -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Card com Hover</h3>
          <p class="text-gray-600 dark:text-gray-400 mt-2">Passe o mouse para ver o efeito de escala e sombra.</p>
        </div>

        <!-- Featured Card -->
        <div class="bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Card Destacado</h3>
          <p class="text-gray-600 dark:text-gray-400 mt-2">Card com gradiente de fundo e borda destacada.</p>
        </div>
      </div>
    </div>
  `
})
export class CardShowcaseComponent {}