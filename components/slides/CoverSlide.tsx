import React from 'react';
import { SlideData } from '../../types';
import { ChevronRight } from 'lucide-react';

interface Props {
  data: SlideData;
  onStart: () => void;
}

export const CoverSlide: React.FC<Props> = ({ data, onStart }) => {
  return (
    <div className="flex flex-col items-start max-w-4xl">
      <div className="w-20 h-2 bg-engelar-green mb-8" />
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        {data.title}
      </h1>
      <h2 className="text-xl md:text-3xl text-gray-300 font-light mb-12">
        {data.subtitle}
      </h2>
      
      {data.content?.text && (
        <p className="text-engelar-green font-mono text-lg mb-8">
          {data.content.text}
        </p>
      )}

      {data.id === 0 && (
        <button 
          onClick={onStart}
          className="group flex items-center gap-2 px-8 py-3 bg-engelar-green text-white rounded-full font-bold hover:bg-opacity-90 transition-all"
        >
          Iniciar Apresentação
          <ChevronRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </div>
  );
};