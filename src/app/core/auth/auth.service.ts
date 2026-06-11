import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, catchError, of } from 'rxjs';
import { environment } from '@env/environment';
import { ApiResponse, AuthResponse, User } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = environment.apiUrl;
  private readonly TOKEN_KEY = 'saath_access_token';
  private readonly REFRESH_KEY = 'saath_refresh_token';
  private readonly USER_KEY = 'saath_user';

  private currentUser = signal<User | null>(null);
  
  user = computed(() => this.currentUser());
  isAuthenticated = computed(() => !!this.currentUser());
  isAdmin = computed(() => this.currentUser()?.role === 'ADMIN');

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.loadStoredUser();
  }

  private loadStoredUser(): void {
    const storedUser = localStorage.getItem(this.USER_KEY);
    if (storedUser) {
      try {
        this.currentUser.set(JSON.parse(storedUser));
      } catch {
        this.logout();
      }
    }
  }

  login(email: string, password: string): Observable<ApiResponse<AuthResponse>> {
    return this.http.post<ApiResponse<AuthResponse>>(`${this.API_URL}/auth/login`, { email, password })
      .pipe(
        tap(response => {
          if (response.success && response.data) {
            this.setAuthData(response.data);
          }
        })
      );
  }

  register(data: { email: string; password: string; firstName: string; lastName: string; phone?: string }): Observable<ApiResponse<AuthResponse>> {
    return this.http.post<ApiResponse<AuthResponse>>(`${this.API_URL}/auth/register`, data)
      .pipe(
        tap(response => {
          if (response.success && response.data) {
            this.setAuthData(response.data);
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUser.set(null);
    this.router.navigate(['/']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  refreshToken(): Observable<ApiResponse<AuthResponse>> {
    const refreshToken = localStorage.getItem(this.REFRESH_KEY);
    if (!refreshToken) {
      this.logout();
      return of({ success: false, message: 'No refresh token', data: null as any });
    }

    return this.http.post<ApiResponse<AuthResponse>>(`${this.API_URL}/auth/refresh`, refreshToken)
      .pipe(
        tap(response => {
          if (response.success && response.data) {
            this.setAuthData(response.data);
          }
        }),
        catchError(() => {
          this.logout();
          return of({ success: false, message: 'Refresh failed', data: null as any });
        })
      );
  }

  private setAuthData(authData: AuthResponse): void {
    localStorage.setItem(this.TOKEN_KEY, authData.accessToken);
    localStorage.setItem(this.REFRESH_KEY, authData.refreshToken);
    localStorage.setItem(this.USER_KEY, JSON.stringify(authData.user));
    this.currentUser.set(authData.user);
  }

  updateProfile(data: { firstName?: string; lastName?: string; phone?: string }): Observable<ApiResponse<any>> {
    return this.http.put<ApiResponse<any>>(`${this.API_URL}/client/profile`, data)
      .pipe(
        tap(() => {
          const user = this.currentUser();
          if (user) {
            const updatedUser = { ...user, ...data };
            localStorage.setItem(this.USER_KEY, JSON.stringify(updatedUser));
            this.currentUser.set(updatedUser);
          }
        })
      );
  }
}
