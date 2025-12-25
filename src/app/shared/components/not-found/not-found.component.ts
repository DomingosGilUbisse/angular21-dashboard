import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-background-light to-accent-purple/10 dark:from-gray-900 dark:via-background-dark dark:to-gray-800 px-4 py-12">
      <div class="text-center max-w-lg">
        <!-- 404 Illustration -->
        <div class="mb-8 animate-fade-in">
          <svg class="w-64 h-64 mx-auto text-primary-400 dark:text-primary-600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" fill="currentColor" opacity="0.1"/>
            <circle cx="70" cy="80" r="8" fill="currentColor" opacity="0.6"/>
            <circle cx="130" cy="80" r="8" fill="currentColor" opacity="0.6"/>
            <path d="M 60 130 Q 100 110 140 130" stroke="currentColor" stroke-width="3" fill="none" opacity="0.8"/>
            <text x="100" y="160" text-anchor="middle" class="text-4xl font-bold fill-current" opacity="0.8">404</text>
          </svg>
        </div>

        <!-- Error Message -->
        <div class="space-y-4 animate-scale-in">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Página não encontrada
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Desculpe, não conseguimos encontrar a página que você está procurando.
            Talvez você tenha digitado o endereço errado ou a página tenha sido movida.
          </p>
        </div>

        <!-- Action Buttons -->
        <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <app-button
            routerLink="/dashboard"
            icon="lucide-home"
            variant="primary"
          >
            Voltar para Dashboard
          </app-button>

          <app-button
            routerLink="/login"
            icon="lucide-arrow-left"
            variant="secondary"
          >
            Voltar para Login
          </app-button>
        </div>

        <!-- Additional Help -->
        <div class="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg animate-fade-in">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Se você continuar tendo problemas, entre em contato com o suporte ou tente:
          </p>
          <ul class="mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <li>• Verificar se o endereço está correto</li>
            <li>• Atualizar a página (F5)</li>
            <li>• Limpar o cache do navegador</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
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

    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    .animate-fade-in {
      animation: fadeIn 0.6s ease-out;
    }

    .animate-scale-in {
      animation: scaleIn 0.4s ease-out;
    }
  `]
})
export class NotFoundComponent {

}
