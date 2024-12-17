import * as Meyda from 'meyda';

export interface AudioFeatures {
  rms: number;
  spectralCentroid: number;
  spectralRolloff: number;
  loudness: number;
}

export interface EngagementMetrics {
  physical: number;
  emotional: number;
  mental: number;
  spiritual: number;
}

export const analyzeAudioFeatures = (audioData: Float32Array): AudioFeatures => {
  const analyzer = Meyda.createMeydaAnalyzer({
    audioContext: new AudioContext(),
    bufferSize: 512,
    source: audioData,
    featureExtractors: ['rms', 'spectralCentroid', 'spectralRolloff', 'loudness'],
  });

  const features = analyzer.get(['rms', 'spectralCentroid', 'spectralRolloff', 'loudness']);
  
  return {
    rms: features.rms,
    spectralCentroid: features.spectralCentroid,
    spectralRolloff: features.spectralRolloff,
    loudness: features.loudness.total,
  };
};

export const calculateEngagement = (features: AudioFeatures): EngagementMetrics => {
  // Normalize values to 0-100 range
  const physical = Math.min(100, features.rms * 1000);
  const emotional = Math.min(100, features.loudness * 10);
  const mental = Math.min(100, features.spectralCentroid / 100);
  const spiritual = Math.min(100, features.spectralRolloff / 100);

  return {
    physical,
    emotional,
    mental,
    spiritual,
  };
};