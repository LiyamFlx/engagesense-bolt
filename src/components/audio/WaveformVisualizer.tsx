import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

interface WaveformVisualizerProps {
  audioData: Float32Array | null;
  isRecording: boolean;
}

const WaveformVisualizer: React.FC<WaveformVisualizerProps> = ({ audioData, isRecording }) => {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);

  useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#4F46E5',
        progressColor: '#818CF8',
        cursorColor: '#C7D2FE',
        barWidth: 2,
        barGap: 1,
        height: 100,
        normalize: true,
      });
    }

    return () => {
      wavesurfer.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (audioData && !isRecording) {
      const audioBlob = new Blob([audioData], { type: 'audio/wav' });
      wavesurfer.current?.loadBlob(audioBlob);
    }
  }, [audioData, isRecording]);

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4">
      <div ref={waveformRef} className="w-full h-[100px]" />
    </div>
  );
};

export default WaveformVisualizer;