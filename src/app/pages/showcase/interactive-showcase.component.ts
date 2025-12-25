import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShowcaseService } from '../../core/services/showcase.service';

@Component({
  selector: 'app-interactive-showcase',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
      <!-- Header -->
      <div class="bg-white dark:bg-gray-900 shadow-sm border-b dark:border-gray-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center py-6">
            <div>
              <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Componentes Interativos</h1>
              <p class="text-gray-600 dark:text-gray-400 mt-1">Animações, efeitos hover e interações avançadas</p>
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
          <!-- Hover Effects -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div class="mb-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Efeitos Hover</h2>
              <p class="text-gray-600 dark:text-gray-400">Componentes com efeitos hover interativos e transições suaves</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <!-- Live Preview -->
              <div>
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Preview</h3>
                <div class="space-y-6">
                  <!-- Scale Hover Card -->
                  <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Card com Scale</h3>
                    <p class="text-gray-600 dark:text-gray-400 mt-2">Passe o mouse para ver o efeito de escala e sombra.</p>
                  </div>

                  <!-- Slide Up Card -->
                  <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Card com Slide Up</h3>
                    <p class="text-gray-600 dark:text-gray-400 mt-2">Este card sobe levemente quando você passa o mouse.</p>
                  </div>

                  <!-- Rotate Button -->
                  <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg hover:rotate-3 hover:scale-110 transition-all duration-300">
                    Botão com Rotação
                  </button>

                  <!-- Glow Effect -->
                  <div class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
                    <h3 class="text-lg font-semibold">Efeito Glow</h3>
                    <p class="mt-2">Card com efeito de brilho no hover.</p>
                  </div>
                </div>
              </div>

              <!-- Code Example -->
              <div>
                <div class="flex justify-between items-center mb-4">
                  <h3 class="text-lg font-semibold text-gray-800">Código CSS</h3>
                  <button 
                    (click)="copyCode(getHoverEffectsCode())"
                    class="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Copiar
                  </button>
                </div>
                <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <pre><code>{{ getHoverEffectsCode() }}</code></pre>
                </div>
              </div>
            </div>
          </div>

          <!-- Animations -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div class="mb-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Animações</h2>
              <p class="text-gray-600 dark:text-gray-400">Componentes com animações CSS e transições avançadas</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <!-- Live Preview -->
              <div>
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Preview</h3>
                <div class="space-y-6">
                  <!-- Pulse Animation -->
                  <div class="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-lg animate-pulse">
                    <h3 class="text-lg font-semibold">Animação Pulse</h3>
                    <p class="mt-2">Efeito de pulsação suave e contínua.</p>
                  </div>

                  <!-- Bounce Animation -->
                  <div class="bg-green-500 text-white p-6 rounded-lg animate-bounce">
                    <h3 class="text-lg font-semibold">Animação Bounce</h3>
                    <p class="mt-2">Efeito de salto contínuo.</p>
                  </div>

                  <!-- Ping Animation -->
                  <div class="relative inline-flex">
                    <button class="bg-red-500 text-white px-6 py-3 rounded-lg">
                      Botão com Ping
                    </button>
                    <span class="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  </div>

                  <!-- Loading Spinner -->
                  <div class="flex items-center space-x-3">
                    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    <span class="text-gray-700 dark:text-gray-300">Carregando...</span>
                  </div>
                </div>
              </div>

              <!-- Code Example -->
              <div>
                <div class="flex justify-between items-center mb-4">
                  <h3 class="text-lg font-semibold text-gray-800">Código CSS</h3>
                  <button 
                    (click)="copyCode(getAnimationsCode())"
                    class="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Copiar
                  </button>
                </div>
                <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <pre><code>{{ getAnimationsCode() }}</code></pre>
                </div>
              </div>
            </div>
          </div>

          <!-- Interactive States -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div class="mb-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Estados Interativos</h2>
              <p class="text-gray-600 dark:text-gray-400">Componentes com diferentes estados: focus, active, disabled</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <!-- Live Preview -->
              <div>
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Preview</h3>
                <div class="space-y-6">
                  <!-- Focus States -->
                  <div class="space-y-3">
                    <input 
                      type="text" 
                      placeholder="Campo com focus ring"
                      class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                    
                    <input 
                      type="text" 
                      placeholder="Campo com focus shadow"
                      class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:shadow-lg focus:shadow-blue-500/20 focus:border-blue-500 transition-all">
                  </div>

                  <!-- Button States -->
                  <div class="flex flex-wrap gap-3">
                    <button class="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-4 py-2 rounded-lg transition-all">
                      Hover & Active
                    </button>
                    
                    <button disabled class="bg-gray-400 dark:bg-gray-600 text-white px-4 py-2 rounded-lg cursor-not-allowed">
                      Disabled
                    </button>
                    
                    <button class="bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-200 text-white px-4 py-2 rounded-lg transition-all">
                      Com Focus Ring
                    </button>
                  </div>

                  <!-- Toggle Switch -->
                  <div class="flex items-center space-x-3">
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" (change)="toggleSwitch = !toggleSwitch">
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle Switch</span>
                    </label>
                  </div>

                  <!-- Progress Bar -->
                  <div class="space-y-2">
                    <div class="flex justify-between text-sm text-gray-600">
                      <span>Progresso</span>
                      <span>{{ progress }}%</span>
                    </div>
                    <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        class="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        [style.width.%]="progress">
                      </div>
                    </div>
                    <button 
                      (click)="increaseProgress()"
                      class="text-sm text-blue-600 hover:text-blue-800">
                      Aumentar Progresso
                    </button>
                  </div>
                </div>
              </div>

              <!-- Code Example -->
              <div>
                <div class="flex justify-between items-center mb-4">
                  <h3 class="text-lg font-semibold text-gray-800">Código CSS</h3>
                  <button 
                    (click)="copyCode(getInteractiveStatesCode())"
                    class="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Copiar
                  </button>
                </div>
                <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <pre><code>{{ getInteractiveStatesCode() }}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class InteractiveShowcaseComponent implements OnInit {
  toggleSwitch = false;
  progress = 30;

  constructor(private showcaseService: ShowcaseService) {}

  ngOnInit() {
    // Component initialization
  }

  increaseProgress() {
    this.progress = Math.min(100, this.progress + 20);
  }

  getHoverEffectsCode(): string {
    return `<!-- Scale Hover Card -->
<div class="bg-white p-6 rounded-lg shadow-sm border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
  <h3>Card com Scale</h3>
  <p>Passe o mouse para ver o efeito de escala e sombra.</p>
</div>

<!-- Slide Up Card -->
<div class="bg-white p-6 rounded-lg shadow-sm border hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer">
  <h3>Card com Slide Up</h3>
  <p>Este card sobe levemente quando você passa o mouse.</p>
</div>

<!-- Rotate Button -->
<button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:rotate-3 hover:scale-110 transition-all duration-300">
  Botão com Rotação
</button>

<!-- Glow Effect -->
<div class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
  <h3>Efeito Glow</h3>
  <p>Card com efeito de brilho no hover.</p>
</div>`;
  }

  getAnimationsCode(): string {
    return `<!-- Pulse Animation -->
<div class="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-lg animate-pulse">
  <h3>Animação Pulse</h3>
  <p>Efeito de pulsação suave e contínua.</p>
</div>

<!-- Bounce Animation -->
<div class="bg-green-500 text-white p-6 rounded-lg animate-bounce">
  <h3>Animação Bounce</h3>
  <p>Efeito de salto contínuo.</p>
</div>

<!-- Ping Animation -->
<div class="relative inline-flex">
  <button class="bg-red-500 text-white px-6 py-3 rounded-lg">
    Botão com Ping
  </button>
  <span class="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
    <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
  </span>
</div>

<!-- Loading Spinner -->
<div class="flex items-center space-x-3">
  <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  <span class="text-gray-700">Carregando...</span>
</div>`;
  }

  getInteractiveStatesCode(): string {
    return `<!-- Focus States -->
<input 
  type="text" 
  placeholder="Campo com focus ring"
  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">

<input 
  type="text" 
  placeholder="Campo com focus shadow"
  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:shadow-lg focus:shadow-blue-500/20 focus:border-blue-500 transition-all">

<!-- Button States -->
<button class="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-4 py-2 rounded-lg transition-all">
  Hover & Active
</button>

<button disabled class="bg-gray-400 text-white px-4 py-2 rounded-lg cursor-not-allowed">
  Disabled
</button>

<button class="bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-200 text-white px-4 py-2 rounded-lg transition-all">
  Com Focus Ring
</button>

<!-- Toggle Switch -->
<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer">
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle Switch</span>
</label>

<!-- Progress Bar -->
<div class="w-full bg-gray-200 rounded-full h-2">
  <div class="bg-blue-600 h-2 rounded-full transition-all duration-500" style="width: 30%"></div>
</div>`;
  }

  copyCode(code: string) {
    this.showcaseService.copyToClipboard(code).then(() => {
      console.log('Código copiado!');
    }).catch(err => {
      console.error('Erro ao copiar código:', err);
    });
  }
}
