import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-4">
      <div class="flex flex-wrap gap-4">
        <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all">
          Botão Primário
        </button>
        <button class="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg">
          Botão Secundário
        </button>
        <button class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-all">
          Botão Outline
        </button>
        <button class="text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900 px-6 py-3 rounded-lg transition-all">
          Botão Ghost
        </button>
      </div>
    </div>
  `
})
export class ButtonShowcaseComponent {}