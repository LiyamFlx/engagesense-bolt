export interface EngagementMetrics {
  physical: number;
  emotional: number;
  mental: number;
  spiritual: number;
  timestamp: number;
}

export interface MetricConfig {
  label: string;
  color: string;
  description: string;
  interpretationGuide: string[];
  recommendedRange: [number, number];
}

export interface MetricsHistory {
  metrics: EngagementMetrics[];
  startTime: number;
  endTime: number;
}