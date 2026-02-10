import React from 'react';
import { SlideData } from '../../types';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface Props {
  data: SlideData;
}

export const ChartSlide: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col min-h-min">
      <div className="mb-4 md:mb-6 border-l-4 border-engelar-green pl-4 md:pl-6">
        <h2 className="text-2xl md:text-4xl font-bold text-engelar-navy mb-1 md:mb-2">{data.title}</h2>
        <h3 className="text-base md:text-xl text-gray-500">{data.subtitle}</h3>
      </div>

      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        {/* Chart Area */}
        <div className="h-[250px] md:h-[400px] w-full bg-white rounded-xl shadow-sm border border-gray-100 p-2 md:p-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data.chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
              >
                {data.chartData?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} stroke="none" />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#2E3E58', color: '#fff', borderRadius: '8px', border: 'none', fontSize: '12px' }}
                itemStyle={{ color: '#fff' }}
              />
              <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: '12px' }}/>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Text Area */}
        <div className="space-y-6 md:space-y-8 pb-4">
           <div className="text-base md:text-xl text-gray-700 leading-relaxed">
             {data.content?.text}
           </div>

           <div className="grid grid-cols-1 gap-3 md:gap-4">
             {data.chartData?.map((item: any, idx: number) => (
               <div key={idx} className="flex justify-between items-center p-3 md:p-4 bg-gray-50 rounded-lg">
                 <div className="flex items-center gap-2 md:gap-3">
                   <div className="w-3 h-3 md:w-4 md:h-4 rounded-full flex-shrink-0" style={{ backgroundColor: item.fill }} />
                   <span className="text-sm md:text-base font-medium text-engelar-navy">{item.name}</span>
                 </div>
                 <span className="text-xl md:text-2xl font-bold text-engelar-navy">{item.value}</span>
               </div>
             ))}
           </div>

           {data.highlight && (
             <div className="bg-engelar-green text-white p-4 md:p-6 rounded-xl text-center shadow-lg md:transform md:scale-105">
               <span className="text-xl md:text-3xl font-bold">{data.highlight}</span>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};