export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  phone: string;
  avatarUrl: string;
  role: 'ADMIN' | 'CLIENT';
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: number;
  user: User;
}

export interface Service {
  id: number;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  coverImage: string;
  icon: string;
  startingPrice: number;
  displayOrder: number;
  packages: Package[];
}

export interface Package {
  id: number;
  name: string;
  description: string;
  price: number;
  features: string;
  duration: string;
  deliverables: string;
  isPopular: boolean;
}

export interface PortfolioCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  coverImage: string;
  displayOrder: number;
  itemCount?: number;
}

export interface PortfolioItem {
  id: number;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  location: string;
  shootDate: string;
  clientName: string;
  isFeatured: boolean;
  viewCount: number;
  createdAt: string;
  category: PortfolioCategory;
  images: PortfolioImage[];
}

export interface PortfolioImage {
  id: number;
  imageUrl: string;
  thumbnailUrl: string;
  altText: string;
  displayOrder: number;
}

export interface Booking {
  id: number;
  bookingNumber: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  eventDate: string;
  eventTime: string;
  eventEndDate: string;
  eventLocation: string;
  eventVenue: string;
  eventType: string;
  guestCount: number;
  specialRequests: string;
  status: 'PENDING' | 'CONFIRMED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  totalAmount: number;
  advancePaid: number;
  paymentStatus: 'PENDING' | 'PARTIAL' | 'PAID';
  createdAt: string;
  service: { id: number; name: string; slug: string };
  selectedPackage: { id: number; name: string; price: number };
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  tags: string;
  metaTitle: string;
  metaDescription: string;
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  publishedAt: string;
  viewCount: number;
  createdAt: string;
  author: { id: number; name: string; avatarUrl: string };
}

export interface Testimonial {
  id: number;
  clientName: string;
  clientDesignation: string;
  clientImage: string;
  rating: number;
  content: string;
  eventType: string;
  eventDate: string;
  isFeatured: boolean;
  serviceName: string;
}

export interface ClientGallery {
  id: number;
  title: string;
  accessCode: string;
  description: string;
  coverImage: string;
  isDownloadable: boolean;
  expiryDate: string;
  totalImages: number;
  createdAt: string;
  images: ClientGalleryImage[];
}

export interface ClientGalleryImage {
  id: number;
  imageUrl: string;
  thumbnailUrl: string;
  originalFilename: string;
  fileSize: number;
  isSelected: boolean;
  downloadCount: number;
  displayOrder: number;
}

export interface ContactInquiry {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  serviceInterest?: number;
  preferredDate?: string;
  budgetRange?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}
