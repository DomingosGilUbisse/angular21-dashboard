import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'dashboard-theme';
  private isDarkSubject = new BehaviorSubject<boolean>(this.getInitialTheme());
  public isDark$: Observable<boolean> = this.isDarkSubject.asObservable();

  constructor() {
    this.initializeTheme();
  }

  private getInitialTheme(): boolean {
    if (typeof localStorage === 'undefined') {
      return false;
    }

    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme === 'dark') return true;
    if (savedTheme === 'light') return false;
    // system
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private initializeTheme(): void {
    const isDark = this.isDarkSubject.value;
    this.updateDOMTheme(isDark);
  }

  private updateDOMTheme(isDark: boolean): void {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  toggleTheme(): void {
    const currentTheme = this.isDarkSubject.value;
    const newTheme = !currentTheme;

    this.isDarkSubject.next(newTheme);
    this.updateDOMTheme(newTheme);

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.THEME_KEY, newTheme ? 'dark' : 'light');
    }
  }

  setTheme(isDark: boolean): void {
    if (this.isDarkSubject.value !== isDark) {
      this.isDarkSubject.next(isDark);
      this.updateDOMTheme(isDark);

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.THEME_KEY, isDark ? 'dark' : 'light');
      }
    }
  }

  /** Define o modo: 'light' | 'dark' | 'system' */
  setMode(mode: 'light' | 'dark' | 'system'): void {
    let applyDark = false;
    if (mode === 'dark') applyDark = true;
    else if (mode === 'light') applyDark = false;
    else applyDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    this.isDarkSubject.next(applyDark);
    this.updateDOMTheme(applyDark);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.THEME_KEY, mode);
    }
  }

  getMode(): 'light' | 'dark' | 'system' {
    const saved = localStorage.getItem(this.THEME_KEY) as 'light' | 'dark' | 'system' | null;
    return saved ?? (this.isDarkSubject.value ? 'dark' : 'light');
  }

  getCurrentTheme(): boolean {
    return this.isDarkSubject.value;
  }

  isDarkMode(): boolean {
    return this.isDarkSubject.value;
  }
}
