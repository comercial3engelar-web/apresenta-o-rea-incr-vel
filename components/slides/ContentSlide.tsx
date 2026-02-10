import React from 'react';
import { SlideData } from '../../types';
import { CheckCircle2, User, Layers, ArrowRight } from 'lucide-react';

interface Props {
  data: SlideData;
}

export const ContentSlide: React.FC<Props> = ({ data }) => {
  const hasSubSections = data.content?.subSections && data.content.subSections.length > 0;

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col h-full justify-start md:justify-center py-4">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 md:mb-12 border-l-4 border-engelar-green pl-6">
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-bold text-engelar-navy mb-2 leading-tight">
            {data.title}
          </h2>
          {data.subtitle && (
            <h3 className="text-lg md:text-2xl text-gray-500 font-light">
              {data.subtitle}
            </h3>
          )}
        </div>
        
        {/* Responsible Badge - Elegant display */}
        {data.responsible && (
          <div className="mt-4 md:mt-0 md:ml-6 flex items-center bg-engelar-navy/5 px-5 py-3 rounded-xl border border-engelar-navy/10 self-start">
            <div className="bg-engelar-navy p-2 rounded-full mr-3">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="block text-xs text-gray-500 uppercase tracking-wider font-semibold">Responsável</span>
              <span className="block text-lg font-bold text-engelar-navy">{data.responsible}</span>
            </div>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="w-full">
        
        {/* Scenario 1: SubSections (Cards Layout) */}
        {hasSubSections && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {data.content?.subSections?.map((section, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-engelar-green/30 transition-colors group h-full flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-engelar-gray flex items-center justify-center group-hover:bg-engelar-green group-hover:text-white transition-colors text-engelar-navy">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-engelar-navy">
                    {section.title}
                  </h4>
                </div>
                
                <ul className="space-y-4 flex-grow">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-engelar-green" />
                      <span className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Scenario 2: Simple Bullets (List Layout) */}
        {!hasSubSections && data.content?.bullets && (
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 max-w-5xl mx-auto">
            <div className="grid gap-6">
              {data.content.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-5 group">
                  <div className="mt-1 flex-shrink-0">
                     <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-engelar-green group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-lg md:text-2xl text-engelar-navy leading-relaxed border-b border-gray-50 pb-4 w-full">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};