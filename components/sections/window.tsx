'use client'
import React, { useState, useEffect } from 'react';

export default function CinematicWindowSection() {
  const [showBackground, setShowBackground] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Background image appears after 2 seconds
    const bgTimer = setTimeout(() => {
      setShowBackground(true);
    }, 2000);

    // Logo appears after 4 seconds
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 4000);

    // Mark animation as complete after 5 seconds
    const completeTimer = setTimeout(() => {
      setAnimationComplete(true);
    }, 5000);

    return () => {
      clearTimeout(bgTimer);
      clearTimeout(logoTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Background Image Layer */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1500 ${
          showBackground ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Company Logo */}
      <div 
        className={`absolute top-8 left-8 z-30 transition-all duration-1000 ${
          showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg border border-white/20">
          <h1 className="text-2xl font-bold text-white tracking-wider">COMPANY</h1>
        </div>
      </div>

      {/* 3D Model Container - Scaled and Centered */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div 
          className="relative"
          style={{
            width: '180%',
            height: '180%',
            maxWidth: '2000px',
            maxHeight: '2000px',
          }}
        >
          <iframe
            title="Windows (open animation)"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking="true"
            execution-while-out-of-viewport="true"
            execution-while-not-rendered="true"
            web-share="true"
            src="https://sketchfab.com/models/bf96bea79e61459fa8bcf820faf8e884/embed?ui_hint=0&dnt=1&autostart=1&autospin=0&camera=0"
            className="w-full h-full"
            style={{
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-radial from-transparent via-transparent to-black/60" />
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-25 pointer-events-none" />
    </section>
  );
}