import React, { createContext, useContext, useState, useEffect } from 'react';
import { PageRoute } from '../types';

interface NavigationContextType {
  currentPage: PageRoute;
  navigateTo: (page: PageRoute, preserveHash?: boolean) => void;
  isBookingModalOpen: boolean;
  selectedRoomForBooking: string;
  openBookingModal: (roomName?: string) => void;
  closeBookingModal: () => void;
  lightboxImage: { src: string; title: string; caption: string } | null;
  openLightbox: (src: string, title: string, caption: string) => void;
  closeLightbox: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

function getRouteFromPathname(pathname: string): PageRoute {
  const cleanPath = pathname.toLowerCase().replace(/\/$/, '') || '/';
  if (cleanPath === '/rooms' || cleanPath.startsWith('/rooms')) return 'rooms';
  if (cleanPath === '/about' || cleanPath.startsWith('/about')) return 'about';
  if (cleanPath === '/contact' || cleanPath.startsWith('/contact')) return 'contact';
  return 'home';
}

function getPathForRoute(route: PageRoute): string {
  switch (route) {
    case 'rooms':
      return '/rooms';
    case 'about':
      return '/about';
    case 'contact':
      return '/contact';
    case 'home':
    default:
      return '/';
  }
}

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    return getRouteFromPathname(window.location.pathname);
  });
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState('');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; caption: string } | null>(null);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const route = getRouteFromPathname(window.location.pathname);
      setCurrentPage(route);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title and scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    switch (currentPage) {
      case 'rooms':
        document.title = 'Rooms & Accommodation | Sanctuary Hotel Aberdeen';
        break;
      case 'about':
        document.title = 'About Us | Sanctuary Hotel Aberdeen';
        break;
      case 'contact':
        document.title = 'Contact & Booking | Sanctuary Hotel Aberdeen';
        break;
      case 'home':
      default:
        document.title = 'Sanctuary Hotel Aberdeen | Luxury Scottish Hospitality';
        break;
    }
  }, [currentPage]);

  const navigateTo = (page: PageRoute) => {
    setCurrentPage(page);
    const newPath = getPathForRoute(page);
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, '', newPath);
    }
  };

  const openBookingModal = (roomName?: string) => {
    setSelectedRoomForBooking(roomName || '');
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedRoomForBooking('');
  };

  const openLightbox = (src: string, title: string, caption: string) => {
    setLightboxImage({ src, title, caption });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        navigateTo,
        isBookingModalOpen,
        selectedRoomForBooking,
        openBookingModal,
        closeBookingModal,
        lightboxImage,
        openLightbox,
        closeLightbox,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};
