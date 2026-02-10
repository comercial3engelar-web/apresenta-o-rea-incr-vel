import React from 'react';
import { SlideData } from '../../types';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface Props {
  data: SlideData;
}

export const ChartSlide: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full max-w-6xl mx-auto h-full flex flex-col">
      <div className="mb-6 border-l-4 border-engelar-green pl-6">
        <h2 className="text-4xl font-bold text-engelar-navy mb-2">{data.title}</h2>
        <h3 className="text-xl text-gray-500">{data.subtitle}</h3>
      </div>

      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Chart Area */}
        <div className="h-[400px] w-full bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data.chartData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.chartData?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} stroke="none" />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#2E3E58', color: '#fff', borderRadius: '8px', border: 'none' }}
                itemStyle={{ color: '#fff' }}
              />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Text Area */}
        <div className="space-y-8">
           <div className="text-xl text-gray-700 leading-relaxed">
             {data.content?.text}
           </div>

           <div className="grid grid-cols-1 gap-4">
             {data.chartData?.map((item: any, idx: number) => (
               <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                 <div className="flex items-center gap-3">
                   <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.fill }} />
                   <span className="font-medium text-engelar-navy">{item.name}</span>
                 </div>
                 <span className="text-2xl font-bold text-engelar-navy">{item.value}</span>
               </div>
             ))}
           </div>

           {data.highlight && (
             <div className="bg-engelar-green text-white p-6 rounded-xl text-center shadow-lg transform scale-105">
               <span className="text-3xl font-bold">{data.highlight}</span>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};