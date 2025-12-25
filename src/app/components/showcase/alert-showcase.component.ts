import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-4">
      <!-- Success Alert -->
      <div class="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg dark:bg-green-900/30 dark:text-green-300 dark:border-green-700">
        <p class="font-medium">Sucesso!</p>
        <p class="text-sm">Sua operação foi concluída com sucesso.</p>
      </div>

      <!-- Error Alert -->
      <div class="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg dark:bg-red-900/30 dark:text-red-300 dark:border-red-700">
        <p class="font-medium">Erro!</p>
        <p class="text-sm">Ocorreu um erro ao processar sua solicitação.</p>
      </div>

      <!-- Warning Alert -->
      <div class="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-700">
        <p class="font-medium">Aviso!</p>
        <p class="text-sm">Por favor, revise as informações antes de continuar.</p>
      </div>

      <!-- Info Alert -->
      <div class="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700">
        <p class="font-medium">Informação!</p>
        <p class="text-sm">Este é um alerta informativo para o usuário.</p>
      </div>
    </div>
  `
})
export class AlertShowcaseComponent {}
