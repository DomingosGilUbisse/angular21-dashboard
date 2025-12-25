import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsCardComponent } from '../../shared/components/stats-card/stats-card.component';

@Component({
  selector: 'app-ecommerce-dashboard',
  standalone: true,
  imports: [CommonModule, StatsCardComponent],
  template: `
    <section class="space-y-6">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Dashboard eCommerce</h1>

      <!-- KPIs -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <app-stats-card title="Sessões" [value]="84500" icon="" iconClass="" iconBgClass="bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600" [trend]="15" trendLabel="vs semana anterior"></app-stats-card>
        <app-stats-card title="Conversão" [value]="'3,2%'" icon="" iconClass="" iconBgClass="bg-teal-100 dark:bg-teal-900/20 text-teal-600" [trend]="1" trendLabel="vs semana anterior"></app-stats-card>
        <app-stats-card title="Carrinhos" [value]="6200" icon="" iconClass="" iconBgClass="bg-orange-100 dark:bg-orange-900/20 text-orange-600" [trend]="4" trendLabel="vs semana anterior"></app-stats-card>
        <app-stats-card title="Abandono" [value]="'68%'" icon="" iconClass="" iconBgClass="bg-amber-100 dark:bg-amber-900/20 text-amber-600" [trend]="-2" trendLabel="vs semana anterior"></app-stats-card>
      </div>

      <!-- Funil Placeholder -->
      <div class="card">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Funil de Vendas</h2>
          <div class="text-sm text-gray-500 dark:text-gray-400">Placeholder</div>
        </div>
        <div class="h-48 bg-gray-100 dark:bg-gray-800 rounded-lg grid place-items-center text-gray-500 dark:text-gray-400">Gráfico</div>
      </div>

      <!-- Produtos Top (mock) -->
      <div class="card">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Top Produtos</h2>
        <ul class="divide-y divide-gray-200 dark:divide-gray-800">
          <li *ngFor="let p of topProducts" class="py-2 flex items-center justify-between">
            <span class="text-sm text-gray-700 dark:text-gray-300">{{ p.name }}</span>
            <span class="text-sm font-medium text-gray-900 dark:text-gray-100">MT {{ p.revenue | number:'1.2-2' }}</span>
          </li>
        </ul>
      </div>
    </section>
  `
})
export class EcommerceDashboardComponent {
  topProducts = [
    { name: 'Headset Gamer X', revenue: 38999.9 },
    { name: 'Teclado Mecânico Pro', revenue: 21500.0 },
    { name: 'Mouse RGB Ultra', revenue: 17890.5 },
  ];
}
