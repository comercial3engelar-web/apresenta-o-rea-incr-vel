import React from 'react';
import { SlideData } from '../../types';
import { ChevronRight } from 'lucide-react';

interface Props {
  data: SlideData;
  onStart: () => void;
}

export const CoverSlide: React.FC<Props> = ({ data, onStart }) => {
  return (
    <div className="flex flex-col items-start max-w-4xl py-4 md:py-0">
      <div className="w-16 md:w-20 h-2 bg-engelar-green mb-6 md:mb-8" />
      <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight">
        {data.title}
      </h1>
      <h2 className="text-lg md:text-3xl text-gray-300 font-light mb-8 md:mb-12">
        {data.subtitle}
      </h2>
      
      {data.content?.text && (
        <p className="text-engelar-green font-mono text-base md:text-lg mb-8">
          {data.content.text}
        </p>
      )}

      {data.id === 0 && (
        <button 
          onClick={onStart}
          className="group flex items-center gap-2 px-6 py-3 md:px-8 bg-engelar-green text-white rounded-full font-bold hover:bg-opacity-90 transition-all text-sm md:text-base"
        >
          Iniciar Apresentação
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </div>
  );
};