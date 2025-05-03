import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface StepChartProps {
  entry: { time: Date; steps: string; distance: string; calories: string };
  stepsGoal: string;
}

const StepChart: React.FC<StepChartProps> = ({ entry, stepsGoal }) => {
  const COLORS = ['#2563eb', '#e5e7eb'];

  const pieData = (() => {
    const goal = Number(stepsGoal);
    const steps = Number(entry.steps);
    const remaining = Math.max(goal - steps, 0);
    return [
      { name: 'Completati', value: steps },
      { name: 'Da completare', value: remaining }
    ];
  })();

  const renderLabel = ({ percent }: { percent: number }) =>
    `${(percent * 100).toFixed(0)}%`;

  return (
    <div className="h-[350px] mt-10 py-11 ">
      <h2 className="text-2xl font-semibold text-center mb-4">🥧 Completamento Obiettivo</h2>
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={110}
              innerRadius={60}
              dataKey="value"
              label={renderLabel}
              isAnimationActive
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: '#f3f4f6', color: '#1f2937', padding: '8px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} 
              labelStyle={{ fontWeight: 'bold' }} 
              itemStyle={{ color: '#374151', fontSize: '14px' }}
            />
            <Legend verticalAlign="bottom" iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StepChart;
