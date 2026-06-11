import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  authService = {
    user: () => ({
      firstName: 'User'
    })
  };

  bookings = [
    {
      bookingNumber: 'BK101',
      status: 'CONFIRMED',
      totalAmount: 25000,
      eventDate: new Date(),
      eventLocation: 'Pune',
      service: {
        name: 'Wedding Shoot'
      }
    }
  ];

  galleries = [
    {
      id: 1,
      title: 'Pre Wedding',
      totalImages: 120,
      coverImage: 'https://images.unsplash.com/photo-1519741497674-611027288377',
      createdAt: new Date(),
      isDownloadable: true
    }
  ];

  logout() {
    alert('Logged out');
  }
}