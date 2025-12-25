import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-6">
      <div class="animate-fade-in">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Configurações
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          Gerencie seu perfil e preferências do sistema
        </p>
      </div>

      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Perfil do Usuário</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nome Completo</label>
            <input type="text" class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" value="Admin User" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input type="email" class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" value="admin@dashboard.com" disabled />
          </div>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Salvar Perfil</button>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Preferências</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tema</label>
            <select [value]="selectedTheme" (change)="onThemeChange($event)" class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
              <option value="light">Tema Claro</option>
              <option value="dark">Tema Escuro</option>
              <option value="system">Tema do Sistema</option>
            </select>
          </div>
          <button (click)="savePreferences()" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Salvar Preferências</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.6s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class SettingsComponent implements OnInit {
  selectedTheme: 'light' | 'dark' | 'system' = 'light';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.selectedTheme = this.themeService.getMode();
  }

  onThemeChange(ev: Event) {
    const value = (ev.target as HTMLSelectElement).value as 'light' | 'dark' | 'system';
    this.selectedTheme = value;
    this.themeService.setMode(value);
  }

  savePreferences() {
    this.themeService.setMode(this.selectedTheme);
  }
}
