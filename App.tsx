import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SLIDES } from './constants';
import { SlideLayout } from './components/SlideLayout';
import { CoverSlide } from './components/slides/CoverSlide';
import { ContentSlide } from './components/slides/ContentSlide';
import { ChartSlide } from './components/slides/ChartSlide';
import { SummarySlide } from './components/slides/SummarySlide';
import { CriticalSlide } from './components/slides/CriticalSlide';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentSlideData = SLIDES[currentSlideIndex];

  const renderSlideContent = () => {
    switch (currentSlideData.type) {
      case 'cover':
        return <CoverSlide data={currentSlideData} onStart={nextSlide} />;
      case 'numbers':
        return <ChartSlide data={currentSlideData} />;
      case 'critical':
        return <CriticalSlide data={currentSlideData} />;
      case 'summary':
        return <SummarySlide data={currentSlideData} />;
      case 'standard':
      case 'timeline':
      default:
        return <ContentSlide data={currentSlideData} />;
    }
  };

  return (
    <SlideLayout 
      slide={currentSlideData} 
      currentSlide={currentSlideIndex} 
      totalSlides={SLIDES.length}
    >
      <AnimatePresence mode="wait">
        {renderSlideContent()}
      </AnimatePresence>

      {/* Touch Navigation Controls for Mobile */}
      <div className="absolute bottom-24 right-8 flex gap-4 md:hidden z-50">
        <button 
          onClick={prevSlide}
          disabled={currentSlideIndex === 0}
          className="p-3 bg-engelar-navy text-white rounded-full shadow-lg disabled:opacity-50"
        >
          ←
        </button>
        <button 
          onClick={nextSlide}
          disabled={currentSlideIndex === SLIDES.length - 1}
          className="p-3 bg-engelar-green text-white rounded-full shadow-lg disabled:opacity-50"
        >
          →
        </button>
      </div>
    </SlideLayout>
  );
};

export default App;