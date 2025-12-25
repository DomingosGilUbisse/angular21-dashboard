import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { ThemeService } from '../../../core/services/theme.service';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ButtonComponent,
    CardComponent
  ],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-background-light to-accent-purple/10 dark:from-gray-900 dark:via-background-dark dark:to-gray-800 px-4 py-12">
      <div class="w-full max-w-md">
        <!-- Logo and Title -->
        <div class="text-center mb-8 animate-fade-in">
          <div class="flex items-center justify-center mb-4">
            <div class="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-purple rounded-xl flex items-center justify-center shadow-lg">
              <i class="fas fa-tachometer-alt text-white text-2xl"></i>
            </div>
          </div>
          <h1 class="text-3xl font-bold text-gradient mb-2">Dashboard Admin</h1>
          <p class="text-gray-600 dark:text-gray-400">Entre com suas credenciais para continuar</p>
        </div>

        <!-- Login Card -->
        <app-card class="animate-scale-in">
          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-6">
            <!-- Email Field -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                formControlName="email"
                class="input-field"
                placeholder="seu@email.com"
                [class.border-red-500]="submitted && formControls['email'].errors"
              />
              <div *ngIf="submitted && formControls['email'].errors" class="mt-1 text-sm text-red-600 dark:text-red-400">
                <span *ngIf="formControls['email'].errors['required']">Email é obrigatório</span>
                <span *ngIf="formControls['email'].errors['email']">Email inválido</span>
              </div>
            </div>

            <!-- Password Field -->
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Senha
              </label>
              <div class="relative">
                <input
                  id="password"
                  [type]="showPassword ? 'text' : 'password'"
                  formControlName="password"
                  class="input-field pr-10"
                  placeholder="••••••••"
                  [class.border-red-500]="submitted && formControls['password'].errors"
                />
                <button
                  type="button"
                  (click)="togglePasswordVisibility()"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <i [class]="showPassword ? 'lucide-eye-off' : 'lucide-eye'" class="h-5 w-5"></i>
                </button>
              </div>
              <div *ngIf="submitted && formControls['password'].errors" class="mt-1 text-sm text-red-600 dark:text-red-400">
                <span *ngIf="formControls['password'].errors['required']">Senha é obrigatória</span>
                <span *ngIf="formControls['password'].errors['minlength']">Senha deve ter pelo menos 6 caracteres</span>
              </div>
            </div>

            <!-- Error Message -->
            <div *ngIf="errorMessage" class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
              <div class="flex items-center">
                <i class="lucide-alert-circle text-red-500 mr-2"></i>
                <span class="text-sm text-red-600 dark:text-red-400">{{ errorMessage }}</span>
              </div>
            </div>

            <!-- Submit Button -->
            <app-button
              type="submit"
              [loading]="isLoading"
              [fullWidth]="true"
              icon="lucide-log-in"
            >
              Entrar
            </app-button>

            <!-- Demo Credentials -->
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-sm">
              <p class="font-medium text-gray-700 dark:text-gray-300 mb-2">Credenciais de demonstração:</p>
              <div class="space-y-1 text-gray-600 dark:text-gray-400">
                <p><strong>Admin:</strong> admin@dashboard.com / admin123</p>
                <p><strong>Usuário:</strong> user@dashboard.com / user123</p>
              </div>
            </div>
          </form>
        </app-card>

        <!-- Footer Links -->
        <div class="text-center mt-6 space-y-2">
          <a href="#" class="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
            Esqueceu sua senha?
          </a>
          <div class="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <button
              (click)="toggleTheme()"
              class="flex items-center space-x-1 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              <i [class]="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'" class="h-4 w-4"></i>
              <span>{{ isDarkMode ? 'Tema Claro' : 'Tema Escuro' }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .text-gradient {
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .animate-fade-in {
      animation: fadeIn 0.6s ease-out;
    }

    .animate-scale-in {
      animation: scaleIn 0.4s ease-out;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
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
  `]
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  submitted = false;
  isLoading = false;
  errorMessage = '';
  showPassword = false;
  isDarkMode = false;

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private themeService: ThemeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.subscribeToTheme();
    this.subscribeToAuthState();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  private subscribeToTheme(): void {
    this.themeService.isDark$.pipe(takeUntil(this.destroy$)).subscribe(
      isDark => this.isDarkMode = isDark
    );
  }

  private subscribeToAuthState(): void {
    this.authService.authState$.pipe(takeUntil(this.destroy$)).subscribe(state => {
      this.isLoading = state.isLoading;
      if (state.error) {
        this.errorMessage = state.error;
      } else {
        this.errorMessage = '';
      }
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  onSubmit(): void {
    this.submitted = true;
    this.errorMessage = '';

    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (response) => {
        // Navigate to dashboard on successful login
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        // Error is handled by the auth service and reflected in authState$
        console.error('Login error:', error);
      }
    });
  }
}
