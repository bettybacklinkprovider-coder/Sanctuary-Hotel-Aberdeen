import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';
import { X, Calendar, User, Mail, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { BookingInquiryFormData } from '../types';

export const BookingModal: React.FC = () => {
  const { isBookingModalOpen, closeBookingModal, selectedRoomForBooking } = useNavigation();

  const [formData, setFormData] = useState<BookingInquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    roomType: 'Deluxe King Suite',
    specialRequests: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedRoomForBooking) {
      setFormData((prev) => ({
        ...prev,
        roomType: selectedRoomForBooking
      }));
    }
    if (isBookingModalOpen) {
      setSubmitted(false);
      setErrors({});
    }
  }, [selectedRoomForBooking, isBookingModalOpen]);

  if (!isBookingModalOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Please provide a contact phone number';
    if (!formData.checkIn) newErrors.checkIn = 'Please select check-in date';
    if (!formData.checkOut) newErrors.checkOut = 'Please select check-out date';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate instantaneous booking inquiry dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#140b20] border border-[#d4af37]/40 rounded-xl shadow-2xl p-6 sm:p-8 text-[#f5f2eb]">
        {/* Close Button */}
        <button
          onClick={closeBookingModal}
          className="absolute top-5 right-5 p-2 text-[#b0a7bb] hover:text-[#d4af37] hover:bg-[#201033] rounded-lg transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#27143d] border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-[#f5f0e6]">
                Booking Inquiry Received
              </h3>
              <p className="text-sm text-[#b8b0c4] max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-[#d4af37] font-medium">{formData.fullName}</span>. We have logged your request for the{' '}
                <span className="text-[#f5f0e6] font-medium">{formData.roomType}</span>. Our reception team will reach out directly at{' '}
                <span className="text-[#d4af37]">{formData.email}</span> to confirm availability and finalize your reservation.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#1c0f2e] border border-[#31184d] text-xs text-[#a99fb1] space-y-1 text-left">
              <p><strong className="text-[#d6d0c2]">Dates:</strong> {formData.checkIn} to {formData.checkOut}</p>
              <p><strong className="text-[#d6d0c2]">Guests:</strong> {formData.guests}</p>
              <p><strong className="text-[#d6d0c2]">Immediate Assistance:</strong> Call us directly at <a href={`tel:${HOTEL_INFO.phone}`} className="text-[#d4af37] underline">{HOTEL_INFO.phoneDisplay}</a></p>
            </div>

            <div className="pt-3">
              <button
                onClick={closeBookingModal}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#d4af37] text-[#0d0716] rounded hover:bg-[#e5c158] transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-medium">
                Sanctuary Hotel Aberdeen
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f5f0e6]">
                Request Your Stay
              </h3>
              <p className="text-xs text-[#a99fb1]">
                Complete your dates and accommodation details. Our team responds promptly with verified availability.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-medium text-[#c5bfb2] mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-[#8a7e9b]" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full pl-9 pr-4 py-2.5 bg-[#0e0717] border border-[#341b52] focus:border-[#d4af37] rounded text-sm text-[#f5f2eb] placeholder-[#6d627d] outline-none transition-colors"
                  />
                </div>
                {errors.fullName && <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#c5bfb2] mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-[#8a7e9b]" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full pl-9 pr-4 py-2.5 bg-[#0e0717] border border-[#341b52] focus:border-[#d4af37] rounded text-sm text-[#f5f2eb] placeholder-[#6d627d] outline-none transition-colors"
                    />
                  </div>
                  {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#c5bfb2] mb-1">
                    Contact Phone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-[#8a7e9b]" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 ..."
                      className="w-full pl-9 pr-4 py-2.5 bg-[#0e0717] border border-[#341b52] focus:border-[#d4af37] rounded text-sm text-[#f5f2eb] placeholder-[#6d627d] outline-none transition-colors"
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Check-in & Check-out */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#c5bfb2] mb-1">
                    Check-In Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-[#8a7e9b]" />
                    <input
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 bg-[#0e0717] border border-[#341b52] focus:border-[#d4af37] rounded text-sm text-[#f5f2eb] outline-none transition-colors"
                    />
                  </div>
                  {errors.checkIn && <p className="text-xs text-rose-400 mt-1">{errors.checkIn}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#c5bfb2] mb-1">
                    Check-Out Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-[#8a7e9b]" />
                    <input
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 bg-[#0e0717] border border-[#341b52] focus:border-[#d4af37] rounded text-sm text-[#f5f2eb] outline-none transition-colors"
                    />
                  </div>
                  {errors.checkOut && <p className="text-xs text-rose-400 mt-1">{errors.checkOut}</p>}
                </div>
              </div>

              {/* Guests & Room Choice */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#c5bfb2] mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#0e0717] border border-[#341b52] focus:border-[#d4af37] rounded text-sm text-[#f5f2eb] outline-none transition-colors cursor-pointer"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4+ Guests">4+ Guests (Group)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#c5bfb2] mb-1">
                    Preferred Room
                  </label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#0e0717] border border-[#341b52] focus:border-[#d4af37] rounded text-sm text-[#f5f2eb] outline-none transition-colors cursor-pointer"
                  >
                    {ROOMS_DATA.map((r) => (
                      <option key={r.id} value={r.name}>
                        {r.name} ({r.bedType})
                      </option>
                    ))}
                    <option value="Flexible / Best Available">Flexible / Best Available</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-medium text-[#c5bfb2] mb-1">
                  Special Requests or Arrival Notes (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-[#8a7e9b]" />
                  <textarea
                    rows={2}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder="Late arrival, ground floor preference, quiet courtyard view..."
                    className="w-full pl-9 pr-4 py-2 bg-[#0e0717] border border-[#341b52] focus:border-[#d4af37] rounded text-sm text-[#f5f2eb] placeholder-[#6d627d] outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#c59b27] hover:brightness-110 active:scale-[0.99] text-[#0d0716] font-semibold text-xs uppercase tracking-widest rounded transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Submit Booking Inquiry</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center">
                <p className="text-[11px] text-[#8e849b]">
                  Need immediate confirmation? Call directly:{' '}
                  <a href={`tel:${HOTEL_INFO.phone}`} className="text-[#d4af37] font-medium hover:underline">
                    {HOTEL_INFO.phoneDisplay}
                  </a>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
