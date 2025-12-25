import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../../core/services/auth.service';
import { IconComponent } from '../../../shared/components/icon/icon.component';

interface MenuItem {
  title?: string;
  icon?: string;
  path?: string;
  badge?: string;
  badgeColor?: string;
  children?: MenuItem[];
  separator?: boolean;
  divider?: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  template: `
    <div class="fixed inset-y-0 left-0 z-30 w-64 bg-white/90 dark:bg-gray-900/80 backdrop-blur-md border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0"
         [class.-translate-x-full]="isMobile && isCollapsed"
         [class.w-64]="!isCollapsed"
         [class.w-16]="isCollapsed">

      <div class="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-center gap-2">
          <img src="assets/logo.svg" alt="Logo" class="w-7 h-7" />
          <span *ngIf="!isCollapsed" class="font-semibold text-gray-800 dark:text-gray-100 text-lg">ariella<span class="text-indigo-600">ERP</span></span>
        </div>
        <button (click)="toggle.emit()" class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition">
          <app-icon [name]="isCollapsed ? 'chevron-right' : 'chevron-left'" [size]="16" class="text-gray-600"></app-icon>
        </button>
      </div>

      <nav class="flex-1 px-3 py-4 overflow-y-auto space-y-1">
        <ng-container *ngFor="let item of menuItems">
          <div *ngIf="item.separator" class="border-t border-gray-200 dark:border-gray-700 my-3"></div>
          <div *ngIf="item.divider" class="mt-4 mb-2 text-xs font-semibold text-gray-500 uppercase">{{ item.divider }}</div>

          <a *ngIf="!item.children && !item.separator && !item.divider"
             [routerLink]="item.path"
             routerLinkActive="sidebar-item active"
             [routerLinkActiveOptions]="{ exact: true }"
             class="sidebar-item group">
            <div class="menu-item">
              <span class="menu-icon">
                <app-icon [name]="item.icon!" [size]="17" class="text-gray-500 group-hover:text-indigo-600 transition-colors"></app-icon>
              </span>
              <span *ngIf="!isCollapsed" class="menu-text">{{ item.title }}</span>
              <span *ngIf="!isCollapsed && item.badge" class="ml-auto badge" [ngClass]="{ 'green': item.badgeColor === 'green', 'blue': item.badgeColor === 'blue' }">{{ item.badge }}</span>
            </div>
          </a>

          <div *ngIf="item.children && !item.separator" class="space-y-1">
            <button (click)="toggleItem(item)" class="sidebar-item w-full justify-between group">
              <div class="menu-item">
                <span class="menu-icon">
                  <app-icon [name]="item.icon!" [size]="17" class="text-gray-500 group-hover:text-indigo-600 transition-colors"></app-icon>
                </span>
                <span *ngIf="!isCollapsed" class="menu-text">{{ item.title }}</span>
              </div>
              <app-icon [name]="expandedItems.has(item) ? 'chevron-up' : 'chevron-down'" [size]="15" class="text-gray-400 group-hover:text-indigo-600 transition-transform duration-200 ml-auto"></app-icon>
            </button>

            <div *ngIf="expandedItems.has(item) && !isCollapsed" class="ml-8 mt-1 space-y-1 submenu">
              <a *ngFor="let child of item.children"
                 [routerLink]="child.path"
                 routerLinkActive="sidebar-item active"
                 [routerLinkActiveOptions]="{ exact: true }"
                 class="sidebar-item group">
                <div class="menu-item">
                  <span class="menu-icon">
                    <app-icon [name]="(child.icon || 'circle')!" [size]="17" class="text-gray-400 group-hover:text-indigo-600 transition-colors"></app-icon>
                  </span>
                  <span class="menu-text text-[15px]">{{ child.title }}</span>
                </div>
              </a>
            </div>
          </div>
        </ng-container>
      </nav>

      <div class="p-4 border-t border-gray-200 dark:border-gray-700">
        <div *ngIf="!isCollapsed && currentUser" class="flex items-center gap-3">
          <img [src]="currentUser.avatar" [alt]="currentUser.name" class="w-8 h-8 rounded-full" />
          <div>
            <p class="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{{ currentUser.name }}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">{{ currentUser.role === 'admin' ? 'Administrador' : 'Usuário' }}</p>
          </div>
        </div>
        <div *ngIf="isCollapsed" class="flex justify-center">
          <button (click)="logout()" class="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" title="Sair">
            <app-icon name="log-out" [size]="18"></app-icon>
          </button>
        </div>
      </div>
    </div>

    <div *ngIf="isMobile && !isCollapsed" class="fixed inset-0 bg-black/50 z-20 lg:hidden" (click)="toggle.emit()"></div>
  `,
  styles: [`
    .sidebar-item {
      @apply flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-gray-100 dark:text-gray-100 transition-all duration-200 hover:bg-indigo-500/10 hover:text-white;
      border-left: 2px solid transparent;
      box-sizing: border-box;
      margin-left: 0 !important;
      transition: background-color 0.2s ease, color 0.2s ease, border-color 0.25s ease;
      font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      padding-block: 0.6rem;
      color: #334155;
      padding-left: 0rem;
    }
    .sidebar-item.active {
      @apply bg-indigo-500/15 text-white;
      border-left: 2px solid #818cf8;
      margin-left: 0;
      padding-left: 0rem;
    }
    .sidebar-item:hover app-icon { color: #a5b4fc; }
    .sidebar-item.active app-icon { color: #030a24; }
    .menu-item { display: flex; align-items: center; gap: 0.75rem; width: 100%; line-height: 1.25; font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; padding-top: 0.25rem; padding-bottom: 0.25rem; }
    .menu-icon { display: flex; align-items: center; justify-content: center; width: 20px; height: 20px; flex-shrink: 0; }
    .menu-text { display: flex; align-items: center; line-height: 1.25; font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color: #334155; }
    .sidebar-item app-icon { color: #334155; }
    .submenu .menu-item { padding-top: 0.35rem; padding-bottom: 0.35rem; }
    .badge { @apply text-[11px] px-2 py-0.5 rounded-full font-medium; }
    .badge.green { @apply bg-gray-700 text-green-300; }
    .badge.blue { @apply bg-gray-700 text-blue-300; }
    nav { max-height: calc(100vh - 8rem); }
    @media (max-width: 1024px) { nav { max-height: calc(100vh - 12rem); } }
  `]
})
export class SidebarComponent {
  @Input() isCollapsed = false;
  @Input() isMobile = false;
  @Output() toggle = new EventEmitter<void>();

  expandedItems = new Set<MenuItem>();
  currentUser: any;
  activeRoute = '';

  menuItems: MenuItem[] = [
    { title: 'Dashboard', icon: 'layout-dashboard', path: '/dashboard', badge: 'Novo', badgeColor: 'green' },
    { title: 'Showcase', icon: 'grid', children: [
        { title: 'Overview', icon: 'monitor', path: '/showcase' },
        { title: 'UI Components', icon: 'layers', path: '/showcase/ui' },
        { title: 'Formulários', icon: 'file-text', path: '/showcase/forms' },
        { title: 'Interativos', icon: 'sparkles', path: '/showcase/interactive' }
      ] },
    { separator: true },

    { title: 'Configurações', icon: 'settings', path: '/settings' },
    { title: 'Relatórios', icon: 'bar-chart-3', children: [
        { title: 'Análises', icon: 'activity', path: '/reports/analytics' },
        { title: 'Vendas', icon: 'trending-up', path: '/dashboard-sales' },
        { title: 'eCommerce', icon: 'shopping-bag', path: '/dashboard-ecommerce' }
      ] },
    { separator: true },
    { title: 'Usuários', icon: 'users', path: '/users', badge: '12', badgeColor: 'blue' }
  ];

  constructor(private authService: AuthService, private router: Router) {
    this.currentUser = this.authService.getCurrentUser();
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: NavigationEnd) => (this.activeRoute = e.urlAfterRedirects));
  }

  toggleItem(item: MenuItem) {
    this.expandedItems.has(item) ? this.expandedItems.delete(item) : this.expandedItems.add(item);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
