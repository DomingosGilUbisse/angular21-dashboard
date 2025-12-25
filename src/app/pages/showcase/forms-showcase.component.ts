import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShowcaseService, ShowcaseComponent as ShowcaseItem } from '../../core/services/showcase.service';

@Component({
  selector: 'app-forms-showcase',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
      <!-- Header -->
      <div class="bg-white dark:bg-gray-900 shadow-sm border-b dark:border-gray-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center py-6">
            <div>
              <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Formulários</h1>
              <p class="text-gray-600 dark:text-gray-400 mt-1">Exemplos de formulários com validação e estilos modernos</p>
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
          <!-- Contact Form -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div class="mb-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Formulário de Contato</h2>
              <p class="text-gray-600 dark:text-gray-400">Formulário completo com validação e diferentes tipos de campos</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <!-- Live Preview -->
              <div>
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Preview</h3>
                <form [formGroup]="contactForm" (ngSubmit)="onContactSubmit()" class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome Completo</label>
                    <input 
                      type="text" 
                      formControlName="name"
                      class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      [class.border-red-500]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched"
                      placeholder="Digite seu nome">
                    <div *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched" class="text-red-500 text-sm mt-1">
                      Nome é obrigatório
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      formControlName="email"
                      class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      [class.border-red-500]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                      placeholder="seu@email.com">
                    <div *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched" class="text-red-500 text-sm mt-1">
                      Email inválido
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Assunto</label>
                    <select 
                      formControlName="subject"
                      class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                      <option value="">Selecione um assunto</option>
                      <option value="support">Suporte</option>
                      <option value="sales">Vendas</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensagem</label>
                    <textarea 
                      formControlName="message"
                      rows="4"
                      class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Digite sua mensagem"></textarea>
                  </div>

                  <div class="flex items-center">
                    <input 
                      type="checkbox" 
                      formControlName="newsletter"
                      class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded">
                    <label class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                      Desejo receber newsletter
                    </label>
                  </div>

                  <button 
                    type="submit"
                    [disabled]="contactForm.invalid"
                    class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Enviar Mensagem
                  </button>
                </form>
              </div>

              <!-- Code Example -->
              <div>
                <div class="flex justify-between items-center mb-4">
                  <h3 class="text-lg font-semibold text-gray-800">Código HTML</h3>
                  <button 
                    (click)="copyCode(getContactFormCode())"
                    class="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Copiar
                  </button>
                </div>
                <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <pre><code>{{ getContactFormCode() }}</code></pre>
                </div>
              </div>
            </div>
          </div>

          <!-- Login Form -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div class="mb-6">
              <h2 class="text-2xl font-bold text-gray-900 mb-2">Formulário de Login</h2>
              <p class="text-gray-600">Formulário simples de autenticação com email e senha</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <!-- Live Preview -->
              <div>
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Preview</h3>
                <form [formGroup]="loginForm" (ngSubmit)="onLoginSubmit()" class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      formControlName="email"
                      class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="seu@email.com">
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Senha</label>
                    <input 
                      type="password" 
                      formControlName="password"
                      class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="••••••••">
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <input 
                        type="checkbox" 
                        formControlName="remember"
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded">
                      <label class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                        Lembrar-me
                      </label>
                    </div>
                    <a href="#" class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Esqueceu a senha?</a>
                  </div>

                  <button 
                    type="submit"
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Entrar
                  </button>
                </form>
              </div>

              <!-- Code Example -->
              <div>
                <div class="flex justify-between items-center mb-4">
                  <h3 class="text-lg font-semibold text-gray-800">Código HTML</h3>
                  <button 
                    (click)="copyCode(getLoginFormCode())"
                    class="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Copiar
                  </button>
                </div>
                <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <pre><code>{{ getLoginFormCode() }}</code></pre>
                </div>
              </div>
            </div>
          </div>

          <!-- Registration Form -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div class="mb-6">
              <h2 class="text-2xl font-bold text-gray-900 mb-2">Formulário de Registro</h2>
              <p class="text-gray-600">Formulário de cadastro com layout em grid responsivo</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <!-- Live Preview -->
              <div>
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Preview</h3>
                <form [formGroup]="registerForm" (ngSubmit)="onRegisterSubmit()" class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome</label>
                      <input 
                        type="text" 
                        formControlName="firstName"
                        class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="João">
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Sobrenome</label>
                      <input 
                        type="text" 
                        formControlName="lastName"
                        class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Silva">
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      formControlName="email"
                      class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="seu@email.com">
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Senha</label>
                      <input 
                        type="password" 
                        formControlName="password"
                        class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="••••••••">
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Confirmar Senha</label>
                      <input 
                        type="password" 
                        formControlName="confirmPassword"
                        class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="••••••••">
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Telefone</label>
                    <input 
                      type="tel" 
                      formControlName="phone"
                      class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="(00) 00000-0000">
                  </div>

                  <button 
                    type="submit"
                    class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Criar Conta
                  </button>
                </form>
              </div>

              <!-- Code Example -->
              <div>
                <div class="flex justify-between items-center mb-4">
                  <h3 class="text-lg font-semibold text-gray-800">Código HTML</h3>
                  <button 
                    (click)="copyCode(getRegisterFormCode())"
                    class="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Copiar
                  </button>
                </div>
                <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <pre><code>{{ getRegisterFormCode() }}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class FormsShowcaseComponent implements OnInit {
  contactForm: FormGroup;
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(
    private showcaseService: ShowcaseService,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: [''],
      newsletter: [false]
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false]
    });

    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: [''],
      phone: ['']
    });
  }

  ngOnInit() {
    // Os componentes de formulário são carregados dinamicamente
  }

  onContactSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulário de contato enviado:', this.contactForm.value);
      alert('Formulário de contato enviado com sucesso!');
      this.contactForm.reset();
    }
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      console.log('Login enviado:', this.loginForm.value);
      alert('Login realizado com sucesso!');
      this.loginForm.reset();
    }
  }

  onRegisterSubmit() {
    if (this.registerForm.valid) {
      console.log('Registro enviado:', this.registerForm.value);
      alert('Conta criada com sucesso!');
      this.registerForm.reset();
    }
  }

  getContactFormCode(): string {
    return `<form class="space-y-4">
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
    <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
  </div>
  
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
    <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
  </div>
  
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
    <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
      <option value="">Selecione um assunto</option>
      <option value="support">Suporte</option>
      <option value="sales">Vendas</option>
      <option value="feedback">Feedback</option>
    </select>
  </div>
  
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
    <textarea rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
  </div>
  
  <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
    Enviar Mensagem
  </button>
</form>`;
  }

  getLoginFormCode(): string {
    return `<form class="space-y-4">
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
    <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
  </div>
  
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Senha</label>
    <input type="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
  </div>
  
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
      <label class="ml-2 block text-sm text-gray-700">Lembrar-me</label>
    </div>
    <a href="#" class="text-sm text-blue-600 hover:text-blue-800">Esqueceu a senha?</a>
  </div>
  
  <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
    Entrar
  </button>
</form>`;
  }

  getRegisterFormCode(): string {
    return `<form class="space-y-4">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Nome</label>
      <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Sobrenome</label>
      <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
    </div>
  </div>
  
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
    <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Senha</label>
      <input type="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Confirmar Senha</label>
      <input type="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
    </div>
  </div>
  
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
    <input type="tel" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
  </div>
  
  <button type="submit" class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
    Criar Conta
  </button>
</form>`;
  }

  copyCode(code: string) {
    this.showcaseService.copyToClipboard(code).then(() => {
      console.log('Código copiado!');
    }).catch(err => {
      console.error('Erro ao copiar código:', err);
    });
  }
}
