import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { X } from 'lucide-react';

export const ImageLightboxModal: React.FC = () => {
  const { lightboxImage, closeLightbox } = useNavigation();

  if (!lightboxImage) return null;

  return (
    <div
      onClick={closeLightbox}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
    >
      <button
        onClick={closeLightbox}
        className="absolute top-6 right-6 p-3 text-[#f5f2eb] hover:text-[#d4af37] bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
        aria-label="Close image preview"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
      >
        <img
          src={lightboxImage.src}
          alt={lightboxImage.title}
          referrerPolicy="no-referrer"
          className="max-h-[75vh] w-auto object-contain rounded-lg border border-[#3b205e]/60 shadow-2xl"
        />
        <div className="mt-4 text-center">
          <h4 className="font-serif text-xl font-bold text-[#f5f0e6]">
            {lightboxImage.title}
          </h4>
          <p className="text-xs text-[#a99fb1] mt-1 max-w-lg mx-auto">
            {lightboxImage.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
