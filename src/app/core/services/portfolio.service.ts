import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { ApiResponse, PageResponse, PortfolioItem, PortfolioCategory } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private readonly API_URL = `${environment.apiUrl}/portfolio`;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<ApiResponse<PortfolioCategory[]>> {
    return this.http.get<ApiResponse<PortfolioCategory[]>>(`${this.API_URL}/categories`);
  }

  getPortfolioItems(page: number = 0, size: number = 12, category?: string): Observable<ApiResponse<PageResponse<PortfolioItem>>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    
    if (category) {
      params = params.set('category', category);
    }

    return this.http.get<ApiResponse<PageResponse<PortfolioItem>>>(this.API_URL, { params });
  }

  getPortfolioBySlug(slug: string): Observable<ApiResponse<PortfolioItem>> {
    return this.http.get<ApiResponse<PortfolioItem>>(`${this.API_URL}/${slug}`);
  }

  getFeaturedItems(limit: number = 6): Observable<ApiResponse<PortfolioItem[]>> {
    const params = new HttpParams().set('limit', limit.toString());
    return this.http.get<ApiResponse<PortfolioItem[]>>(`${this.API_URL}/featured`, { params });
  }
}
