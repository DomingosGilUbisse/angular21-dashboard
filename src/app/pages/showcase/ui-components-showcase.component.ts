import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShowcaseService, ShowcaseComponent as ShowcaseItem, ComponentVariant } from '../../core/services/showcase.service';
import { ButtonShowcaseComponent } from '../../components/showcase/button-showcase.component';
import { CardShowcaseComponent } from '../../components/showcase/card-showcase.component';
import { AlertShowcaseComponent } from '../../components/showcase/alert-showcase.component';
import { BadgeShowcaseComponent } from '../../components/showcase/badge-showcase.component';

@Component({
  selector: 'app-ui-components-showcase',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonShowcaseComponent, CardShowcaseComponent, AlertShowcaseComponent, BadgeShowcaseComponent],
  template: `
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
      <!-- Header -->
      <div class="bg-white dark:bg-gray-900 shadow-sm border-b dark:border-gray-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center py-6">
            <div>
              <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">UI Components</h1>
              <p class="text-gray-600 dark:text-gray-400 mt-1">Botões, cards, alertas e badges com Tailwind CSS</p>
            </div>
            <div class="flex space-x-4">
              <a routerLink="/showcase" class="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                ← Voltar ao Showcase
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="space-y-12">
          <!-- Component Sections -->
          <div *ngFor="let component of uiComponents" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div class="mb-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{{ component.name }}</h2>
              <p class="text-gray-600 dark:text-gray-400">{{ component.description }}</p>
            </div>

            <!-- Component Examples -->
            <div class="space-y-8">
              <!-- Variants -->
              <div *ngIf="component.variants && component.variants.length > 0" class="space-y-6">
                <div *ngFor="let variant of component.variants" class="border rounded-lg p-4 dark:border-gray-700">
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">{{ variant.name }}</h3>

                  <!-- Live Preview -->
                  <div class="mb-4">
                    <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preview:</h4>
                    <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <app-button-showcase *ngIf="component.id === 'buttons'"></app-button-showcase>
                      <app-card-showcase *ngIf="component.id === 'cards'"></app-card-showcase>
                      <app-alert-showcase *ngIf="component.id === 'alerts'"></app-alert-showcase>
                      <app-badge-showcase *ngIf="component.id === 'badges'"></app-badge-showcase>
                    </div>
                  </div>

                  <!-- Code Display -->
                  <div class="mb-4">
                    <div class="flex justify-between items-center mb-2">
                      <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300">Código:</h4>
                      <button
                        (click)="copyCode(variant.codeExample)"
                        class="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                        Copiar
                      </button>
                    </div>
                    <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre><code>{{ variant.codeExample }}</code></pre>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Default Example -->
              <div class="border rounded-lg p-4 dark:border-gray-700">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">Exemplo Padrão</h3>

                <!-- Live Preview -->
                <div class="mb-4">
                  <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preview:</h4>
                  <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <app-button-showcase *ngIf="component.id === 'buttons'"></app-button-showcase>
                    <app-card-showcase *ngIf="component.id === 'cards'"></app-card-showcase>
                    <app-alert-showcase *ngIf="component.id === 'alerts'"></app-alert-showcase>
                    <app-badge-showcase *ngIf="component.id === 'badges'"></app-badge-showcase>
                  </div>
                </div>

                <!-- Code Display -->
                <div class="mb-4">
                  <div class="flex justify-between items-center mb-2">
                    <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300">Código:</h4>
                    <button
                      (click)="copyCode(component.codeExample)"
                      class="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                      Copiar
                    </button>
                  </div>
                  <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre><code>{{ component.codeExample }}</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class UIComponentsShowcaseComponent implements OnInit {
  uiComponents: ShowcaseItem[] = [];

  constructor(private showcaseService: ShowcaseService) {}

  ngOnInit() {
    this.uiComponents = this.showcaseService.getUIComponents();
  }

  copyCode(code: string) {
    this.showcaseService.copyToClipboard(code).then(() => {
      // Mostrar feedback visual (poderia ser um toast)
      console.log('Código copiado!');
    }).catch(err => {
      console.error('Erro ao copiar código:', err);
    });
  }
}
