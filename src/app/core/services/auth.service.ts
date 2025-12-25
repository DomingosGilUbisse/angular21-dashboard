import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { User, LoginRequest, LoginResponse, AuthState } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'dashboard-token';
  private readonly USER_KEY = 'dashboard-user';

  private authStateSubject = new BehaviorSubject<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null
  });

  public authState$: Observable<AuthState> = this.authStateSubject.asObservable();

  constructor() {
    this.initializeAuth();
  }

  private initializeAuth(): void {
    const token = this.getToken();
    const user = this.getCurrentUser();

    if (token && user) {
      this.updateAuthState({
        user,
        token,
        isAuthenticated: true,
        isLoading: false,
        error: null
      });
    }
  }

  private updateAuthState(state: Partial<AuthState>): void {
    const currentState = this.authStateSubject.value;
    this.authStateSubject.next({ ...currentState, ...state });
  }

  private saveAuthData(token: string, user: User): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.TOKEN_KEY, token);
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }
  }

  private clearAuthData(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.USER_KEY);
    }
  }

  login(email: string, password: string): Observable<LoginResponse> {
    this.updateAuthState({ isLoading: true, error: null });

    // Mock authentication - in a real app, this would be an HTTP request
    return this.mockLogin(email, password).pipe(
      delay(1000), // Simulate network delay
      map(response => {
        this.saveAuthData(response.token, response.user);
        this.updateAuthState({
          user: response.user,
          token: response.token,
          isAuthenticated: true,
          isLoading: false,
          error: null
        });
        return response;
      }),
      catchError(error => {
        this.updateAuthState({
          isLoading: false,
          error: error.message
        });
        return throwError(() => error);
      })
    );
  }

  private mockLogin(email: string, password: string): Observable<LoginResponse> {
    // Mock users for demonstration
    const mockUsers = [
      {
        id: '1',
        name: 'Administrador',
        email: 'admin@dashboard.com',
        role: 'admin' as const,
        avatar: 'https://ui-avatars.com/api/?name=Administrador&background=3b82f6&color=fff',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date(),
        preferences: {
          theme: 'light' as const,
          language: 'pt-BR' as const,
          notifications: { email: true, push: true, sms: false },
          privacy: { profileVisible: true, activityVisible: true }
        }
      },
      {
        id: '2',
        name: 'Usuário Comum',
        email: 'user@dashboard.com',
        role: 'user' as const,
        avatar: 'https://ui-avatars.com/api/?name=Usuario&background=8b5cf6&color=fff',
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date(),
        preferences: {
          theme: 'dark' as const,
          language: 'pt-BR' as const,
          notifications: { email: false, push: true, sms: false },
          privacy: { profileVisible: false, activityVisible: true }
        }
      }
    ];

    // Simple validation
    if (!email || !password) {
      return throwError(() => new Error('Email e senha são obrigatórios'));
    }

    if (password.length < 6) {
      return throwError(() => new Error('Senha deve ter pelo menos 6 caracteres'));
    }

    // Find user by email
    const user = mockUsers.find(u => u.email === email.toLowerCase());

    if (!user) {
      return throwError(() => new Error('Usuário não encontrado'));
    }

    // Mock password validation (in real app, this would be server-side)
    const validPassword = email === 'admin@dashboard.com' ? 'admin123' : 'user123';
    if (password !== validPassword) {
      return throwError(() => new Error('Senha incorreta'));
    }

    // Generate mock token
    const token = btoa(JSON.stringify({ userId: user.id, email: user.email, timestamp: Date.now() }));

    return of({
      user,
      token,
      expiresIn: 86400 // 24 hours
    });
  }

  logout(): void {
    this.clearAuthData();
    this.updateAuthState({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null
    });
  }

  isAuthenticated(): boolean {
    return this.authStateSubject.value.isAuthenticated;
  }

  getToken(): string | null {
    if (typeof localStorage === 'undefined') {
      return this.authStateSubject.value.token;
    }
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getCurrentUser(): User | null {
    if (typeof localStorage === 'undefined') {
      return this.authStateSubject.value.user;
    }

    const userData = localStorage.getItem(this.USER_KEY);
    if (userData) {
      try {
        const parsed = JSON.parse(userData);
        return {
          ...parsed,
          createdAt: new Date(parsed.createdAt),
          updatedAt: new Date(parsed.updatedAt)
        };
      } catch {
        return null;
      }
    }
    return null;
  }

  updateUser(user: Partial<User>): void {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      const updatedUser = {
        ...currentUser,
        ...user,
        updatedAt: new Date()
      };

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.USER_KEY, JSON.stringify(updatedUser));
      }

      this.updateAuthState({ user: updatedUser });
    }
  }

  getAuthState(): AuthState {
    return this.authStateSubject.value;
  }
}
