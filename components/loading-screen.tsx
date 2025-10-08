"use client";

import { useState, useEffect, useRef } from 'react';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const onVideoEnd = () => {
        setLoading(false);
      };
      video.addEventListener('ended', onVideoEnd);
      return () => {
        video.removeEventListener('ended', onVideoEnd);
      };
    }
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black z-50 transition-opacity duration-1000 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://41edpnogvq.ucarecd.net/3cf8ab24-4c7f-43c8-aac7-99763baec311/"
      />
    </div>
  );
};

export default LoadingScreen;
