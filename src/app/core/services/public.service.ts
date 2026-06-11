import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { ApiResponse, Testimonial, ContactInquiry } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  private readonly API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTestimonials(featured: boolean = false): Observable<ApiResponse<Testimonial[]>> {
    return this.http.get<ApiResponse<Testimonial[]>>(`${this.API_URL}/testimonials`, {
      params: { featured: featured.toString() }
    });
  }

  submitContact(inquiry: ContactInquiry): Observable<ApiResponse<{ id: number }>> {
    return this.http.post<ApiResponse<{ id: number }>>(`${this.API_URL}/contact`, inquiry);
  }
}
