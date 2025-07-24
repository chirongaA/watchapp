// components/ImageModal.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react'; // optional: use Lucide or any icon lib

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
      <div className="relative max-w-3xl w-full">
        <button
          className="absolute top-2 right-2 text-white hover:text-gray-300"
          onClick={onClose}
        >
          <X size={28} />
        </button>
        <Image
          src={src}
          alt={alt}
          fill
          className="rounded-xl shadow-lg object-contain"
          sizes="(max-width: 768px) 100vw, 700px"
          style={{ objectFit: 'contain', width: '100%', height: 'auto', position: 'relative' }}
        />
      </div>
    </div>
  );
};

export default ImageModal;
