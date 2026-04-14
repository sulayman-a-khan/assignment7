import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { getTimelineEvents } from '../data/timelineStore';

const COLORS = {
  call:  '#1e3a31',
  text:  '#8b5cf6',
  video: '#4ade80',
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0].payload;
    return (
      <div className="bg-white border border-gray-200 shadow-lg rounded-xl px-4 py-2 text-sm font-medium text-gray-700">
        {name}: <span className="font-bold text-gray-900">{value}</span>
      </div>
    );
  }
  return null;
};

const Stats = () => {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const events = getTimelineEvents();
    const counts = { call: 0, text: 0, video: 0 };
    events.forEach(e => {
      if (counts[e.type] !== undefined) counts[e.type]++;
    });
    const built = Object.entries(counts)
      .map(([name, value]) => ({ name: name.charAt(0).toUpperCase() + name.slice(1), value, color: COLORS[name] }))
      .filter(d => d.value > 0);
    setData(built.length > 0 ? built : [
      { name: 'Text',  value: 0, color: COLORS.text },
      { name: 'Call',  value: 0, color: COLORS.call },
      { name: 'Video', value: 0, color: COLORS.video },
    ]);
  }, []);

  const total = data.reduce((s, d) => s + d.value, 0);
  const isEmpty = total === 0;

  // Placeholder data so chart renders even when empty
  const chartData = isEmpty
    ? [{ name: 'Empty', value: 1, color: '#e5e7eb' }]
    : data;

  return (
    <div className="flex-1 flex flex-col w-full bg-white overflow-hidden font-sans">
      <main className="flex-1 flex flex-col px-6 md:px-12 py-6 max-w-[1100px] mx-auto w-full min-h-0">

        <h1 className="text-[48px] md:text-[30px] font-bold tracking-tight text-[#1e293b] mb-4 shrink-0">
          Friendship Analytics
        </h1>

        <div className="flex-1 bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-5 mb-4 flex flex-col min-h-0">

          <h3 className="text-xl font-medium text-gray-500 mb-2 shrink-0">
            By Interaction Type
          </h3>

          {/* Chart */}
          <div className="flex-1 w-full relative min-h-0">
            <div className="absolute inset-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius="65%"
                    outerRadius="87%"
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={isEmpty ? 0 : 5}
                    cornerRadius={isEmpty ? 0 : 9}
                    stroke="none"
                    onMouseEnter={(_, index) => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        opacity={activeIndex === null || activeIndex === index ? 1 : 0.45}
                        style={{ cursor: isEmpty ? 'default' : 'pointer', transition: 'opacity 0.2s' }}
                      />
                    ))}
                  </Pie>
                  {!isEmpty && <Tooltip content={<CustomTooltip />} />}
                </PieChart>
              </ResponsiveContainer>

              {/* Center label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                {isEmpty ? (
                  <span className="text-gray-300 text-sm font-medium">No data yet</span>
                ) : activeIndex !== null ? (
                  <>
                    <span className="text-3xl font-bold text-gray-900">{data[activeIndex]?.value}</span>
                    <span className="text-sm text-gray-400 mt-1">{data[activeIndex]?.name}s</span>
                  </>
                ) : (
                  <>
                    <span className="text-3xl font-bold text-gray-900">{total}</span>
                    <span className="text-sm text-gray-400 mt-1">Total</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-6 md:gap-5 pt-6 shrink-0">
            {(isEmpty ? [
              { name: 'Text',  color: COLORS.text },
              { name: 'Call',  color: COLORS.call },
              { name: 'Video', color: COLORS.video },
            ] : data).map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                <span className="text-gray-400 text-lg font-medium">
                  {entry.name}
                  {!isEmpty && (
                    <span className="ml-1 text-gray-600 font-semibold">
                      {data.find(d => d.name === entry.name)?.value ?? 0}
                    </span>
                  )}
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
