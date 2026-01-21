
export type ContentStatus = 'pending' | 'approved' | 'rejected';
export type PayoutStatus = 'pending' | 'completed' | 'cancelled';
export type Language = 'en' | 'sw';

export interface Episode {
  id: string;
  storyId: string;
  title: string;
  content: string; 
  audioContent?: string; 
  order: number;
}

export interface Story {
  id: string;
  title: string;
  authorId: string;
  authorName: string;
  description: string;
  coverImage: string;
  isPaid: boolean;
  status: ContentStatus;
  type: 'text' | 'audio';
  episodes: Episode[];
  createdAt: number;
}

export interface PayoutRequest {
  id: string;
  writerId: string;
  writerName: string;
  amount: number;
  paymentMethod: string; // e.g., 'M-Pesa', 'Tigo Pesa'
  phoneNumber: string;
  status: PayoutStatus;
  timestamp: number;
}

export interface User {
  id: string;
  name: string;
  role: 'reader' | 'writer' | 'admin';
  balance: number; 
}

export interface Transaction {
  id: string;
  userId: string;
  storyId: string;
  episodeId: string;
  amount: number;
  fee: number;
  net: number;
  timestamp: number;
}
