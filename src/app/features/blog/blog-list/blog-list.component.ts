import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../../core/services/blog.service';
import { BlogPost } from '../../../core/models/models';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-list.component.html'
})
export class BlogListComponent implements OnInit {
  posts: BlogPost[] = [];
  loading = true;
  page = 0;
  totalPages = 0;

  featuredVideos = [
    {
      title: 'Best Prewedding In Matheran (Rahul & Rupal)',
      url: 'https://www.youtube.com/watch?v=-HtxMZm_4vM',
      embedUrl: 'https://www.youtube.com/embed/-HtxMZm_4vM'
    },
    {
      title: 'A Love Story Brewed Over Coffee ☕❤️',
      url: 'https://www.youtube.com/watch?v=mhY24KT_1uM',
      embedUrl: 'https://www.youtube.com/embed/mhY24KT_1uM'
    }
  ];


  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.blogService.getPosts(this.page).subscribe({
      next: res => {
        if (res.success) {
          this.posts = [...this.posts, ...res.data.content];
          this.totalPages = res.data.totalPages;
        }
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  loadMore() {
    this.page++;
    this.loadPosts();
  }
}
