import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { HOTEL_INFO, HOTEL_IMAGES, ROOMS_DATA, AMENITIES_DATA, GALLERY_DATA } from '../data/hotelData';
import {
  Calendar,
  Phone,
  MapPin,
  ArrowRight,
  Wifi,
  Sparkles,
  Coffee,
  ShieldCheck,
  Maximize2,
  Send,
  CheckCircle2,
  Tv,
  Thermometer,
  Luggage,
  Clock
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigateTo, openBookingModal, openLightbox } = useNavigation();

  // Contact section quick form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactError, setContactError] = useState('');

  // Gallery filter state
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'rooms' | 'lounge' | 'aberdeen'>('all');

  const filteredGallery = galleryFilter === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === galleryFilter);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      setContactError('Please complete all required fields.');
      return;
    }
    setContactError('');
    setContactSubmitted(true);
  };

  const getAmenityIcon = (id: string) => {
    switch (id) {
      case 'wifi':
        return <Wifi className="w-5 h-5 text-[#d4af37]" />;
      case 'tea-coffee':
        return <Coffee className="w-5 h-5 text-[#d4af37]" />;
      case 'heating':
        return <Thermometer className="w-5 h-5 text-[#d4af37]" />;
      case 'entertainment':
        return <Tv className="w-5 h-5 text-[#d4af37]" />;
      case 'luggage':
        return <Luggage className="w-5 h-5 text-[#d4af37]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#d4af37]" />;
    }
  };

  return (
    <div className="w-full">
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-[#28153d]"
      >
        {/* Luxury Background Image with measured scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_IMAGES.hero}
            alt="Sanctuary Hotel Aberdeen Exterior"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Deep purple & vignette gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0716] via-[#140a24]/85 to-[#0a0412]/75" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(13,7,22,0.85)_100%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
          <div className="inline-block tracking-[0.3em] uppercase text-xs sm:text-sm font-medium text-[#d4af37]">
            Sanctuary Hotel · Aberdeen
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#fbf9f5] max-w-4xl mx-auto leading-[1.1] text-balance">
            An Intimate Sanctuary in the Granite City
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[#d4cddc] max-w-2xl mx-auto font-light leading-relaxed">
            Welcome to Sanctuary Hotel, located on Caroline Place in Aberdeen. Indulge in warm Scottish hospitality, peaceful surroundings, and refined comfort designed for an unforgettable stay.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openBookingModal()}
              className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#0d0716] bg-gradient-to-r from-[#d4af37] via-[#e6ca65] to-[#c59b27] hover:brightness-110 active:scale-[0.98] transition-all rounded shadow-2xl cursor-pointer"
            >
              Book Your Stay
            </button>

            <button
              onClick={() => navigateTo('rooms')}
              className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-medium tracking-wider uppercase text-[#f5f2eb] border border-[#d4af37]/50 hover:bg-[#201033] hover:border-[#d4af37] transition-all rounded cursor-pointer"
            >
              View Accommodations
            </button>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#b8afc4]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              Caroline Pl, Aberdeen AB25 2TH
            </span>
            <span aria-hidden="true" className="text-[#59496e]">·</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-[#d4af37] transition-colors">
                {HOTEL_INFO.phoneDisplay}
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT OUR HOTEL
          ========================================================================= */}
      <section id="about-hotel" className="py-24 bg-[#11091d] border-b border-[#251339]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Story & Description */}
            <div className="space-y-6">
              <div className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                About Our Hotel
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f8f5ee] leading-tight">
                Authentic Scottish Hospitality & Serene Comfort
              </h2>

              <p className="text-sm sm:text-base text-[#c7bfd1] leading-relaxed">
                Tucked into the tranquil enclave of Caroline Place, Sanctuary Hotel provides a quiet residential haven in Aberdeen. We believe true hospitality is found in the warmth of a genuine welcome, thoughtful details, and spaces carefully arranged for deep rest.
              </p>

              <p className="text-sm sm:text-base text-[#c7bfd1] leading-relaxed">
                Whether visiting Aberdeen for business in the energy capital, cultural excursions to His Majesty’s Theatre and the Art Gallery, or a relaxing Highland getaway, our guests enjoy prompt personal attention and tranquil surroundings free from the commotion of heavy traffic.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-lg bg-[#180d28] border border-[#2f1848]">
                  <h4 className="font-serif text-base font-semibold text-[#f5f0e6] mb-1">
                    Peaceful Enclave
                  </h4>
                  <p className="text-[#a99fb1]">
                    Residential quietude nestled conveniently close to Rosemount and Aberdeen centre.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#180d28] border border-[#2f1848]">
                  <h4 className="font-serif text-base font-semibold text-[#f5f0e6] mb-1">
                    Welcoming Care
                  </h4>
                  <p className="text-[#a99fb1]">
                    Attentive hosts dedicated to guest satisfaction, pristine housekeeping, and local advice.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigateTo('about')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37] hover:text-[#e5c158] transition-colors cursor-pointer"
                >
                  <span>Read More About Our Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Lounge Frame */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl">
                <img
                  src={HOTEL_IMAGES.lounge}
                  alt="Sanctuary Hotel Guest Lounge"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0717]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-xs text-[#f5f0e6] font-light">
                  <p className="font-serif text-lg font-medium">Resident Guest Drawing Room</p>
                  <p className="text-[#d0c6dc] text-[11px]">Subdued elegance and quiet fireside relaxation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ROOMS & ACCOMMODATION
          ========================================================================= */}
      <section id="rooms-accommodation" className="py-24 bg-[#0d0716] border-b border-[#251339]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-2">
                Rooms & Accommodation
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f8f5ee]">
                Refined Accommodations
              </h2>
              <p className="text-sm text-[#b8afc4] mt-2 max-w-xl">
                Each room at Sanctuary Hotel is curated for quiet rest, featuring en-suite bathrooms, plush linens, and attentive hospitality.
              </p>
            </div>

            <button
              onClick={() => navigateTo('rooms')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#d4af37] border border-[#d4af37]/40 hover:bg-[#1f0f2f] transition-colors rounded cursor-pointer self-start md:self-auto whitespace-nowrap"
            >
              <span>Explore All Rooms</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS_DATA.map((room) => (
              <div
                key={room.id}
                className="group bg-[#140b20] border border-[#2b1642] hover:border-[#d4af37]/60 rounded-xl overflow-hidden transition-all duration-300 flex flex-col shadow-lg"
              >
                {/* Room Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1f0f2f]">
                  <img
                    src={room.image}
                    alt={room.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140b20] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 right-3 text-[11px] font-medium px-2.5 py-1 bg-[#0d0716]/80 backdrop-blur-sm border border-[#3b205a] text-[#f3e5ab] rounded">
                    {room.capacity}
                  </span>
                </div>

                {/* Room Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-[#f5f0e6] group-hover:text-[#d4af37] transition-colors">
                      {room.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#a99fb1]">
                      <span>{room.bedType}</span>
                      <span aria-hidden="true">·</span>
                      <span>{room.size}</span>
                      <span aria-hidden="true">·</span>
                      <span>En-suite</span>
                    </div>
                    <p className="text-xs text-[#c5bfd1] line-clamp-3 leading-relaxed pt-1">
                      {room.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#251339] flex items-center justify-between gap-3">
                    <button
                      onClick={() => navigateTo('rooms')}
                      className="text-xs font-semibold text-[#d4af37] hover:text-[#f3e5ab] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Explore Rooms</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => openBookingModal(room.name)}
                      className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider bg-[#26143b] hover:bg-[#d4af37] text-[#f5f0e6] hover:text-[#0d0716] transition-colors rounded cursor-pointer"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: LUXURY & AMENITIES
          ========================================================================= */}
      <section id="luxury-amenities" className="py-24 bg-[#11091d] border-b border-[#251339]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Facilities & Services
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f8f5ee]">
              Comfort & Verified Amenities
            </h2>
            <p className="text-sm text-[#b8afc4] leading-relaxed">
              Every detail is chosen to ensure convenience, cleanliness, and effortless relaxation during your visit to Aberdeen.
            </p>
          </div>

          {/* Amenities Grid with Photography */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AMENITIES_DATA.map((amenity) => (
              <div
                key={amenity.id}
                onClick={() => amenity.image && openLightbox(amenity.image, amenity.title, amenity.description)}
                className="group rounded-xl overflow-hidden bg-[#160b24] border border-[#2d1746] hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col shadow-lg cursor-pointer hover:shadow-2xl hover:-translate-y-0.5"
              >
                {/* Amenity Image Frame */}
                {amenity.image && (
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#200f33]">
                    <img
                      src={amenity.image}
                      alt={amenity.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#160b24] via-transparent to-transparent opacity-80" />

                    {/* Floating Icon Badge */}
                    <div className="absolute top-3 left-3 p-2 rounded-lg bg-[#0d0716]/80 backdrop-blur-md border border-[#3e1e63] group-hover:border-[#d4af37]/70 transition-colors shadow-md">
                      {getAmenityIcon(amenity.id)}
                    </div>

                    {/* Quick Expand Icon on Hover */}
                    <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-[#0d0716]/75 backdrop-blur-md border border-[#3e1e63] text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}

                {/* Amenity Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#f5f0e6] group-hover:text-[#d4af37] transition-colors leading-snug">
                        {amenity.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#b8b0c4] leading-relaxed">
                      {amenity.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#251339] flex items-center justify-between text-[11px] text-[#9a8ea8]">
                    <span className="capitalize tracking-wider text-[#d4af37]/90 font-medium text-[10px] uppercase">
                      {amenity.category}
                    </span>
                    <span className="group-hover:text-[#d4af37] transition-colors text-[11px] flex items-center gap-1 font-medium">
                      View details
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Verified Guarantee Strip */}
          <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-[#190d2c] via-[#21113b] to-[#190d2c] border border-[#d4af37]/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#2d164d] border border-[#d4af37] flex items-center justify-center text-[#d4af37] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#f5f0e6]">
                  Our Commitment to Guest Comfort
                </h4>
                <p className="text-xs text-[#b8afc4]">
                  Personal attention, immaculate cleanliness, and verified facilities at Caroline Place.
                </p>
              </div>
            </div>

            <button
              onClick={() => openBookingModal()}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-widest bg-[#d4af37] text-[#0d0716] rounded hover:bg-[#e5c158] transition-colors whitespace-nowrap cursor-pointer"
            >
              Book Your Stay
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: GALLERY
          ========================================================================= */}
      <section id="gallery" className="py-24 bg-[#0d0716] border-b border-[#251339]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-2">
                Visual Showcase
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f8f5ee]">
                Hotel Gallery
              </h2>
              <p className="text-sm text-[#b8afc4] mt-2">
                A glimpse into our serene guest rooms, lounge areas, and historic Aberdeen surroundings.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#180d28] border border-[#2d1746] rounded-lg self-start md:self-auto">
              {[
                { label: 'All Photos', key: 'all' },
                { label: 'Suites & Rooms', key: 'rooms' },
                { label: 'Lounge & Interiors', key: 'lounge' },
                { label: 'Aberdeen', key: 'aberdeen' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setGalleryFilter(tab.key as any)}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                    galleryFilter === tab.key
                      ? 'bg-[#d4af37] text-[#0d0716] font-semibold shadow'
                      : 'text-[#c5bfd1] hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item.image, item.title, item.caption)}
                className="group relative rounded-xl overflow-hidden border border-[#2b1642] hover:border-[#d4af37]/60 aspect-[4/3] bg-[#140b20] cursor-pointer shadow-md transition-all"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0716]/90 via-[#0d0716]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#f5f0e6]">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#c5bfd1] mt-0.5 line-clamp-1">
                        {item.caption}
                      </p>
                    </div>
                    <div className="p-2 bg-[#d4af37] text-[#0d0716] rounded-full shrink-0 ml-2">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CONTACT & BOOKING
          ========================================================================= */}
      <section id="contact-booking" className="py-24 bg-[#11091d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Contact & Booking
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f8f5ee]">
              Begin Your Sanctuary Stay
            </h2>
            <p className="text-sm text-[#b8afc4]">
              Reach our reception directly by phone, or send an inquiry below. We look forward to welcoming you to Aberdeen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details Card */}
            <div className="lg:col-span-5 bg-[#170c26] border border-[#2f174a] rounded-xl p-8 space-y-8 shadow-xl">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#f5f0e6] mb-2">
                  Direct Inquiries & Location
                </h3>
                <p className="text-xs text-[#a99fb1] leading-relaxed">
                  Located in the welcoming Rosemount district of Aberdeen, offering quiet residential nights within minutes of city highlights.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#27133e] border border-[#3e1e62] text-[#d4af37] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#9a8ea8] block">
                      Telephone (Click to Call)
                    </span>
                    <a
                      href={`tel:${HOTEL_INFO.phone}`}
                      className="font-serif text-xl font-bold text-[#f5f0e6] hover:text-[#d4af37] transition-colors block mt-0.5"
                    >
                      {HOTEL_INFO.phoneDisplay}
                    </a>
                    <span className="text-xs text-[#8e829d]">Available for bookings & guest inquiries</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#27133e] border border-[#3e1e62] text-[#d4af37] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#9a8ea8] block">
                      Address
                    </span>
                    <p className="font-medium text-sm text-[#f5f0e6] mt-0.5">
                      {HOTEL_INFO.address}
                    </p>
                    <span className="text-xs text-[#8e829d]">Caroline Place, Aberdeen AB25 2TH, Scotland</span>
                  </div>
                </div>

                {/* Reception Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#27133e] border border-[#3e1e62] text-[#d4af37] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#9a8ea8] block">
                      Reception & Hours
                    </span>
                    <p className="text-xs text-[#e0d8ea] mt-0.5">
                      Check-in from 15:00 · Check-out until 11:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Prominent Golden Booking Inquiry Button */}
              <div className="pt-4 border-t border-[#2a1643]">
                <button
                  onClick={() => openBookingModal()}
                  className="w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-[#d4af37] via-[#e6ca65] to-[#c59b27] text-[#0d0716] rounded hover:brightness-110 active:scale-[0.99] transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Open Full Booking Inquiry</span>
                </button>
              </div>
            </div>

            {/* Quick Contact & Inquiry Form */}
            <div className="lg:col-span-7 bg-[#170c26] border border-[#2f174a] rounded-xl p-8 shadow-xl">
              {contactSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#27143d] border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#f5f0e6]">
                    Thank You for Contacting Us
                  </h3>
                  <p className="text-xs text-[#b8afc4] max-w-md mx-auto leading-relaxed">
                    Your message has been sent to our reservations team. We will review your inquiry and reply to <span className="text-[#d4af37]">{contactEmail}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setContactSubmitted(false);
                      setContactName('');
                      setContactEmail('');
                      setContactMessage('');
                    }}
                    className="mt-4 px-5 py-2 text-xs font-medium text-[#d4af37] border border-[#d4af37]/40 rounded hover:bg-[#201033] transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl font-bold text-[#f5f0e6]">
                      Send a Message or Question
                    </h3>
                    <p className="text-xs text-[#a99fb1]">
                      Have a query regarding your upcoming visit or bespoke room arrangements?
                    </p>
                  </div>

                  {contactError && (
                    <div className="p-3 rounded bg-rose-950/40 border border-rose-800 text-xs text-rose-300">
                      {contactError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#c5bfb2] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="John Smith"
                        className="w-full px-4 py-2.5 bg-[#0e0717] border border-[#341b52] focus:border-[#d4af37] rounded text-sm text-[#f5f2eb] placeholder-[#6d627d] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#c5bfb2] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 bg-[#0e0717] border border-[#341b52] focus:border-[#d4af37] rounded text-sm text-[#f5f2eb] placeholder-[#6d627d] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#c5bfb2] mb-1">
                      Your Message or Booking Query *
                    </label>
                    <textarea
                      rows={4}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Please let us know your planned stay dates, questions about Caroline Place, or room preferences..."
                      className="w-full px-4 py-2.5 bg-[#0e0717] border border-[#341b52] focus:border-[#d4af37] rounded text-sm text-[#f5f2eb] placeholder-[#6d627d] outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-7 py-3 text-xs font-semibold uppercase tracking-widest bg-[#d4af37] hover:bg-[#e5c158] text-[#0d0716] rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => navigateTo('contact')}
                      className="text-xs text-[#c5bfb2] hover:text-[#d4af37] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Go to Full Contact & Map Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
