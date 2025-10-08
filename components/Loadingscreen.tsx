'use client';

import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  videoUrl: string;
  minDuration?: number; // Minimum display time in ms
}

export default function LoadingScreen({ 
  videoUrl, 
  minDuration = 2000,
}: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Match fade out duration
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration]);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ pointerEvents: fadeOut ? 'none' : 'auto' }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
    </div>
  );
}
