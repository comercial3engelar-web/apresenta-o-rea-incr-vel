import React from 'react';
import { SlideData } from '../../types';
import { CalendarClock, ArrowRight } from 'lucide-react';

interface Props {
  data: SlideData;
}

export const SummarySlide: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col justify-center min-h-min">
      <div className="mb-6 md:mb-10 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-engelar-navy mb-1 md:mb-2">{data.title}</h2>
        <p className="text-gray-500 text-base md:text-xl">{data.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {data.content?.subSections?.map((section, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-engelar-navy p-3 md:p-4 flex items-center justify-between">
              <h3 className="text-lg md:text-xl font-bold text-white">{section.title}</h3>
              <CalendarClock className="text-engelar-green w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="p-4 md:p-6">
              <ul className="space-y-3 md:space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 md:gap-3">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-engelar-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 md:mt-12 p-4 md:p-6 bg-engelar-green/10 rounded-xl border border-engelar-green/20 text-center mb-4 md:mb-0">
        <p className="text-engelar-navy font-semibold text-base md:text-lg">
          O foco total da equipe está em garantir as entregas dentro dos prazos ajustados, priorizando a qualidade e a precisão técnica.
        </p>
      </div>
    </div>
  );
};