import React from 'react';
import { SlideData } from '../../types';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

interface Props {
  data: SlideData;
}

export const CriticalSlide: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col justify-center items-center text-center min-h-min">
      <div className="mb-4 md:mb-8 p-3 md:p-4 bg-red-500/10 rounded-full inline-block">
        <AlertTriangle className="w-10 h-10 md:w-16 md:h-16 text-red-500" />
      </div>
      
      <h2 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4">{data.title}</h2>
      <h3 className="text-lg md:text-2xl text-red-200 mb-8 md:mb-12">{data.subtitle}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full text-left">
        {data.content?.bullets?.map((bullet, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/20">
            <div className="flex items-start gap-3 md:gap-4">
              <ShieldAlert className="w-6 h-6 md:w-8 md:h-8 text-engelar-green flex-shrink-0 mt-1" />
              <p className="text-base md:text-lg text-gray-100 font-light leading-relaxed">
                {bullet}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 md:mt-12 bg-engelar-green text-engelar-navy px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg shadow-lg">
        Ação Imediata Necessária
      </div>
    </div>
  );
};