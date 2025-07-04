export interface User {
  id: string;
  name: string;
  email: string;
  location: {
    pincode: string;
    area: string;
    city: string;
  };
  grade?: number;
  school?: string;
  avatar?: string;
  rating: number;
  booksExchanged: number;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  isbn?: string;
  grade?: number;
  subject?: string;
  category: 'academic' | 'fiction' | 'non-fiction' | 'children' | 'other';
  condition: 'excellent' | 'good' | 'fair' | 'poor';
  description: string;
  images: string[];
  owner: User;
  available: boolean;
  exchangeType: 'exchange' | 'lend' | 'both';
  pickupLocation: string;
  postedAt: Date;
  qrCode?: string;
}

export interface ExchangeRequest {
  id: string;
  book: Book;
  requester: User;
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  message: string;
  createdAt: Date;
  proposedBooks?: Book[];
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  requestId?: string;
}