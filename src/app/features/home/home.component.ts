import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioListComponent } from '../portfolio/portfolio-list/portfolio-list.component';
import { ServicesListComponent } from '../services/services-list/services-list.component';
import { BlogListComponent } from '../blog/blog-list/blog-list.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    PortfolioListComponent,
    ServicesListComponent,
    BlogListComponent,
    AboutComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  activeSection = 'home';

  ngOnInit(): void {
    this.onScroll();
  }

  @HostListener('window:scroll')
  onScroll(): void {

    const sections = [
      'home',
      'portfolio',
      'services',
      'blog',
      'about',
      'contact'
    ];

    for (const section of sections) {

      const element = document.getElementById(section);

      if (!element) continue;

      const rect = element.getBoundingClientRect();

      if (rect.top <= 120 && rect.bottom >= 120) {
        this.activeSection = section;
        break;
      }
    }
  }
}