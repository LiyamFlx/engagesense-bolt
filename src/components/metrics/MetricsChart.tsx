import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { MetricConfig } from '../../types/metrics';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface MetricsChartProps {
  data: number[];
  config: MetricConfig;
  onRangeSelect?: (start: number, end: number) => void;
}

const MetricsChart: React.FC<MetricsChartProps> = ({ 
  data, 
  config,
  onRangeSelect 
}) => {
  const { label, color, recommendedRange } = config;

  const chartData = {
    labels: data.map((_, i) => i.toString()),
    datasets: [
      {
        label,
        data,
        borderColor: color,
        backgroundColor: `${color}33`,
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Recommended Range',
        data: data.map(() => recommendedRange[0]),
        borderColor: `${color}55`,
        borderDashed: [5, 5],
        fill: false,
      },
      {
        label: 'Recommended Range',
        data: data.map(() => recommendedRange[1]),
        borderColor: `${color}55`,
        borderDashed: [5, 5],
        fill: false,
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: label,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const value = context.raw;
            let status = 'Within range';
            if (value < recommendedRange[0]) status = 'Below range';
            if (value > recommendedRange[1]) status = 'Above range';
            return `${value.toFixed(1)} - ${status}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
    onClick: (event: any, elements: any[]) => {
      if (onRangeSelect && elements.length > 0) {
        const index = elements[0].index;
        onRangeSelect(Math.max(0, index - 5), index);
      }
    }
  };

  return (
    <div className="w-full h-[200px] bg-white rounded-lg shadow-md p-4">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default MetricsChart;