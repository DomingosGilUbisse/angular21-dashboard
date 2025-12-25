import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  template: `
    <div class="space-y-6">
      <div class="animate-fade-in">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Dashboard
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          Bem-vindo ao seu painel de controle
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Total de Vendas</h3>
            <app-icon name="trending-up" [size]="20" class="text-blue-600"></app-icon>
          </div>
          <p class="text-2xl font-bold text-blue-600">MT 124,563</p>
          <p class="text-sm text-green-600 mt-1">+12.5% vs mês anterior</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Novos Usuários</h3>
            <app-icon name="users" [size]="20" class="text-green-600"></app-icon>
          </div>
          <p class="text-2xl font-bold text-green-600">1,234</p>
          <p class="text-sm text-green-600 mt-1">+8.2% vs mês anterior</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Pedidos</h3>
            <app-icon name="shopping-cart" [size]="20" class="text-yellow-600"></app-icon>
          </div>
          <p class="text-2xl font-bold text-yellow-600">856</p>
          <p class="text-sm text-red-600 mt-1">-3.1% vs mês anterior</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Taxa de Conversão</h3>
            <app-icon name="bar-chart-3" [size]="20" class="text-purple-600"></app-icon>
          </div>
          <p class="text-2xl font-bold text-purple-600">3.24%</p>
          <p class="text-sm text-green-600 mt-1">+1.2% vs mês anterior</p>
        </div>
      </div>

      <!-- Chart Section -->
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Desempenho de Vendas</h3>
        <div class="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <p class="text-gray-500 dark:text-gray-400">
            <app-icon name="bar-chart-3" [size]="22" class="mb-2"></app-icon>
            Gráfico de vendas será implementado aqui
          </p>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Ações Rápidas</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button class="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
            <app-icon name="edit" [size]="22" class="text-blue-600 mb-2"></app-icon>
            <span class="text-sm text-gray-700 dark:text-gray-300">Novo Produto</span>
          </button>
          <button class="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
            <app-icon name="file-text" [size]="22" class="text-green-600 mb-2"></app-icon>
            <span class="text-sm text-gray-700 dark:text-gray-300">Novo Relatório</span>
          </button>
          <button class="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
            <app-icon name="users" [size]="22" class="text-blue-600 mb-2"></app-icon>
            <span class="text-sm text-gray-700 dark:text-gray-300">Convidar Usuário</span>
          </button>
          <button class="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
            <app-icon name="settings" [size]="22" class="text-purple-600 mb-2"></app-icon>
            <span class="text-sm text-gray-700 dark:text-gray-300">Configurações</span>
          </button>
        </div>
      </div>

      <!-- Component Showcase -->
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Showcase de Componentes</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">Explore nossa biblioteca de componentes Angular com Tailwind CSS</p>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <a routerLink="/showcase/ui" class="flex flex-col items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
            <app-icon name="layers" [size]="22" class="text-blue-600 mb-2"></app-icon>
            <span class="text-sm font-medium text-blue-700 dark:text-blue-400">UI Components</span>
            <span class="text-xs text-blue-600 dark:text-blue-500 mt-1">Botões, Cards, Alertas</span>
          </a>
          <a routerLink="/showcase/forms" class="flex flex-col items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
            <app-icon name="file-text" [size]="22" class="text-green-600 mb-2"></app-icon>
            <span class="text-sm font-medium text-green-700 dark:text-green-400">Formulários</span>
            <span class="text-xs text-green-600 dark:text-green-500 mt-1">Validação e Layout</span>
          </a>
          <a routerLink="/showcase/interactive" class="flex flex-col items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
            <app-icon name="sparkles" [size]="22" class="text-purple-600 mb-2"></app-icon>
            <span class="text-sm font-medium text-purple-700 dark:text-purple-400">Interativos</span>
            <span class="text-xs text-purple-600 dark:text-purple-500 mt-1">Animações e Hover</span>
          </a>
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
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Dashboard component initialized');
  }
}
