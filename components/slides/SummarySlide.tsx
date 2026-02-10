import React from 'react';
import { SlideData } from '../../types';
import { CalendarClock, ArrowRight } from 'lucide-react';

interface Props {
  data: SlideData;
}

export const SummarySlide: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-engelar-navy mb-2">{data.title}</h2>
        <p className="text-gray-500 text-xl">{data.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.content?.subSections?.map((section, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-engelar-navy p-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">{section.title}</h3>
              <CalendarClock className="text-engelar-green" />
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-engelar-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-engelar-green/10 rounded-xl border border-engelar-green/20 text-center">
        <p className="text-engelar-navy font-semibold text-lg">
          O foco total da equipe está em garantir as entregas dentro dos prazos ajustados, priorizando a qualidade e a precisão técnica.
        </p>
      </div>
    </div>
  );
};