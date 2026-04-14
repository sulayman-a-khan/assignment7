import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Text', value: 35, color: '#8b5cf6' },   // Purple
  { name: 'Call', value: 40, color: '#1e3a31' },   // Dark Green
  { name: 'Video', value: 25, color: '#4ade80' },  // Vibrant Green
];

const Stats = () => {
  return (
    /* This container fills the space between your header and footer */
    <div className="flex-1 flex flex-col w-full bg-white overflow-hidden font-sans">
      
      <main className="flex-1 flex flex-col px-6 md:px-12 py-6 max-w-[1100px] mx-auto w-full min-h-0">
        
        {/* Title */}
        <h1 className="text-[48px] md:text-[30px] font-bold tracking-tight text-[#1e293b] mb-4 shrink-0">
          Friendship Analytics
        </h1>

        {/* The Card - flex-1 and min-h-0 are key for the "No Scroll" fit */}
        <div className="flex-1 bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-5 mb-4 flex flex-col min-h-0">
          
          <h3 className="text-xl font-medium text-gray-500 mb-2 shrink-0">
            By Interaction Type
          </h3>

          {/* Chart Wrapper - Absolute trick to fix Recharts collapse */}
          <div className="flex-1 w-full relative min-h-0"> 
            <div className="absolute inset-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius="65%"  
                    outerRadius="87%"
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={5}
                    cornerRadius={9}
                    stroke="none"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Legend - shrink-0 ensures it doesn't get squished */}
          <div className="flex justify-center gap-6 md:gap-5 pt-6 shrink-0">
            {data.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-2.5 h-2.5 rounded-full" 
                  style={{ backgroundColor: entry.color }} 
                />
                <span className="text-gray-400 text-lg font-medium">
                  {entry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Stats;