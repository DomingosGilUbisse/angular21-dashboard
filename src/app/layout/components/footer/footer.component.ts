import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400">
      <div class="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <p class="text-xs sm:text-sm">&copy; {{ year }} ariella ERP. Todos os direitos reservados.</p>
        <div class="hidden sm:flex items-center space-x-4 text-xs">
          <a routerLink="/dashboard" class="hover:text-gray-800 dark:hover:text-gray-200">Dashboard</a>
          <a routerLink="/settings" class="hover:text-gray-800 dark:hover:text-gray-200">Configurações</a>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  year = new Date().getFullYear();
}
