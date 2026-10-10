export type PageRoute = 'home' | 'rooms' | 'about' | 'contact';

export interface RoomItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  capacity: string;
  bedType: string;
  size: string;
  features: string[];
  view: string;
}

export interface AmenityItem {
  id: string;
  title: string;
  description: string;
  category: 'comfort' | 'convenience' | 'services';
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'rooms' | 'lounge' | 'aberdeen';
  image: string;
  caption: string;
}

export interface BookingInquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  specialRequests: string;
}
