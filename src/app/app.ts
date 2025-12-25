import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { AuthService } from './core/services/auth.service';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MainLayoutComponent
  ],
  template: `
    <div class="app-container">
      <!-- Show main layout for authenticated routes -->
      <app-main-layout *ngIf="showMainLayout"></app-main-layout>

      <!-- Show standalone pages for auth routes -->
      <router-outlet *ngIf="!showMainLayout"></router-outlet>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
    }
  `]
})
export class App implements OnInit, OnDestroy {
  showMainLayout = false;

  private destroy$ = new Subject<void>();

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setupRouteListener();
    this.checkInitialRoute();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setupRouteListener(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.destroy$)
    ).subscribe((event: NavigationEnd) => {
      this.updateLayoutVisibility(event.urlAfterRedirects);
    });
  }

  private checkInitialRoute(): void {
    const currentUrl = this.router.url;
    this.updateLayoutVisibility(currentUrl);
  }

  private updateLayoutVisibility(url: string): void {
    // Show main layout for all routes except login and 404
    const authRoutes = ['/login', '/404'];
    this.showMainLayout = !authRoutes.some(route => url.startsWith(route));

    // Handle authentication redirects
    if (url === '/login' && this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    } else if (url !== '/login' && !this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }
}
