import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShowcaseService } from '../../core/services/showcase.service';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
      <!-- Header -->
      <div class="bg-white dark:bg-gray-900 shadow-sm border-b dark:border-gray-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center py-6">
            <div>
              <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Angular + Tailwind Showcase</h1>
              <p class="text-gray-600 dark:text-gray-400 mt-1">Componentes reutilizáveis e exemplos práticos</p>
            </div>
            <div class="flex space-x-4">
              <a routerLink="/dashboard" class="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                Voltar ao Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Overview Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <!-- UI Components Card -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
            <div class="flex items-center mb-4">
              <div class="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                </svg>
              </div>
              <h3 class="ml-4 text-xl font-semibold text-gray-900 dark:text-gray-100">UI Components</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Botões, cards, alertas, badges e outros componentes essenciais de interface.</p>
            <a routerLink="/showcase/ui" class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
              Ver componentes
              <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

          <!-- Forms Card -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
            <div class="flex items-center mb-4">
              <div class="bg-green-100 dark:bg-green-900/20 p-3 rounded-lg">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 class="ml-4 text-xl font-semibold text-gray-900 dark:text-gray-100">Formulários</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Exemplos de formulários com validação, layouts responsivos e estilos modernos.</p>
            <a routerLink="/showcase/forms" class="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium">
              Ver formulários
              <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

          <!-- Interactive Components Card -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
            <div class="flex items-center mb-4">
              <div class="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-lg">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                </svg>
              </div>
              <h3 class="ml-4 text-xl font-semibold text-gray-900 dark:text-gray-100">Interativos</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Componentes com animações, efeitos hover e interações avançadas.</p>
            <a routerLink="/showcase/interactive" class="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium">
              Ver interativos
              <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Estatísticas do Showcase</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600">{{ uiComponentsCount }}</div>
              <div class="text-gray-600 dark:text-gray-400">UI Components</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-green-600">{{ formComponentsCount }}</div>
              <div class="text-gray-600 dark:text-gray-400">Formulários</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-600">{{ interactiveComponentsCount }}</div>
              <div class="text-gray-600 dark:text-gray-400">Interativos</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-orange-600">{{ totalVariants }}</div>
              <div class="text-gray-600 dark:text-gray-400">Total Variantes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ShowcaseComponent implements OnInit {
  uiComponentsCount = 0;
  formComponentsCount = 0;
  interactiveComponentsCount = 0;
  totalVariants = 0;

  constructor(private showcaseService: ShowcaseService) {}

  ngOnInit() {
    this.loadComponentStats();
  }

  private loadComponentStats() {
    const uiComponents = this.showcaseService.getUIComponents();
    const formComponents = this.showcaseService.getFormComponents();
    const interactiveComponents = this.showcaseService.getInteractiveComponents();

    this.uiComponentsCount = uiComponents.length;
    this.formComponentsCount = formComponents.length;
    this.interactiveComponentsCount = interactiveComponents.length;

    // Calcular total de variantes
    this.totalVariants = [
      ...uiComponents,
      ...formComponents,
      ...interactiveComponents
    ].reduce((total, component) => {
      return total + (component.variants?.length || 0);
    }, 0);
  }
}
