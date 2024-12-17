import React from 'react';
import MetricsChart from './MetricsChart';
import MetricCard from './MetricCard';
import { metricConfigs } from '../../utils/metrics/config';
import { EngagementMetrics as EngagementMetricsType } from '../../types/metrics';

interface EngagementMetricsProps {
  metrics: {
    physical: number[];
    emotional: number[];
    mental: number[];
    spiritual: number[];
  };
  onRangeSelect?: (metricKey: keyof EngagementMetricsType, start: number, end: number) => void;
}

const EngagementMetrics: React.FC<EngagementMetricsProps> = ({ 
  metrics,
  onRangeSelect 
}) => {
  const getLatestValue = (data: number[]) => {
    return data[data.length - 1] || 0;
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {(Object.keys(metrics) as Array<keyof typeof metrics>).map((key) => (
          <MetricCard
            key={key}
            value={getLatestValue(metrics[key])}
            config={metricConfigs[key]}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {(Object.keys(metrics) as Array<keyof typeof metrics>).map((key) => (
          <MetricsChart
            key={key}
            data={metrics[key]}
            config={metricConfigs[key]}
            onRangeSelect={onRangeSelect ? 
              (start, end) => onRangeSelect(key, start, end) : 
              undefined
            }
          />
        ))}
      </div>
    </div>
  );
};

export default EngagementMetrics;