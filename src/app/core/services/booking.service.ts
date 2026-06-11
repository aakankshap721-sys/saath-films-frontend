import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { ApiResponse, Booking } from '../models/models';

export interface BookingRequest {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  serviceId: number;
  packageId?: number;
  eventDate: string;
  eventTime?: string;
  eventEndDate?: string;
  eventLocation?: string;
  eventVenue?: string;
  eventType?: string;
  guestCount?: number;
  specialRequests?: string;
  howHeard?: string;
  totalAmount?: number;
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private readonly API_URL = `${environment.apiUrl}/booking`;

  constructor(private http: HttpClient) {}

  createBooking(booking: BookingRequest): Observable<ApiResponse<Booking>> {
    return this.http.post<ApiResponse<Booking>>(this.API_URL, booking);
  }

  checkAvailability(date: string): Observable<ApiResponse<{ date: string; available: boolean }>> {
    const params = new HttpParams().set('date', date);
    return this.http.get<ApiResponse<{ date: string; available: boolean }>>(`${this.API_URL}/availability`, { params });
  }

  getUnavailableDates(start: string, end: string): Observable<ApiResponse<string[]>> {
    const params = new HttpParams().set('start', start).set('end', end);
    return this.http.get<ApiResponse<string[]>>(`${this.API_URL}/unavailable-dates`, { params });
  }

  getBookingByNumber(bookingNumber: string): Observable<ApiResponse<Booking>> {
    return this.http.get<ApiResponse<Booking>>(`${this.API_URL}/${bookingNumber}`);
  }

  getMyBookings(): Observable<ApiResponse<Booking[]>> {
    return this.http.get<ApiResponse<Booking[]>>(`${environment.apiUrl}/client/bookings`);
  }
}
