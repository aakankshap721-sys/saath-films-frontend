import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent {

  portfolioImages: string[] = [
  'assets/images/01.jpeg',
  'assets/images/03.jpeg',
  'assets/images/04.jpeg',
  'assets/images/05.jpeg',
  'assets/images/06.jpeg',
  'assets/images/09.jpeg',
  'assets/images/11.jpeg',
  'assets/images/14.jpeg',
  'assets/images/15.jpeg',
  'assets/images/17.jpeg',
  'assets/images/m1.jpg',
  'assets/images/m2.jpg',
  'assets/images/m3.jpg',
  'assets/images/m4.jpg',
  'assets/images/m5.jpg',
  'assets/images/w1.jpg',
  'assets/images/w2.jpg',
  'assets/images/w3.jpg',
  'assets/images/w4.jpg',
  'assets/images/32.jpeg',
  'assets/images/28.jpeg',
  'assets/images/29.jpeg',
  'assets/images/30.jpeg',
  'assets/images/33.jpeg',
  "assets/images/36.jpeg"
 
];

  selectedImage: string | null = null;

  openImage(image: string) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }
}