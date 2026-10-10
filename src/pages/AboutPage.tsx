import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { HOTEL_INFO, HOTEL_IMAGES, LOCAL_ATTRACTIONS } from '../data/hotelData';
import {
  MapPin,
  HeartHandshake,
  Compass,
  CheckCircle2,
  Calendar,
  Building,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigateTo, openBookingModal } = useNavigation();

  return (
    <div className="w-full min-h-screen bg-[#0d0716] pb-24">
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-b from-[#180d28] to-[#0d0716] border-b border-[#2a1740]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
            Our Story & Heritage
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f8f5ee]">
            About Sanctuary Hotel
          </h1>
          <p className="text-sm sm:text-base text-[#c7bfd1] max-w-2xl mx-auto leading-relaxed">
            Nestled on Caroline Place in Aberdeen, Sanctuary Hotel provides a peaceful sanctuary of Scottish hospitality, blending historic residential charm with modern comfort.
          </p>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Story Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              The Sanctuary Experience
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#f8f5ee] leading-tight">
              A Peaceful Retreat in Aberdeen’s Rosemount Enclave
            </h2>
            <p className="text-sm sm:text-base text-[#c7bfd1] leading-relaxed">
              Aberdeen is famously known as the Granite City—a place of dramatic coastal skies, storied merchant history, and distinct silver-grey stone architecture. In Caroline Place, Sanctuary Hotel was established to offer travelers a peaceful respite away from the hustle of arterial transit corridors, while keeping city attractions effortlessly within reach.
            </p>
            <p className="text-sm sm:text-base text-[#c7bfd1] leading-relaxed">
              We focus on the essential pillars of memorable hospitality: a warm, respectful greeting upon arrival; immaculately prepared en-suite rooms; restful, comfortable bedding; and attentive care whenever assistance is required.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#160c24] border border-[#2e1747]">
                <Building className="w-5 h-5 text-[#d4af37] mb-2" />
                <h4 className="font-serif text-base font-bold text-[#f5f0e6]">Historic Residential Setting</h4>
                <p className="text-xs text-[#a99fb1] mt-1">
                  Located in an established residential quarter of Aberdeen, ideal for restful sleep.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#160c24] border border-[#2e1747]">
                <HeartHandshake className="w-5 h-5 text-[#d4af37] mb-2" />
                <h4 className="font-serif text-base font-bold text-[#f5f0e6]">Authentic Scottish Care</h4>
                <p className="text-xs text-[#a99fb1] mt-1">
                  Individual attention from dedicated hosts who take pride in Aberdeen hospitality.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl">
              <img
                src={HOTEL_IMAGES.aberdeenHeritage}
                alt="Aberdeen Granite City Architecture"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="p-4 rounded-xl bg-[#160b24] border border-[#2d1645] text-xs text-[#b8b0c4]">
              <span className="text-[#d4af37] font-semibold">Caroline Place Neighborhood:</span> A tranquil, historic Aberdeen address surrounded by iconic granite masonry and neighborhood conveniences.
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Guest Comfort */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="bg-[#130a1e] border border-[#2d1647] rounded-2xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              Our Core Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#f8f5ee]">
              Our Commitment to Guest Comfort
            </h2>
            <p className="text-xs sm:text-sm text-[#b8afc4]">
              We adhere strictly to verified standards to make every night at Sanctuary Hotel relaxing, secure, and effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-lg bg-[#221038] border border-[#371a5a] flex items-center justify-center text-[#d4af37]">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#f5f0e6]">Immaculate Cleanliness</h3>
              <p className="text-xs text-[#a99fb1] leading-relaxed">
                Daily housekeeping with sanitized linens, fresh bath towels, and pristine en-suite bathrooms.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-9 h-9 rounded-lg bg-[#221038] border border-[#371a5a] flex items-center justify-center text-[#d4af37]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#f5f0e6]">Restful Atmosphere</h3>
              <p className="text-xs text-[#a99fb1] leading-relaxed">
                Quiet residential surroundings with evening quiet hours so guests awaken refreshed and restored.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-9 h-9 rounded-lg bg-[#221038] border border-[#371a5a] flex items-center justify-center text-[#d4af37]">
                <MapPin className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#f5f0e6]">Local Expertise</h3>
              <p className="text-xs text-[#a99fb1] leading-relaxed">
                Authentic advice on local transport, Scottish restaurants, coastal walks, and Aberdeen landmarks.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-9 h-9 rounded-lg bg-[#221038] border border-[#371a5a] flex items-center justify-center text-[#d4af37]">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#f5f0e6]">Personal Guest Service</h3>
              <p className="text-xs text-[#a99fb1] leading-relaxed">
                Direct phone and message contact to promptly address any questions or special requests during your visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Aberdeen Exploration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
            <Compass className="w-4 h-4" />
            <span>Discover Aberdeen</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#f8f5ee]">
            Attractions Near Caroline Place
          </h2>
          <p className="text-xs sm:text-sm text-[#b8afc4]">
            Sanctuary Hotel is conveniently situated for enjoying Aberdeen’s premier destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOCAL_ATTRACTIONS.map((attraction, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#140b20] border border-[#2b1642] hover:border-[#d4af37]/50 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#d4af37]">{attraction.distance}</span>
                <span className="text-[11px] text-[#8e829d]">from hotel</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#f5f0e6]">
                {attraction.name}
              </h3>
              <p className="text-xs text-[#a99fb1] leading-relaxed">
                {attraction.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#1d0e32] via-[#261242] to-[#1d0e32] border border-[#d4af37]/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-xl">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold text-[#f8f5ee]">
              Plan Your Visit to Sanctuary Hotel
            </h3>
            <p className="text-xs text-[#c7bfd1]">
              Caroline Pl, Aberdeen AB25 2TH, United Kingdom · Phone: {HOTEL_INFO.phoneDisplay}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openBookingModal()}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-widest bg-[#d4af37] text-[#0d0716] rounded hover:bg-[#e5c158] transition-colors cursor-pointer whitespace-nowrap shadow"
            >
              <Calendar className="w-3.5 h-3.5 inline mr-2" />
              Book Your Stay
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="px-5 py-3 text-xs font-medium uppercase tracking-wider text-[#d4af37] border border-[#d4af37]/40 hover:bg-[#201033] rounded transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5 inline ml-1.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
