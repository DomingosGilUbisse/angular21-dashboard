import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, startWith } from 'rxjs/operators';
import { AuthService } from '../../../core/services/auth.service';
import { ThemeService } from '../../../core/services/theme.service';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { CustomizerComponent } from '../customizer/customizer.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, CustomizerComponent],
  template: `
    <header class="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800 fixed top-0 left-0 right-0 z-40 transition-colors duration-300">
      <div class="px-4 sm:px-6 lg:px-8 text-gray-700 dark:text-gray-200">
        <div class="flex items-center justify-between h-16">
          <!-- Left Section -->
          <div class="flex items-center space-x-4">
            <!-- Sidebar Toggle -->
            <button
              (click)="toggleSidebar.emit()"
              aria-label="Alternar Sidebar"
              class="w-10 h-10 grid place-items-center rounded-lg text-gray-400 hover:text-gray-600 dark:text-gray-300 transition-colors"
            >
              <i class="fas fa-bars text-gray-400 dark:text-gray-300"></i>
            </button>

            <!-- Brand / Logo -->
            <a routerLink="/dashboard" class="relative select-none flex items-end"
              aria-label="Início">
              <span class="text-2xl sm:text-3xl font-extrabold tracking-tight text-red-600 dark:text-red-500">ariella</span>
              <span class="absolute -top-1 -right-5 inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-600 text-white text-[10px] font-bold shadow-none">ERP</span>
            </a>

            <!-- Breadcrumb
            <nav class="hidden md:flex" aria-label="Breadcrumb">
              <ol class="flex items-center space-x-2">
                <li *ngFor="let crumb of breadcrumbs; let last = last" class="flex items-center">
                  <ng-container *ngIf="!last">
                    <a
                      [routerLink]="crumb.path"
                      class="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                    >
                      {{ crumb.label }}
                    </a>
                    <span class="mx-2 text-gray-300 dark:text-gray-600">/</span>
                  </ng-container>
                  <span *ngIf="last" class="text-sm text-gray-900 dark:text-gray-100">
                    {{ crumb.label }}
                  </span>
                </li>
              </ol>
            </nav> -->
          </div>

          <!-- Right Section -->
          <div class="flex items-center space-x-4">
            <!-- Theme Toggle -->
            <button
              (click)="toggleTheme()"
              class="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              [title]="isDarkMode ? 'Tema Claro' : 'Tema Escuro'"
            >
              <ng-container *ngIf="isDarkMode; else moonIcon">
                <!-- Sun icon -->
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-current">
                  <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </ng-container>
              <ng-template #moonIcon>
                <!-- Moon icon -->
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-current">
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </ng-template>
            </button>

            <!-- Notifications -->
            <button
              class="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative"
              aria-label="Notificações"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-current">
                <path d="M12 22a2 2 0 002-2H10a2 2 0 002 2zm6-6V9a6 6 0 10-12 0v7l-2 2h16l-2-2z" stroke="currentColor" stroke-width="2"/>
              </svg>
              <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <!-- User Dropdown -->
            <div class="relative">
              <button
                (click)="toggleUserDropdown()"
                class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <img
                  *ngIf="currentUser?.avatar"
                  [src]="currentUser.avatar"
                  [alt]="currentUser.name"
                  class="w-8 h-8 rounded-full"
                />
                <div class="hidden md:block text-left">
                  <p class="text-sm text-gray-900 dark:text-gray-400">
                    {{ currentUser?.name || 'Usuário' }}
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    {{ currentUser?.role === 'admin' ? 'Administrador' : 'Usuário' }}
                  </p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray-400" [class.rotate-180]="isUserDropdownOpen">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2"/>
                </svg>
              </button>

              <!-- Dropdown Menu -->
              <div
                *ngIf="isUserDropdownOpen"
                class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50"
              >
                <a
                  routerLink="/settings"
                  class="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  (click)="isUserDropdownOpen = false"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-3">
                    <path d="M19.4 13a7.4 7.4 0 00.06-2l2.03-1.57-1.76-3.05-2.43.98a7.5 7.5 0 00-1.73-1l-.37-2.6h-3.52l-.37 2.6c-.62.24-1.2.56-1.73 1l-2.43-.98-1.76 3.05L4.54 11a7.4 7.4 0 00.06 2l-2.03 1.57 1.76 3.05 2.43-.98c.53.43 1.11.76 1.73 1l.37 2.6h3.52l.37-2.6c.62-.24 1.2-.56 1.73-1l2.43.98 1.76-3.05L19.4 13z" stroke="currentColor" stroke-width="2"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  Configurações
                </a>
                <a
                  href="#"
                  class="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-3">
                    <path d="M16 11a4 4 0 10-8 0 4 4 0 008 0z" stroke="currentColor" stroke-width="2"/>
                    <path d="M2 20a8 8 0 0116 0" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  Perfil
                </a>
                <hr class="my-1 border-gray-200 dark:border-gray-700">
                <button
                  (click)="logout()"
                  class="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-3">
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" stroke="currentColor" stroke-width="2"/>
                    <path d="M16 17l5-5-5-5M21 12H9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  Sair
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <app-customizer />
  `,
  styles: [`
    .rotate-180 {
      transform: rotate(180deg);
      transition: transform 0.2s ease;
    }
  `]
})
export class HeaderComponent {
  @Input() brand: string = 'Admin';
  @Input() isSidebarCollapsed = false;
  @Output() toggleSidebar = new EventEmitter<void>();

  isUserDropdownOpen = false;
  currentUser: any;
  isDarkMode = false;

  breadcrumbs: Array<{ label: string; path: string }> = [];

  constructor(
    private authService: AuthService,
    private themeService: ThemeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.currentUser = this.authService.getCurrentUser();
    this.isDarkMode = this.themeService.isDarkMode();
    this.subscribeToRouteChanges();
    this.subscribeToThemeChanges();
  }

  private subscribeToRouteChanges(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      startWith(null)
    ).subscribe(() => {
      this.updateBreadcrumbs();
    });
  }

  private subscribeToThemeChanges(): void {
    this.themeService.isDark$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

  private updateBreadcrumbs(): void {
    const breadcrumbs: Array<{ label: string; path: string }> = [];
    let currentRoute = this.activatedRoute.root;
    let url = '';

    while (currentRoute.children.length > 0) {
      const child = currentRoute.children[0];
      const routeSnapshot = child.snapshot;

      if (routeSnapshot.url.length > 0) {
        const path = routeSnapshot.url.map(segment => segment.path).join('/');
        url += `/${path}`;

        // Map route paths to user-friendly labels
        const label = this.getBreadcrumbLabel(path);
        if (label) {
          breadcrumbs.push({ label, path: url });
        }
      }

      currentRoute = child;
    }

    this.breadcrumbs = breadcrumbs;
  }

  private getBreadcrumbLabel(path: string): string {
    const labelMap: { [key: string]: string } = {
      'dashboard': 'Dashboard',
      'settings': 'Configurações',
      'profile': 'Perfil',
      'users': 'Usuários',
      'reports': 'Relatórios'
    };

    return labelMap[path] || path.charAt(0).toUpperCase() + path.slice(1);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleUserDropdown(): void {
    this.isUserDropdownOpen = !this.isUserDropdownOpen;
  }

  logout(): void {
    this.isUserDropdownOpen = false;
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  // Close dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.isUserDropdownOpen = false;
    }
  }
}

// Add HostListener import
import { HostListener } from '@angular/core';
