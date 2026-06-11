import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { ApiResponse, ClientGallery } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ClientGalleryService {
  private readonly API_URL = `${environment.apiUrl}/client/galleries`;

  constructor(private http: HttpClient) {}

  getMyGalleries(): Observable<ApiResponse<ClientGallery[]>> {
    return this.http.get<ApiResponse<ClientGallery[]>>(this.API_URL);
  }

  getGalleryById(id: number): Observable<ApiResponse<ClientGallery>> {
    return this.http.get<ApiResponse<ClientGallery>>(`${this.API_URL}/${id}`);
  }

  selectImages(galleryId: number, imageIds: number[]): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${this.API_URL}/${galleryId}/select`, imageIds);
  }
}
