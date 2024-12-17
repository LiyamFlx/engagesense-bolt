export interface AudioFeatures {
  rms: number;
  spectralCentroid: number;
  spectralRolloff: number;
  loudness: number;
}

export interface AudioAnalysisConfig {
  bufferSize: number;
  featureExtractors: string[];
}

export interface AudioVisualizerConfig {
  waveColor: string;
  progressColor: string;
  cursorColor: string;
  barWidth: number;
  barGap: number;
  height: number;
  normalize: boolean;
}