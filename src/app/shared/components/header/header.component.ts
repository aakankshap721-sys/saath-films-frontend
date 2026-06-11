import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  menuOpen = false;
  activeSection = 'home';

  constructor(public authService: AuthService) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    this.authService.logout();
  }

  @HostListener('window:scroll')
  onScroll() {

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

      if (rect.top <= 150 && rect.bottom >= 150) {
        this.activeSection = section;
        break;
      }
    }
  }
}