import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, Menu, X, Calendar } from 'lucide-react';
import { PageRoute } from '../types';

export const Navbar: React.FC = () => {
  const { currentPage, navigateTo, openBookingModal } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Rooms', page: 'rooms' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact & Booking', page: 'contact' },
  ];

  const handleLinkClick = (page: PageRoute) => {
    navigateTo(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#0d0716]/95 backdrop-blur-md border-b border-[#2a1740] shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single element) */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            className="group flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-[#f5f0e6] group-hover:text-[#d4af37] transition-colors">
              Sanctuary Hotel
            </span>
          </a>

          {/* Zone 2: 4 Clean Single-Line Text Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <a
                  key={link.page}
                  href={`/${link.page === 'home' ? '' : link.page}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.page);
                  }}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#d4af37] font-semibold'
                      : 'text-[#d6d0c2] hover:text-[#f3e5ab]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d4af37] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="flex items-center gap-2 text-xs text-[#c5bfb2] hover:text-[#d4af37] transition-colors whitespace-nowrap"
              title="Call Sanctuary Hotel directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="font-medium tracking-wide">{HOTEL_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => openBookingModal()}
              className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0d0716] bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#c59b27] hover:brightness-110 active:scale-[0.98] transition-all rounded shadow-md whitespace-nowrap cursor-pointer"
            >
              Book Your Stay
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="p-2 text-[#d4af37] hover:bg-[#1f0f2f] rounded transition-colors"
              aria-label="Call Hotel"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#f5f0e6] hover:text-[#d4af37] hover:bg-[#1f0f2f] rounded transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-[#12091f] border-b border-[#2d1845] z-30 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.page}
                    onClick={() => handleLinkClick(link.page)}
                    className={`text-left text-base py-2 transition-colors flex items-center justify-between ${
                      isActive
                        ? 'text-[#d4af37] font-semibold'
                        : 'text-[#d6d0c2] hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />}
                  </button>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-[#2a1740] space-y-3">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="flex items-center gap-3 text-sm text-[#c5bfb2] hover:text-[#d4af37] transition-colors py-1"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call Us: {HOTEL_INFO.phoneDisplay}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold tracking-wider uppercase text-[#0d0716] bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#c59b27] rounded shadow cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Book Your Stay
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
