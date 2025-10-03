import React, { useState } from 'react';
import { SearchSection } from './search-section';
import { HelpSection } from './help-section';

interface SearchHelpCarouselProps {
  onSearch?: (query: string) => void;
  onSuggestionClick?: (suggestion: string) => void;
  className?: string;
}

export const SearchHelpCarousel: React.FC<SearchHelpCarouselProps> = ({
  onSearch,
  onSuggestionClick,
  className = ''
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const slides = [
    { id: 'search', component: <SearchSection onSearch={onSearch} onSuggestionClick={onSuggestionClick} /> },
    { id: 'help', component: <HelpSection /> }
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };


  // Touch handlers para mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Carousel Container */}
      <div className="relative w-full">
        {/* Cards */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="w-full flex-shrink-0 px-2"
              >
                {slide.component}
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores retangulares no canto superior direito */}
        {totalSlides > 1 && (
          <div className="absolute top-4 right-4 flex gap-1.5" style={{ width: '71px', height: '13px' }}>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div
                key={index}
                className={`flex-1 rounded transition-colors ${
                  index === currentSlide
                    ? 'bg-[#ECECED]'
                    : 'bg-transparent border border-[#ECECED]'
                }`}
                style={{ height: '13px' }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
