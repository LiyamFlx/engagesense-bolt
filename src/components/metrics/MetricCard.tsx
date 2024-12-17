import React from 'react';
import { MetricConfig } from '../../types/metrics';

interface MetricCardProps {
  value: number;
  config: MetricConfig;
}

const MetricCard: React.FC<MetricCardProps> = ({ value, config }) => {
  const { label, color, recommendedRange } = config;
  const isWithinRange = value >= recommendedRange[0] && value <= recommendedRange[1];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-sm font-medium text-gray-500">{label}</h3>
      <div className="mt-2 flex items-baseline">
        <p 
          className={`text-2xl font-semibold ${isWithinRange ? '' : 'animate-pulse'}`}
          style={{ color }}
        >
          {value.toFixed(1)}
        </p>
        <p className="ml-1 text-sm text-gray-500">/ 100</p>
      </div>
      <div className="mt-2">
        <div 
          className="h-1 rounded-full"
          style={{ 
            background: `linear-gradient(to right, ${color}33, ${color})`,
            width: `${value}%`
          }}
        />
      </div>
    </div>
  );
};

export default MetricCard;