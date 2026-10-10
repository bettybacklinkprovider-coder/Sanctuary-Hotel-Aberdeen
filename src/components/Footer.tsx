import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, MapPin, Mail, Clock, Calendar } from 'lucide-react';
import { PageRoute } from '../types';

export const Footer: React.FC = () => {
  const { navigateTo, openBookingModal } = useNavigation();

  const navLinks: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Rooms & Accommodation', page: 'rooms' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact & Booking', page: 'contact' },
  ];

  return (
    <footer className="bg-[#08040e] border-t border-[#26143b] text-[#c7c0b3] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand & Introduction */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold tracking-wide text-[#f5f0e6]">
              Sanctuary Hotel
            </h3>
            <p className="text-xs text-[#a99fb1] leading-relaxed">
              An intimate luxury boutique hotel located on Caroline Place in Aberdeen. Dedicated to authentic Scottish hospitality, refined comfort, and peaceful stays in the Granite City.
            </p>
            <div className="pt-2">
              <button
                onClick={() => openBookingModal()}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0d0716] bg-[#d4af37] hover:bg-[#e5c158] transition-colors rounded cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Your Stay
              </button>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-[#f5f0e6] tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigateTo(link.page)}
                    className="hover:text-[#d4af37] transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business & Location Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-[#f5f0e6] tracking-wide">
              Location & Contact
            </h4>
            <div className="space-y-3 text-xs text-[#b8b0c4]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="hover:text-[#d4af37] transition-colors font-medium"
                >
                  {HOTEL_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a
                  href={`mailto:${HOTEL_INFO.email}`}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  {HOTEL_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Guest Stay Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-[#f5f0e6] tracking-wide">
              Guest Reception
            </h4>
            <div className="space-y-2 text-xs text-[#a99fb1]">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Check-in: {HOTEL_INFO.checkInTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Check-out: {HOTEL_INFO.checkOutTime}</span>
              </div>
              <p className="pt-2 text-[11px] text-[#8e859b] leading-relaxed">
                Quiet residential hours observed for restful guest sleep. Luggage drop-off available upon arrangement.
              </p>
            </div>
          </div>
        </div>

        {/* Quiet Sub-Footer */}
        <div className="pt-8 border-t border-[#1e0f30] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7e748c]">
          <p>© {new Date().getFullYear()} Sanctuary Hotel Aberdeen. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Caroline Pl, Aberdeen AB25 2TH</span>
            <span>·</span>
            <span>United Kingdom</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
