import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { ApiResponse, Service } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private readonly API_URL = `${environment.apiUrl}/services`;

  constructor(private http: HttpClient) {}

  getAllServices(): Observable<ApiResponse<Service[]>> {
    return this.http.get<ApiResponse<Service[]>>(this.API_URL);
  }

  getServiceBySlug(slug: string): Observable<ApiResponse<Service>> {
    return this.http.get<ApiResponse<Service>>(`${this.API_URL}/${slug}`);
  }
}
