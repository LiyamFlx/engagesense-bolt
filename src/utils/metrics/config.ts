import { MetricConfig } from '../../types/metrics';

export const metricConfigs: Record<keyof Omit<EngagementMetrics, 'timestamp'>, MetricConfig> = {
  physical: {
    label: 'Physical Engagement',
    color: 'rgb(59, 130, 246)',
    description: 'Measures the physical intensity and energy in the voice',
    interpretationGuide: [
      'Below 30: Low energy, possible fatigue',
      '30-70: Optimal energy level',
      'Above 70: High energy, intense delivery'
    ],
    recommendedRange: [30, 70]
  },
  emotional: {
    label: 'Emotional Engagement',
    color: 'rgb(239, 68, 68)',
    description: 'Indicates emotional expressiveness and variation',
    interpretationGuide: [
      'Below 40: Limited emotional expression',
      '40-80: Good emotional range',
      'Above 80: Very expressive, passionate'
    ],
    recommendedRange: [40, 80]
  },
  mental: {
    label: 'Mental Engagement',
    color: 'rgb(16, 185, 129)',
    description: 'Reflects clarity and structure of speech',
    interpretationGuide: [
      'Below 35: Unclear or unfocused',
      '35-75: Clear and structured',
      'Above 75: Highly articulate'
    ],
    recommendedRange: [35, 75]
  },
  spiritual: {
    label: 'Spiritual Engagement',
    color: 'rgb(139, 92, 246)',
    description: 'Measures depth and authenticity of expression',
    interpretationGuide: [
      'Below 30: Surface level communication',
      '30-70: Authentic expression',
      'Above 70: Deep, meaningful connection'
    ],
    recommendedRange: [30, 70]
  }
};