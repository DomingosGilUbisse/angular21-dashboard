import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsCardComponent } from '../../shared/components/stats-card/stats-card.component';

@Component({
  selector: 'app-sales-dashboard',
  standalone: true,
  imports: [CommonModule, StatsCardComponent],
  template: `
    <section class="space-y-6">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Dashboard de Vendas</h1>

      <!-- KPIs -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <app-stats-card title="Receita" [value]="245000" icon="" iconClass="" iconBgClass="bg-green-100 dark:bg-green-900/20 text-green-600" [trend]="12" trendLabel="vs mês anterior"></app-stats-card>
        <app-stats-card title="Pedidos" [value]="5300" icon="" iconClass="" iconBgClass="bg-blue-100 dark:bg-blue-900/20 text-blue-600" [trend]="8" trendLabel="vs mês anterior"></app-stats-card>
        <app-stats-card title="Ticket Médio" [value]="460" icon="" iconClass="" iconBgClass="bg-purple-100 dark:bg-purple-900/20 text-purple-600" [trend]="3" trendLabel="vs mês anterior"></app-stats-card>
        <app-stats-card title="Reembolsos" [value]="42" icon="" iconClass="" iconBgClass="bg-red-100 dark:bg-red-900/20 text-red-600" [trend]="-1" trendLabel="vs mês anterior"></app-stats-card>
      </div>

      <!-- Gráfico Placeholder -->
      <div class="card">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Vendas por mês</h2>
          <div class="text-sm text-gray-500 dark:text-gray-400">Placeholder</div>
        </div>
        <div class="h-48 bg-gray-100 dark:bg-gray-800 rounded-lg grid place-items-center text-gray-500 dark:text-gray-400">Gráfico</div>
      </div>

      <!-- Tabela de Pedidos Recentes (mock) -->
      <div class="card">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Pedidos Recentes</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead>
              <tr class="text-left text-gray-600 dark:text-gray-400">
                <th class="py-2 pr-4">#</th>
                <th class="py-2 pr-4">Cliente</th>
                <th class="py-2 pr-4">Status</th>
                <th class="py-2 pr-4">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let o of orders" class="border-t border-gray-200 dark:border-gray-800">
                <td class="py-2 pr-4">{{ o.id }}</td>
                <td class="py-2 pr-4">{{ o.customer }}</td>
                <td class="py-2 pr-4"><span class="px-2 py-1 rounded-full text-xs" [ngClass]="o.statusClass">{{ o.status }}</span></td>
                <td class="py-2 pr-4">MT {{ o.total | number:'1.2-2' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `
})
export class SalesDashboardComponent {
  orders = [
    { id: 'A1024', customer: 'Maria Silva', status: 'Pago', statusClass: 'bg-green-100 text-green-700', total: 1299.9 },
    { id: 'A1025', customer: 'João Santos', status: 'Em processamento', statusClass: 'bg-blue-100 text-blue-700', total: 249.5 },
    { id: 'A1026', customer: 'ACME Ltda', status: 'Cancelado', statusClass: 'bg-red-100 text-red-700', total: 0.0 },
  ];
}
