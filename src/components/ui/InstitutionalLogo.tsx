import React, { useState } from 'react';
import { getAssetPath } from '../../utils/assets';

interface InstitutionalLogoProps {
  type: 'shivaji' | 'delhi_university';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  customSrc?: string;
}

export const InstitutionalLogo: React.FC<InstitutionalLogoProps> = ({
  type,
  className = '',
  size = 'md',
  customSrc
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20'
  };

  // Default paths matching user uploaded SVG assets with GitHub Pages base resolution
  const defaultPath = type === 'shivaji' 
    ? getAssetPath('logos/shivaji-college-logo.svg') 
    : getAssetPath('logos/delhi-university-logo.svg');

  const imgSrc = customSrc ? getAssetPath(customSrc) : defaultPath;

  // If image hasn't errored, try rendering it
  if (!imageError) {
    return (
      <div className={`relative ${sizeClasses[size]} shrink-0 rounded-full bg-white border border-[#C6A15B]/40 shadow-xs p-1 flex items-center justify-center overflow-hidden ${className}`}>
        <img
          src={imgSrc}
          alt={type === 'shivaji' ? 'Official Shivaji College Logo' : 'Official University of Delhi Logo'}
          className="w-full h-full object-contain"
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  // Graceful Fallback Seal Placeholder if image file is not yet placed
  if (type === 'shivaji') {
    return (
      <div
        className={`flex items-center gap-3 ${className}`}
        title="Official Shivaji College Logo (Place file at /public/logos/shivaji-college-logo.png)"
      >
        <div
          className={`${sizeClasses[size]} shrink-0 rounded-full border border-[#C6A15B]/50 bg-white flex items-center justify-center p-1.5 shadow-xs relative group`}
        >
          {/* Dignified Institutional Seal Graphic */}
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#7F3040]" fill="currentColor">
            <circle cx="50" cy="50" r="46" fill="none" stroke="#7F3040" strokeWidth="2.5" strokeDasharray="3 1.5" />
            <circle cx="50" cy="50" r="41" fill="none" stroke="#C6A15B" strokeWidth="1.5" />
            {/* Book & Torch of Knowledge */}
            <path d="M30 65 L50 55 L70 65 L70 45 L50 35 L30 45 Z" fill="#7F3040" opacity="0.85" />
            <path d="M50 35 L50 55" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M47 24 Q50 16 53 24 Q50 21 47 24 Z" fill="#C6A15B" />
            <circle cx="50" cy="27" r="2.5" fill="#7F3040" />
            <circle cx="50" cy="50" r="2" fill="#C6A15B" />
          </svg>
        </div>
      </div>
    );
  }

  // Delhi University Emblem Fallback
  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      title="Official University of Delhi Logo (Place file at /public/logos/delhi-university-logo.png)"
    >
      <div
        className={`${sizeClasses[size]} shrink-0 rounded-full border border-[#C6A15B]/50 bg-white flex items-center justify-center p-1.5 shadow-xs relative group`}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#7F3040]" fill="currentColor">
          <circle cx="50" cy="50" r="46" fill="none" stroke="#7F3040" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="#C6A15B" strokeWidth="1.5" strokeDasharray="2 1" />
          {/* University Crest Elements */}
          <path d="M32 40 C32 30 68 30 68 40 L64 70 C60 76 40 76 36 70 Z" fill="#7F3040" opacity="0.9" />
          <circle cx="50" cy="46" r="8" fill="#C6A15B" opacity="0.8" />
          <path d="M42 62 L50 56 L58 62 L50 68 Z" fill="#FFFFFF" />
          <text x="50" y="24" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#7F3040" fontFamily="serif">ESTD. 1922</text>
        </svg>
      </div>
    </div>
  );
};

