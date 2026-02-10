import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { SlideData } from '../types';

interface SlideLayoutProps {
  slide: SlideData;
  children: React.ReactNode;
  currentSlide: number;
  totalSlides: number;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ slide, children, currentSlide, totalSlides }) => {
  const isDark = slide.type === 'cover' || slide.type === 'critical';

  return (
    <div className={`relative w-full h-screen overflow-hidden flex flex-col ${isDark ? 'bg-engelar-navy text-white' : 'bg-white text-engelar-navy'}`}>
      {/* Header */}
      <header className={`w-full p-8 flex justify-between items-center z-20 ${!isDark ? 'bg-engelar-navy text-white shadow-md' : ''}`}>
        <Logo />
        <div className="text-right">
          <h2 className="text-sm uppercase tracking-widest opacity-80">Acompanhamento de Obra</h2>
          <p className="font-bold text-engelar-green">Área Incrível</p>
        </div>
      </header>

      {/* Main Content Area */}
      <motion.main 
        key={slide.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="flex-grow flex flex-col justify-center px-12 md:px-24 py-8 relative z-10"
      >
        {/* Decorative Background Elements */}
        {!isDark && (
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10 skew-x-12 translate-x-20" />
        )}
        
        {children}
      </motion.main>

      {/* Footer / Progress */}
      <footer className="w-full p-6 flex items-center justify-between text-xs z-20">
        <div className={`flex items-center gap-2 ${isDark ? 'text-white/60' : 'text-engelar-navy/60'}`}>
          <span>{currentSlide + 1} / {totalSlides}</span>
        </div>
        
        <div className="flex-grow mx-6 h-1 bg-gray-200/20 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-engelar-green"
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />
        </div>
        
        <div className={`${isDark ? 'text-white/60' : 'text-engelar-navy/60'}`}>
          www.engelar.eng.br
        </div>
      </footer>
    </div>
  );
};