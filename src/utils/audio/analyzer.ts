import * as Meyda from 'meyda';
import { AudioFeatures, AudioAnalysisConfig } from '../../types/audio';

const DEFAULT_CONFIG: AudioAnalysisConfig = {
  bufferSize: 512,
  featureExtractors: ['rms', 'spectralCentroid', 'spectralRolloff', 'loudness'],
};

export class AudioAnalyzer {
  private analyzer: any;
  private config: AudioAnalysisConfig;

  constructor(config: Partial<AudioAnalysisConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  public analyze(audioData: Float32Array): AudioFeatures {
    this.setupAnalyzer(audioData);
    const features = this.analyzer.get(this.config.featureExtractors);
    
    return {
      rms: features.rms,
      spectralCentroid: features.spectralCentroid,
      spectralRolloff: features.spectralRolloff,
      loudness: features.loudness.total,
    };
  }

  private setupAnalyzer(audioData: Float32Array) {
    this.analyzer = Meyda.createMeydaAnalyzer({
      audioContext: new AudioContext(),
      bufferSize: this.config.bufferSize,
      source: audioData,
      featureExtractors: this.config.featureExtractors,
    });
  }
}