import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { ApiResponse, PageResponse, BlogPost } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly API_URL = `${environment.apiUrl}/blog`;

  constructor(private http: HttpClient) {}

  getPosts(page: number = 0, size: number = 10, tag?: string): Observable<ApiResponse<PageResponse<BlogPost>>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    
    if (tag) {
      params = params.set('tag', tag);
    }

    return this.http.get<ApiResponse<PageResponse<BlogPost>>>(this.API_URL, { params });
  }

  getPostBySlug(slug: string): Observable<ApiResponse<BlogPost>> {
    return this.http.get<ApiResponse<BlogPost>>(`${this.API_URL}/${slug}`);
  }
}
