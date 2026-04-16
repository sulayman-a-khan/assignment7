import React, { useState, useEffect, useRef } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { getTimelineEvents } from '../data/timelineStore';

const COLORS = {
  Call:  '#1e3a31',
  Text:  '#8b5cf6',
  Video: '#4ade80',
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0].payload;
    return (
      <div className="bg-white border border-gray-200 shadow-lg rounded-xl px-4 py-2 text-sm font-semibold text-gray-800">
        {name}: {value}
      </div>
    );
  }
  return null;
};

const Stats = () => {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const refresh = () => {
    const events = getTimelineEvents();
    const counts = { Call: 0, Text: 0, Video: 0 };
    events.forEach(e => {
      const key = e.type.charAt(0).toUpperCase() + e.type.slice(1);
      if (counts[key] !== undefined) counts[key]++;
    });
    const built = Object.entries(counts).map(([name, value]) => ({
      name, value, color: COLORS[name],
    }));
    setData(built);
  };

  useEffect(() => {
    refresh();
    const sync = () => refresh();
    window.addEventListener('focus', sync);
    return () => window.removeEventListener('focus', sync);
  }, []);

  const total = data.reduce((s, d) => s + d.value, 0);
  const isEmpty = total === 0;

  const chartData = isEmpty
    ? [{ name: 'Empty', value: 1, color: '#e5e7eb' }]
    : data;

  return (
    <div className="flex-1 flex flex-col w-full bg-white overflow-hidden font-sans">
      <main className="flex-1 flex flex-col px-4 sm:px-8 md:px-12 py-6 max-w-[1100px] mx-auto w-full min-h-0">

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1e293b] mb-4 shrink-0">
          Friendship Analytics
        </h1>

        <div className="flex-1 bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-8 mb-4 flex flex-col min-h-0">

          <h3 className="text-base sm:text-xl font-medium text-gray-500 mb-2 shrink-0">
            By Interaction Type
          </h3>

          {/* Chart */}
          <div className="flex-1 w-full relative min-h-[220px]">
            <div className="absolute inset-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="82%"
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={isEmpty ? 0 : 5}
                    cornerRadius={isEmpty ? 0 : 9}
                    stroke="none"
                    onMouseEnter={(_, index) => !isEmpty && setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        opacity={activeIndex === null || activeIndex === index ? 1 : 0.35}
                        style={{ cursor: isEmpty ? 'default' : 'pointer', transition: 'opacity 0.2s' }}
                      />
                    ))}
                  </Pie>
                  {!isEmpty && <Tooltip content={<CustomTooltip />} />}
                </PieChart>
              </ResponsiveContainer>

              {/* Center — only show if hovering a segment */}
              {!isEmpty && activeIndex !== null && (
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                    {data[activeIndex]?.value}
                  </span>
                  <span className="text-sm text-gray-400 mt-1">
                    {data[activeIndex]?.name}s
                  </span>
                </div>
              )}

              {isEmpty && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-gray-300 text-sm font-medium">No data yet</span>
                </div>
              )}
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-5 shrink-0">
            {[
              { name: 'Call',  color: COLORS.Call },
              { name: 'Text',  color: COLORS.Text },
              { name: 'Video', color: COLORS.Video },
            ].map((entry, index) => {
              const count = data.find(d => d.name === entry.name)?.value ?? 0;
              return (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                  <span className="text-gray-400 text-base font-medium">
                    {entry.name}
                    {!isEmpty && (
                      <span className="ml-1.5 text-gray-700 font-bold">{count}</span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Stats;
