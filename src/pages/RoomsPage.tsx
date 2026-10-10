import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';
import {
  Calendar,
  Phone,
  Check,
  Maximize2,
  Users,
  Bed,
  Square,
  Sparkles,
  Shield,
  HelpCircle
} from 'lucide-react';

export const RoomsPage: React.FC = () => {
  const { openBookingModal, openLightbox } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredRooms = selectedCategory === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.id === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-[#0d0716] pb-24">
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-b from-[#180d28] to-[#0d0716] border-b border-[#2a1740]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
            Accommodations · Sanctuary Hotel
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f8f5ee]">
            Rooms & Accommodation
          </h1>
          <p className="text-sm sm:text-base text-[#c7bfd1] max-w-2xl mx-auto leading-relaxed">
            Discover our collection of refined guest rooms in Caroline Place, Aberdeen. Meticulously appointed with plush bedding, private en-suite facilities, and authentic Scottish tranquility.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#d4af37] text-[#0d0716] font-semibold'
                  : 'bg-[#1a0e2a] text-[#c5bfd1] border border-[#341b52] hover:text-white'
              }`}
            >
              All Accommodations ({ROOMS_DATA.length})
            </button>
            {ROOMS_DATA.map((room) => (
              <button
                key={room.id}
                onClick={() => setSelectedCategory(room.id)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === room.id
                    ? 'bg-[#d4af37] text-[#0d0716] font-semibold'
                    : 'bg-[#1a0e2a] text-[#c5bfd1] border border-[#341b52] hover:text-white'
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Showcase List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        {filteredRooms.map((room, index) => (
          <article
            key={room.id}
            className="bg-[#130a1e] border border-[#2c1644] rounded-2xl overflow-hidden shadow-2xl transition-all hover:border-[#d4af37]/50"
          >
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Column */}
              <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-[#1f0f30]">
                <img
                  src={room.image}
                  alt={room.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
                <button
                  onClick={() => openLightbox(room.image, room.name, room.fullDesc)}
                  className="absolute bottom-4 right-4 p-2.5 bg-[#0d0716]/80 hover:bg-[#d4af37] text-[#f5f0e6] hover:text-[#0d0716] backdrop-blur-md rounded-lg transition-colors cursor-pointer border border-[#371958]"
                  title="Expand photograph"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Details Column */}
              <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#d4af37] font-semibold tracking-wider uppercase mb-2">
                    <span>Sanctuary Collection</span>
                    <span>·</span>
                    <span>Aberdeen AB25</span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#f8f5ee] mb-4">
                    {room.name}
                  </h2>

                  <p className="text-sm text-[#c7bfd1] leading-relaxed mb-6">
                    {room.fullDesc}
                  </p>

                  {/* Room Key Specs */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#1a0e2b] border border-[#2e1747] mb-6 text-xs">
                    <div className="flex items-center gap-2 text-[#d4cddc]">
                      <Users className="w-4 h-4 text-[#d4af37] shrink-0" />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#d4cddc]">
                      <Bed className="w-4 h-4 text-[#d4af37] shrink-0" />
                      <span>{room.bedType}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#d4cddc]">
                      <Square className="w-4 h-4 text-[#d4af37] shrink-0" />
                      <span>{room.size}</span>
                    </div>
                  </div>

                  {/* Room Features List */}
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-3">
                      Room Amenities & Specifications
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {room.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[#b8b0c4]">
                          <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Booking Inquiry Actions */}
                <div className="pt-6 border-t border-[#251339] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#9c91ab]">
                    <span>Seasonal availability & rates verified on inquiry</span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <a
                      href={`tel:${HOTEL_INFO.phone}`}
                      className="px-4 py-3 text-xs font-medium border border-[#3b1d5c] hover:border-[#d4af37] text-[#d6d0c2] hover:text-[#d4af37] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      title="Call reception"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Hotel</span>
                    </a>

                    <button
                      onClick={() => openBookingModal(room.name)}
                      className="flex-1 sm:flex-none px-6 py-3 text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-[#d4af37] via-[#e6ca65] to-[#c59b27] text-[#0d0716] rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Inquire for {room.name}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}

        {/* Guest Accommodation Policies & Assurance */}
        <section className="bg-[#140b20] border border-[#2b1642] rounded-2xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              Guest Stay Guidelines
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f5f0e6]">
              Standard Inclusions & Arrival Policies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#a99fb1]">
            <div className="p-4 rounded-xl bg-[#1b0e2d] border border-[#32174f] space-y-2">
              <div className="flex items-center gap-2 text-[#d4af37] font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Check-in & Check-out</span>
              </div>
              <p>
                Guest check-in is welcomed from 15:00 onwards. Check-out is scheduled until 11:00 to permit thorough housekeeping. Early arrivals may request luggage storage.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#1b0e2d] border border-[#32174f] space-y-2">
              <div className="flex items-center gap-2 text-[#d4af37] font-semibold">
                <Shield className="w-4 h-4" />
                <span>Peaceful Residential Ambiance</span>
              </div>
              <p>
                Sanctuary Hotel observes quiet hours in the evening to safeguard restful sleep for all guests residing on Caroline Place. All rooms are strictly non-smoking.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#1b0e2d] border border-[#32174f] space-y-2">
              <div className="flex items-center gap-2 text-[#d4af37] font-semibold">
                <HelpCircle className="w-4 h-4" />
                <span>Personalized Arrangements</span>
              </div>
              <p>
                Special arrangements such as ground-floor preferences or corporate stay inquiries can be noted directly on our booking inquiry form or arranged by telephone.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
