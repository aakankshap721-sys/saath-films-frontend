import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService } from '../../../core/services/blog.service';
import { BlogPost } from '../../../core/models/models';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-detail.component.html'
})
export class BlogDetailComponent implements OnInit {
  post: BlogPost | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.blogService.getPostBySlug(slug).subscribe({
      next: res => {
        if (res.success) this.post = res.data;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }
}
