'use client';
import { useEffect } from 'react';
import { captureAttribution } from '@/lib/adsTracking';

const useGclidCapture = () => {
  useEffect(() => {
    captureAttribution();
  }, []);
};

export default useGclidCapture;
