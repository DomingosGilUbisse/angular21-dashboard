import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <!-- Sidebar -->
      <app-sidebar
        [isCollapsed]="isSidebarCollapsed"
        [isMobile]="isMobile"
        (toggle)="toggleSidebar()"
      ></app-sidebar>

      <!-- Main Content -->
      <div class="transition-all duration-300 ease-in-out"
           [class.lg:ml-64]="!isSidebarCollapsed"
           [class.lg:ml-16]="isSidebarCollapsed">

        <!-- Header -->
        <app-header
          [isSidebarCollapsed]="isSidebarCollapsed"
          (toggleSidebar)="toggleSidebar()"
        ></app-header>

        <!-- Page Content -->
        <main class="pt-16 min-h-screen">
          <div class="p-4 sm:p-6 lg:p-8">
            <div class="animate-fade-in">
              <router-outlet></router-outlet>
            </div>
          </div>
        </main>
        <app-footer></app-footer>
      </div>

      <!-- Mobile Sidebar Overlay -->
      <div
        *ngIf="isMobile && !isSidebarCollapsed"
        class="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
        (click)="toggleSidebar()"
      ></div>
    </div>
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.5s ease-out;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    main {
      transition: margin-left 0.3s ease-in-out;
    }
  `]
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  isSidebarCollapsed = false;
  isMobile = false;

  private destroy$ = new Subject<void>();

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.checkScreenSize();
    this.loadSidebarState();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth < 1024;

    // Auto-collapse sidebar on mobile
    if (this.isMobile) {
      this.isSidebarCollapsed = true;
    }
  }

  private loadSidebarState(): void {
    if (typeof localStorage !== 'undefined') {
      const savedState = localStorage.getItem('sidebar-collapsed');
      if (savedState !== null && !this.isMobile) {
        this.isSidebarCollapsed = savedState === 'true';
      }
    }
  }

  private saveSidebarState(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('sidebar-collapsed', this.isSidebarCollapsed.toString());
    }
  }

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    this.saveSidebarState();
  }
}
