import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-detail.component.html'
})
export class ServiceDetailComponent implements OnInit {

  service: any;

  services: any[] = [
    {
      slug: 'wedding-photography',
      name: 'Wedding Photography',
      coverImage: 'assets/images/01.jpg.jpeg',
      description: 'Complete wedding day coverage including candid moments, rituals, family portraits and cinematic storytelling.',
      driveLink: 'https://drive.google.com/drive/folders/1TXJpmp4-QDctgR7dUdjbZmbOLpGCjCHC?usp=sharing'
    },
    {
      slug: 'pre-wedding-shoot',
      name: 'Pre-Wedding Shoot',
      coverImage: 'assets/images/03.jpg.jpeg',
      description: 'Romantic destination and creative concept-based pre-wedding photography.',
      driveLink: 'https://drive.google.com/drive/folders/1XASaErzeBPhqDICY3na7C2UXCseT_t3l?usp=sharing'
    },
    {
      slug: 'portrait-photography',
      name: 'Portrait Photography',
      coverImage: 'assets/images/04.jpg.jpeg',
      description: 'Professional portraits for individuals, couples and personal branding.',
       driveLink: 'https://drive.google.com/drive/folders/1TXJpmp4-QDctgR7dUdjbZmbOLpGCjCHC?usp=sharing'
    },
    {
      slug: 'event-photography',
      name: 'Event Photography',
      coverImage: 'assets/images/05.jpg.jpeg',
      description: 'Professional event coverage with high-quality editing and fast delivery.',
       driveLink: 'https://drive.google.com/drive/folders/1UGLhcOnDvtaXbLhkGAvEpcSQks-pqgeM?usp=sharing'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.service = this.services.find(s => s.slug === slug);
  }

}