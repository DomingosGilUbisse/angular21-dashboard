import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface Activity {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  timestamp: Date;
  type: 'info' | 'success' | 'warning' | 'error';
}

interface ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }>;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-6">
      <!-- Header -->
      <div class="animate-fade-in">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Dashboard
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          Bem-vindo ao seu painel de controle
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Total de Vendas</p>
              <p class="text-2xl font-bold text-gray-900 dark:text-gray-100">MT 124,563</p>
            </div>
            <div class="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <i class="lucide-dollar-sign text-blue-600 dark:text-blue-400 text-xl"></i>
            </div>
          </div>
          <div class="mt-4 flex items-center">
            <span class="text-green-600 dark:text-green-400 text-sm font-medium">+12.5%</span>
            <span class="text-gray-600 dark:text-gray-400 text-sm ml-2">em relação ao mês passado</span>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Novos Usuários</p>
              <p class="text-2xl font-bold text-gray-900 dark:text-gray-100">1,234</p>
            </div>
            <div class="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <i class="lucide-users text-green-600 dark:text-green-400 text-xl"></i>
            </div>
          </div>
          <div class="mt-4 flex items-center">
            <span class="text-green-600 dark:text-green-400 text-sm font-medium">+8.2%</span>
            <span class="text-gray-600 dark:text-gray-400 text-sm ml-2">em relação ao mês passado</span>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Pedidos</p>
              <p class="text-2xl font-bold text-gray-900 dark:text-gray-100">856</p>
            </div>
            <div class="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <i class="lucide-shopping-cart text-yellow-600 dark:text-yellow-400 text-xl"></i>
            </div>
          </div>
          <div class="mt-4 flex items-center">
            <span class="text-red-600 dark:text-red-400 text-sm font-medium">-3.1%</span>
            <span class="text-gray-600 dark:text-gray-400 text-sm ml-2">em relação ao mês passado</span>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Taxa de Conversão</p>
              <p class="text-2xl font-bold text-gray-900 dark:text-gray-100">3.24%</p>
            </div>
            <div class="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <i class="lucide-trending-up text-purple-600 dark:text-purple-400 text-xl"></i>
            </div>
          </div>
          <div class="mt-4 flex items-center">
            <span class="text-green-600 dark:text-green-400 text-sm font-medium">+1.2%</span>
            <span class="text-gray-600 dark:text-gray-400 text-sm ml-2">em relação ao mês passado</span>
          </div>
        </div>
      </div>

      <!-- Chart Section -->
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 animate-fade-in">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Desempenho de Vendas</h3>
        <div class="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <p class="text-gray-500 dark:text-gray-400">Gráfico de vendas será implementado aqui</p>
        </div>
      </div>

      <!-- Recent Activities -->
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 animate-fade-in">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Atividades Recentes</h3>
          <button class="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
            Ver todas
          </button>
        </div>
        <div class="space-y-4">
          <div *ngFor="let activity of recentActivities" class="flex items-start space-x-3">
            <img
              [src]="activity.user.avatar"
              [alt]="activity.user.name"
              class="w-8 h-8 rounded-full"
            />
            <div class="flex-1 min-w-0">
              <p class="text-sm text-gray-900 dark:text-gray-100">
                <span class="font-medium">{{ activity.user.name }}</span>
                {{ activity.action }}
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                {{ getTimeAgo(activity.timestamp) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 animate-fade-in">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Ações Rápidas</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button class="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
            <i class="lucide-plus text-primary-600 dark:text-primary-400 text-2xl mb-2"></i>
            <span class="text-sm text-gray-700 dark:text-gray-300">Novo Produto</span>
          </button>
          <button class="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
            <i class="lucide-file-text text-green-600 dark:text-green-400 text-2xl mb-2"></i>
            <span class="text-sm text-gray-700 dark:text-gray-300">Novo Relatório</span>
          </button>
          <button class="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
            <i class="lucide-users text-blue-600 dark:text-blue-400 text-2xl mb-2"></i>
            <span class="text-sm text-gray-700 dark:text-gray-300">Convidar Usuário</span>
          </button>
          <button class="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
            <i class="lucide-settings text-purple-600 dark:text-purple-400 text-2xl mb-2"></i>
            <span class="text-sm text-gray-700 dark:text-gray-300">Configurações</span>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.6s ease-out;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class DashboardComponent implements OnInit, OnDestroy {
  currentUser: any;
  isDarkMode = false;
  
  private destroy$ = new Subject<void>();

  // Mock chart data
  chartData: ChartData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Vendas',
      data: [12000, 19000, 15000, 25000, 22000, 30000],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)'
    }]
  };

  // Mock recent activities
  recentActivities: Activity[] = [
    {
      id: '1',
      user: { name: 'João Silva', avatar: 'https://ui-avatars.com/api/?name=Joao+Silva&background=3b82f6&color=fff' },
      action: ' criou um novo relatório de vendas',
      timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
      type: 'success'
    },
    {
      id: '2',
      user: { name: 'Maria Santos', avatar: 'https://ui-avatars.com/api/?name=Maria+Santos&background=10b981&color=fff' },
      action: ' atualizou as configurações do sistema',
      timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
      type: 'info'
    },
    {
      id: '3',
      user: { name: 'Pedro Oliveira', avatar: 'https://ui-avatars.com/api/?name=Pedro+Oliveira&background=f59e0b&color=fff' },
      action: ' concluiu uma tarefa importante',
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      type: 'success'
    },
    {
      id: '4',
      user: { name: 'Ana Costa', avatar: 'https://ui-avatars.com/api/?name=Ana+Costa&background=ef4444&color=fff' },
      action: ' reportou um problema técnico',
      timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
      type: 'warning'
    },
    {
      id: '5',
      user: { name: 'Carlos Mendes', avatar: 'https://ui-avatars.com/api/?name=Carlos+Mendes&background=8b5cf6&color=fff' },
      action: ' enviou um feedback sobre o sistema',
      timestamp: new Date(Date.now() - 1000 * 60 * 120), // 2 hours ago
      type: 'error'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    // Mock user data
    this.currentUser = {
      name: 'Admin User',
      email: 'admin@dashboard.com',
      role: 'admin'
    };
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getTimeAgo(timestamp: Date): string {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 60) {
      return `${minutes} minutos atrás`;
    } else if (hours < 24) {
      return `${hours} horas atrás`;
    } else {
      return `${days} dias atrás`;
    }
  }
}
