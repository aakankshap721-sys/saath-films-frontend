import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './booking-form.component.html'
})
export class BookingFormComponent {

  step = 1;
  submitted = false;
  submitting = false;

  bookingNumber = '';

  ownerWhatsapp = '919617015154'; // Replace with your number

  services = [
    'Wedding Photography',
    'Pre-Wedding Shoot',
    'Portrait Photography',
    'Event Photography'
  ];

  form = {
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    service: '',
    eventDate: '',
    eventTime: '',
    eventLocation: '',
    eventVenue: '',
    guestCount: '',
    specialRequests: ''
  };

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  sendWhatsappBackup() {

    const message = `
📸 NEW BOOKING REQUEST

Name: ${this.form.clientName}
Phone: ${this.form.clientPhone}
Email: ${this.form.clientEmail}

Service: ${this.form.service}

Date: ${this.form.eventDate}
Time: ${this.form.eventTime}

Location: ${this.form.eventLocation}
Venue: ${this.form.eventVenue}

Guests: ${this.form.guestCount}

Special Request:
${this.form.specialRequests}
`;

    window.open(
      `https://wa.me/${this.ownerWhatsapp}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  }

  onSubmit() {

    this.submitting = true;

    const templateParams = {
      client_name: this.form.clientName,
      client_email: this.form.clientEmail,
      client_phone: this.form.clientPhone,
      service: this.form.service,
      event_date: this.form.eventDate,
      event_time: this.form.eventTime,
      event_location: this.form.eventLocation,
      event_venue: this.form.eventVenue,
      guest_count: this.form.guestCount,
      special_requests: this.form.specialRequests
    };

    emailjs.send(
      'service_ulyxgbx',
      'template_xy3rhsd',
      templateParams,
      '-I_8hCzKPlaVOdoL1'
    )
    .then(() => {

      this.bookingNumber =
        'BK-' + Math.floor(100000 + Math.random() * 900000);

      this.submitted = true;
      this.submitting = false;

    })
    .catch((error) => {

      console.error(error);

      alert(
        'Email sending failed. Please try WhatsApp booking instead.'
      );

      this.submitting = false;
    });
  }
}