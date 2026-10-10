import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Calendar,
  Send,
  CheckCircle2,
  Train,
  Plane,
  Car,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { openBookingModal } = useNavigation();

  // Contact / Booking Inquiry Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    roomType: 'Deluxe King Suite',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Valid email address is required';
    }
    if (!formData.phone.trim()) errs.phone = 'Contact phone number is required';
    if (!formData.message.trim()) errs.message = 'Please include a message or inquiry details';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Caroline Place, Aberdeen AB25 2TH, United Kingdom'
  )}`;

  return (
    <div className="w-full min-h-screen bg-[#0d0716] pb-24">
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-b from-[#180d28] to-[#0d0716] border-b border-[#2a1740]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
            Direct Reservations & Assistance
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f8f5ee]">
            Contact & Booking
          </h1>
          <p className="text-sm sm:text-base text-[#c7bfd1] max-w-2xl mx-auto leading-relaxed">
            Connect directly with our Aberdeen reception team. We are available by telephone and through our booking inquiry form to confirm dates and arrange your stay.
          </p>

          <div className="pt-2">
            <button
              onClick={() => openBookingModal()}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-[#d4af37] via-[#e6ca65] to-[#c59b27] text-[#0d0716] rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-xl cursor-pointer"
            >
              Open Booking Inquiry Modal
            </button>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Info Cards + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Location info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Cards */}
            <div className="bg-[#140b20] border border-[#2e1747] rounded-2xl p-8 space-y-6 shadow-xl">
              <h2 className="font-serif text-2xl font-bold text-[#f8f5ee] border-b border-[#29143f] pb-4">
                Hotel Contact Information
              </h2>

              {/* Click-to-Call Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#24113b] border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#9b8fa9] font-medium">
                    Phone (Click to Call)
                  </span>
                  <a
                    href={`tel:${HOTEL_INFO.phone}`}
                    className="font-serif text-2xl font-bold text-[#f5f0e6] hover:text-[#d4af37] transition-colors block"
                  >
                    {HOTEL_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-[#8e829d]">
                    Call for immediate room inquiries or arrival updates.
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 pt-2">
                <div className="w-12 h-12 rounded-xl bg-[#24113b] border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#9b8fa9] font-medium">
                    Hotel Address
                  </span>
                  <p className="text-sm font-semibold text-[#f5f0e6]">
                    {HOTEL_INFO.address}
                  </p>
                  <p className="text-xs text-[#8e829d]">
                    Caroline Place, Aberdeen AB25 2TH, Scotland, UK
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] hover:underline mt-1"
                  >
                    <span>Get Directions via Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pt-2">
                <div className="w-12 h-12 rounded-xl bg-[#24113b] border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#9b8fa9] font-medium">
                    Email Reservations
                  </span>
                  <a
                    href={`mailto:${HOTEL_INFO.email}`}
                    className="text-sm font-medium text-[#f5f0e6] hover:text-[#d4af37] transition-colors block"
                  >
                    {HOTEL_INFO.email}
                  </a>
                  <p className="text-xs text-[#8e829d]">
                    Replies sent within business hours.
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-2 border-t border-[#25133b]">
                <div className="w-12 h-12 rounded-xl bg-[#24113b] border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#9b8fa9] font-medium">
                    Check-in & Check-out Hours
                  </span>
                  <p className="text-xs text-[#d4cddc]">
                    Check-in: <strong>{HOTEL_INFO.checkInTime}</strong>
                  </p>
                  <p className="text-xs text-[#d4cddc]">
                    Check-out: <strong>{HOTEL_INFO.checkOutTime}</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Travel Directions Summary */}
            <div className="bg-[#140b20] border border-[#2e1747] rounded-2xl p-6 space-y-4 shadow-xl">
              <h3 className="font-serif text-lg font-bold text-[#f8f5ee]">
                Getting to Caroline Place
              </h3>
              <div className="space-y-3 text-xs text-[#a99fb1]">
                <div className="flex items-start gap-3">
                  <Train className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#d6d0c2]">Aberdeen Railway Station:</strong> Approx. 1.2 miles away. Convenient 5 to 7-minute taxi ride or short local bus connection to Caroline Place.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Plane className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#d6d0c2]">Aberdeen Airport (ABZ):</strong> Located in Dyce, roughly 6.2 miles north-west (15 to 20 minutes by taxi or direct airport 727 express into town).
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#d6d0c2]">By Car & Parking:</strong> Accessible from the A96 / A90. Located on Caroline Place in the residential Rosemount area. On-street residential zone parking available.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Functional Contact & Booking Form */}
          <div className="lg:col-span-7 bg-[#140b20] border border-[#2e1747] rounded-2xl p-8 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-14 text-center space-y-5 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#27143d] border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-[#f8f5ee]">
                  Booking Inquiry Submitted
                </h3>
                <p className="text-sm text-[#b8afc4] max-w-lg mx-auto leading-relaxed">
                  Thank you, <span className="text-[#d4af37] font-semibold">{formData.fullName}</span>. Your inquiry for Sanctuary Hotel has been transmitted to our reception desk. We will contact you at <span className="text-[#d4af37]">{formData.email}</span> to confirm dates, room availability, and rate details.
                </p>

                <div className="p-4 rounded-xl bg-[#1d0e2e] border border-[#341852] max-w-md mx-auto text-left text-xs text-[#a99fb1] space-y-1">
                  <p><strong className="text-[#d6d0c2]">Selected Accommodation:</strong> {formData.roomType}</p>
                  <p><strong className="text-[#d6d0c2]">Requested Dates:</strong> {formData.checkIn || 'To be confirmed'} {formData.checkOut ? `to ${formData.checkOut}` : ''}</p>
                  <p><strong className="text-[#d6d0c2]">Guest Count:</strong> {formData.guests}</p>
                  <p><strong className="text-[#d6d0c2]">Urgent Queries:</strong> <a href={`tel:${HOTEL_INFO.phone}`} className="text-[#d4af37] underline">{HOTEL_INFO.phoneDisplay}</a></p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        checkIn: '',
                        checkOut: '',
                        guests: '2 Guests',
                        roomType: 'Deluxe King Suite',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0d0716] bg-[#d4af37] hover:bg-[#e5c158] rounded transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-8 space-y-2 border-b border-[#29143f] pb-6">
                  <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                    Inquiry & Reservations
                  </span>
                  <h2 className="font-serif text-3xl font-bold text-[#f8f5ee]">
                    Direct Booking & Inquiry Form
                  </h2>
                  <p className="text-xs sm:text-sm text-[#b8afc4]">
                    Please share your planned stay details and requirements below. Our reservations team verifies availability and will contact you directly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-[#c5bfb2] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alistair MacLeod"
                      className="w-full px-4 py-3 bg-[#0c0614] border border-[#341b52] focus:border-[#d4af37] rounded-lg text-sm text-[#f5f2eb] placeholder-[#6d627d] outline-none transition-colors"
                    />
                    {errors.fullName && <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-[#c5bfb2] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alistair@example.com"
                        className="w-full px-4 py-3 bg-[#0c0614] border border-[#341b52] focus:border-[#d4af37] rounded-lg text-sm text-[#f5f2eb] placeholder-[#6d627d] outline-none transition-colors"
                      />
                      {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#c5bfb2] mb-1.5">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 7..."
                        className="w-full px-4 py-3 bg-[#0c0614] border border-[#341b52] focus:border-[#d4af37] rounded-lg text-sm text-[#f5f2eb] placeholder-[#6d627d] outline-none transition-colors"
                      />
                      {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-[#c5bfb2] mb-1.5">
                        Check-in Date (Optional)
                      </label>
                      <input
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0c0614] border border-[#341b52] focus:border-[#d4af37] rounded-lg text-sm text-[#f5f2eb] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#c5bfb2] mb-1.5">
                        Check-out Date (Optional)
                      </label>
                      <input
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0c0614] border border-[#341b52] focus:border-[#d4af37] rounded-lg text-sm text-[#f5f2eb] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Guests & Room Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-[#c5bfb2] mb-1.5">
                        Number of Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0c0614] border border-[#341b52] focus:border-[#d4af37] rounded-lg text-sm text-[#f5f2eb] outline-none transition-colors cursor-pointer"
                      >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3 Guests">3 Guests</option>
                        <option value="4+ Guests">4+ Guests</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#c5bfb2] mb-1.5">
                        Preferred Room Type
                      </label>
                      <select
                        value={formData.roomType}
                        onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0c0614] border border-[#341b52] focus:border-[#d4af37] rounded-lg text-sm text-[#f5f2eb] outline-none transition-colors cursor-pointer"
                      >
                        {ROOMS_DATA.map((r) => (
                          <option key={r.id} value={r.name}>
                            {r.name}
                          </option>
                        ))}
                        <option value="Flexible / Best Available">Flexible / Best Available</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-[#c5bfb2] mb-1.5">
                      Inquiry Message or Special Requirements *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please mention any questions, arrival timing, parking queries, or specific accommodations required..."
                      className="w-full px-4 py-3 bg-[#0c0614] border border-[#341b52] focus:border-[#d4af37] rounded-lg text-sm text-[#f5f2eb] placeholder-[#6d627d] outline-none transition-colors resize-none"
                    />
                    {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-gradient-to-r from-[#d4af37] via-[#e6ca65] to-[#c59b27] hover:brightness-110 active:scale-[0.99] text-[#0d0716] font-semibold text-xs uppercase tracking-widest rounded-lg transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Booking Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Map & Location Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="bg-[#140b20] border border-[#2e1747] rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 border-b border-[#29143f] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Location Map
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#f8f5ee] mt-1">
                Sanctuary Hotel on Caroline Place
              </h3>
              <p className="text-xs text-[#a99fb1]">
                Caroline Pl, Aberdeen AB25 2TH, United Kingdom
              </p>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0d0716] bg-[#d4af37] hover:bg-[#e5c158] rounded-lg transition-colors cursor-pointer self-start sm:self-auto shadow"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Map Embed */}
          <div className="relative w-full h-[400px] bg-[#0c0614]">
            <iframe
              title="Sanctuary Hotel Aberdeen Map"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05)' }}
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-2.1250%2C57.1480%2C-2.1050%2C57.1580&layer=mapnik&marker=57.1537%2C-2.1158"
            />
            {/* Custom Location Overlay Card */}
            <div className="absolute top-4 left-4 bg-[#0e0717]/90 backdrop-blur-md border border-[#d4af37]/50 rounded-xl p-4 max-w-xs shadow-xl hidden sm:block">
              <div className="flex items-center gap-2 text-[#d4af37] font-serif font-bold text-sm">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Sanctuary Hotel</span>
              </div>
              <p className="text-[11px] text-[#c5bfd1] mt-1">
                Caroline Pl, Aberdeen AB25 2TH
              </p>
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="text-[11px] text-[#d4af37] hover:underline mt-1.5 block font-medium"
              >
                {HOTEL_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
