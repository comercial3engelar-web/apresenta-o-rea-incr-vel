import React from 'react';
import { SlideData } from '../../types';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

interface Props {
  data: SlideData;
}

export const CriticalSlide: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col justify-center items-center text-center">
      <div className="mb-8 p-4 bg-red-500/10 rounded-full inline-block">
        <AlertTriangle className="w-16 h-16 text-red-500" />
      </div>
      
      <h2 className="text-5xl font-bold text-white mb-4">{data.title}</h2>
      <h3 className="text-2xl text-red-200 mb-12">{data.subtitle}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
        {data.content?.bullets?.map((bullet, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
            <div className="flex items-start gap-4">
              <ShieldAlert className="w-8 h-8 text-engelar-green flex-shrink-0" />
              <p className="text-lg text-gray-100 font-light leading-relaxed">
                {bullet}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-engelar-green text-engelar-navy px-8 py-4 rounded-lg font-bold text-lg shadow-lg">
        Ação Imediata Necessária
      </div>
    </div>
  );
};