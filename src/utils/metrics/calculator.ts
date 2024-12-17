import { AudioFeatures } from '../../types/audio';
import { EngagementMetrics } from '../../types/metrics';

export class MetricsCalculator {
  public calculateEngagement(features: AudioFeatures): EngagementMetrics {
    return {
      physical: this.normalizePhysical(features.rms),
      emotional: this.normalizeEmotional(features.loudness),
      mental: this.normalizeMental(features.spectralCentroid),
      spiritual: this.normalizeSpiritual(features.spectralRolloff),
      timestamp: Date.now(),
    };
  }

  private normalizePhysical(rms: number): number {
    return Math.min(100, rms * 1000);
  }

  private normalizeEmotional(loudness: number): number {
    return Math.min(100, loudness * 10);
  }

  private normalizeMental(spectralCentroid: number): number {
    return Math.min(100, spectralCentroid / 100);
  }

  private normalizeSpiritual(spectralRolloff: number): number {
    return Math.min(100, spectralRolloff / 100);
  }
}