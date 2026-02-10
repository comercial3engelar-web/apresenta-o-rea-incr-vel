import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.code === 'Space' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch Swipe Logic
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current || !touchStartY.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    // Threshold for swipe detection
    const minSwipeDistance = 50;

    // Check if horizontal swipe is more significant than vertical scroll
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (Math.abs(diffX) > minSwipeDistance) {
        if (diffX > 0) {
          nextSlide(); // Swiped Left -> Next
        } else {
          prevSlide(); // Swiped Right -> Prev
        }
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

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
    <div 
      className="w-full h-full"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <SlideLayout 
        slide={currentSlideData} 
        currentSlide={currentSlideIndex} 
        totalSlides={SLIDES.length}
      >
        <AnimatePresence mode="wait">
          {renderSlideContent()}
        </AnimatePresence>
      </SlideLayout>
    </div>
  );
};

export default App;