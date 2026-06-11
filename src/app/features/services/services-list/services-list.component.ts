import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-list.component.html'
})
export class ServicesListComponent {

  services = [
    {
      name: 'Wedding Photography',
      image: 'assets/images/wedding.jpg',
      description: 'From emotional ceremonies to grand celebrations,we capture every beautiful moment of your wedding day.',
      driveLink: 'https://drive.google.com/drive/folders/1TXJpmp4-QDctgR7dUdjbZmbOLpGCjCHC?usp=sharing'
    },
    {
      name: 'Pre-Wedding Shoot',
      image: 'assets/images/03.jpeg',
      description: 'Creative and romantic pre-wedding sessions designed to tell your unique love story.',
      driveLink: 'https://drive.google.com/drive/folders/1XASaErzeBPhqDICY3na7C2UXCseT_t3l?usp=sharing'
    },
    {
      name: 'Portrait Photography',
      image: 'assets/images/portrait.jpg',
      description: 'Elegant portraits that showcase personality, confidence and timeless beauty.',
      driveLink: 'https://drive.google.com/drive/folders/1TXJpmp4-QDctgR7dUdjbZmbOLpGCjCHC?usp=sharing'
    },
    {
      name: 'Event Photography',
      image: 'assets/images/image1.jpg',
      description: 'Professional coverage for birthdays, corporate events, anniversaries and special occasions.',
      driveLink: 'https://drive.google.com/drive/folders/1UGLhcOnDvtaXbLhkGAvEpcSQks-pqgeM?usp=sharing'
    }
  ];
}