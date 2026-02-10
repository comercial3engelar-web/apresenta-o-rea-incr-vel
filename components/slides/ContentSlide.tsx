import React from 'react';
import { SlideData } from '../../types';
import { CheckCircle2, AlertCircle, User } from 'lucide-react';

interface Props {
  data: SlideData;
}

export const ContentSlide: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-8 border-l-4 border-engelar-green pl-6">
        <h2 className="text-4xl font-bold text-engelar-navy mb-2">{data.title}</h2>
        {data.subtitle && <h3 className="text-xl text-gray-500">{data.subtitle}</h3>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          {data.content?.bullets?.map((bullet, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-100">
              <CheckCircle2 className="w-6 h-6 text-engelar-green flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700 leading-relaxed">{bullet}</p>
            </div>
          ))}

          {data.content?.subSections?.map((section, idx) => (
            <div key={idx} className="mb-6">
              <h4 className="text-lg font-bold text-engelar-navy mb-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-engelar-green" />
                {section.title}
              </h4>
              <ul className="space-y-3 pl-4 border-l border-gray-200 ml-1">
                {section.items.map((item, i) => (
                  <li key={i} className="text-gray-700 text-lg py-1">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right side decoration or Responsible Info */}
        <div className="hidden md:flex flex-col justify-center items-center h-full">
           {data.responsible && (
             <div className="bg-engelar-navy text-white p-6 rounded-xl shadow-xl w-full max-w-sm mb-6">
               <div className="flex items-center gap-3 mb-2">
                 <User className="text-engelar-green" />
                 <span className="text-sm uppercase tracking-wider text-gray-400">Responsável</span>
               </div>
               <p className="text-2xl font-bold">{data.responsible}</p>
             </div>
           )}
           
           <div className="w-full h-64 bg-gradient-to-br from-engelar-navy/5 to-engelar-green/10 rounded-2xl flex items-center justify-center p-8 border border-gray-100">
              {data.type === 'critical' ? (
                 <AlertCircle className="w-32 h-32 text-red-500 opacity-20" />
              ) : (
                 <div className="grid grid-cols-2 gap-4 w-full h-full opacity-20">
                   <div className="bg-engelar-navy rounded-lg col-span-2 row-span-2"></div>
                   <div className="bg-engelar-green rounded-lg"></div>
                   <div className="bg-engelar-navy rounded-lg"></div>
                 </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};