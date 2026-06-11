import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { PortfolioItem } from '../../../core/models/models';

@Component({
  selector: 'app-portfolio-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio-detail.component.html'
})
export class PortfolioDetailComponent implements OnInit {
  portfolio: PortfolioItem | null = null;
  loading = true;
  lightboxIndex: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private portfolioService: PortfolioService
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.portfolioService.getPortfolioBySlug(slug).subscribe({
      next: res => {
        if (res.success) this.portfolio = res.data;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  openLightbox(index: number) {
    this.lightboxIndex = index;
  }

  closeLightbox() {
    this.lightboxIndex = null;
  }

  prevImage() {
    if (this.lightboxIndex !== null && this.portfolio) {
      this.lightboxIndex = (this.lightboxIndex - 1 + this.portfolio.images.length) % this.portfolio.images.length;
    }
  }

  nextImage() {
    if (this.lightboxIndex !== null && this.portfolio) {
      this.lightboxIndex = (this.lightboxIndex + 1) % this.portfolio.images.length;
    }
  }
}
